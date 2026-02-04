# HumanTick Landing

## Railway
Build-time variables (Vite):
- `VITE_API_BASE_URL` (platform public URL)
- `VITE_CONSOLE_ORIGIN` (console public origin)
- `VITE_LOGIN_ORIGIN` (login public origin)

Request Access is hosted on the login app; landing CTAs link to `${VITE_LOGIN_ORIGIN}/access/request`.

Caddy serves `dist/` with SPA fallback and exposes `/health`.
