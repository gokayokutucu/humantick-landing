import { useEffect, useRef } from "react";

type TurnstileWindow = Window & {
  turnstile?: {
    render: (container: HTMLElement, options: Record<string, unknown>) => string;
    remove: (widgetId: string) => void;
  };
};

const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileWidgetProps = {
  siteKey?: string;
  onToken: (token: string | null) => void;
};

export function TurnstileWidget({ siteKey, onToken }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!siteKey || !containerRef.current) {
      return;
    }

    let cancelled = false;

    const loadScript = () =>
      new Promise<void>((resolve, reject) => {
        const existing = document.querySelector(`script[src="${TURNSTILE_SCRIPT}"]`);
        if (existing) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = TURNSTILE_SCRIPT;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("turnstile_script_failed"));
        document.body.appendChild(script);
      });

    const render = async () => {
      try {
        await loadScript();
        if (cancelled) return;
        const win = window as TurnstileWindow;
        if (!win.turnstile || !containerRef.current) return;
        widgetIdRef.current = win.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token: string) => onToken(token),
          "expired-callback": () => onToken(null),
          "error-callback": () => onToken(null),
        });
      } catch {
        onToken(null);
      }
    };

    render();

    return () => {
      cancelled = true;
      const win = window as TurnstileWindow;
      if (widgetIdRef.current && win.turnstile) {
        win.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, [siteKey, onToken]);

  if (!siteKey) return null;

  return <div ref={containerRef} className="mt-4" />;
}
