import { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { getRequestAccessUrl } from "../../lib/requestAccessUrl";

export function RequestAccessPage() {
  const requestAccessUrl = getRequestAccessUrl();

  useEffect(() => {
    if (requestAccessUrl.startsWith("/")) return;
    window.location.href = requestAccessUrl;
  }, [requestAccessUrl]);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Access</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Request access has moved.
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Request Access is now handled through the Login application for the closed pilot.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-base text-slate-600 mb-8">
            If you are not redirected automatically, use the link below.
          </p>
          <a
            href={requestAccessUrl}
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
          >
            Go to Request Access
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
