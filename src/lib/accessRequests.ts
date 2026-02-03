export type AccessRequestStatus = "pending" | "approved" | "rejected";

export type AccessRequestRecord = {
  request_id: string;
  company_name: string;
  contact_name: string;
  email: string;
  apex_domain: string;
  use_case: string;
  status: AccessRequestStatus;
  created_at: string;
  approved_at?: string;
  rejected_at?: string;
  rejection_reason?: string;
};

export const ACCESS_REQUESTS_STORAGE_KEY = "htick_access_requests";

function safeJsonParse(value: string | null): unknown {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function loadAccessRequests(): AccessRequestRecord[] {
  const parsed = safeJsonParse(localStorage.getItem(ACCESS_REQUESTS_STORAGE_KEY));
  if (!Array.isArray(parsed)) return [];

  return parsed.filter((item): item is AccessRequestRecord => {
    if (!item || typeof item !== "object") return false;
    const record = item as Partial<AccessRequestRecord>;
    return (
      typeof record.request_id === "string" &&
      typeof record.company_name === "string" &&
      typeof record.contact_name === "string" &&
      typeof record.email === "string" &&
      typeof record.apex_domain === "string" &&
      typeof record.use_case === "string" &&
      (record.status === "pending" || record.status === "approved" || record.status === "rejected") &&
      typeof record.created_at === "string"
    );
  });
}

export function saveAccessRequests(records: AccessRequestRecord[]) {
  localStorage.setItem(ACCESS_REQUESTS_STORAGE_KEY, JSON.stringify(records));
}

export function generateRequestId(): string {
  // Prefer stable UUIDs; fall back to timestamp+random to avoid introducing dependencies.
  const randomUuid = globalThis.crypto?.randomUUID?.();
  if (randomUuid) return randomUuid;
  return `rid_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

export function createAccessRequest(
  input: Omit<AccessRequestRecord, "request_id" | "status" | "created_at">
): AccessRequestRecord {
  return {
    request_id: generateRequestId(),
    status: "pending",
    created_at: new Date().toISOString(),
    ...input,
  };
}

export function findAccessRequestById(
  records: AccessRequestRecord[],
  requestId: string
): AccessRequestRecord | undefined {
  return records.find((r) => r.request_id === requestId);
}
