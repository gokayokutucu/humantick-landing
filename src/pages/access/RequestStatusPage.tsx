import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { findAccessRequestById, loadAccessRequests } from "../../lib/accessRequests";

function statusLabel(status: string) {
  if (status === "approved") return "Approved";
  if (status === "rejected") return "Rejected";
  return "Pending review";
}

export function RequestStatusPage() {
  const [params] = useSearchParams();
  const requestId = params.get("rid") ?? "";

  const record = useMemo(() => {
    if (!requestId) return undefined;
    const records = loadAccessRequests();
    return findAccessRequestById(records, requestId);
  }, [requestId]);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Access</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Request status
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Status lookup for your access request.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          {!requestId ? (
            <div className="space-y-4 text-base text-slate-700 leading-relaxed">
              <p>
                Provide a request id in the URL, for example:{" "}
                <code className="text-slate-900">/request-status?rid=&lt;request_id&gt;</code>
              </p>
              <a
                href="/access/request"
                className="inline-block bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
              >
                Request Access
              </a>
            </div>
          ) : !record ? (
            <div className="space-y-4 text-base text-slate-700 leading-relaxed">
              <p>
                No request was found for id <strong className="text-slate-900">{requestId}</strong>.
              </p>
              <a
                href="/access/request"
                className="inline-block bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
              >
                Request Access
              </a>
            </div>
          ) : (
            <div className="space-y-4 text-base text-slate-700 leading-relaxed">
              <p>
                Request <strong className="text-slate-900">{record.request_id}</strong>:{" "}
                <strong className="text-slate-900">{statusLabel(record.status)}</strong>
              </p>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">Company</div>
                    <div className="text-sm font-medium text-slate-900">{record.company_name}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">Email</div>
                    <div className="text-sm font-medium text-slate-900">{record.email}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">Domain</div>
                    <div className="text-sm font-medium text-slate-900">{record.domain}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">Created</div>
                    <div className="text-sm font-medium text-slate-900">{record.created_at}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <a
                  href="/"
                  className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
                >
                  Return Home
                </a>
                <a
                  href="/contact"
                  className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

