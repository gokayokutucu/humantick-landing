export function getRequestAccessUrl() {
  const env = (import.meta as any).env ?? {};
  const loginOrigin = env.VITE_LOGIN_ORIGIN as string | undefined;
  if (loginOrigin) return `${loginOrigin.replace(/\/$/, "")}/access/request`;
  return "/access/request";
}
