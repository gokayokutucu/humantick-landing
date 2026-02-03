import { Footer } from '../components/Footer';

export function PlatformTrustRegistryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-6">Platform</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
            Trust Registry
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-12">
            A durable index of trust states that stays usable across platforms, archives, and long-lived distribution.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/reference/trust-model"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Read the Trust Model
            </a>
            <a
              href="/reference/specification"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              Read the Specification
            </a>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-8 text-center leading-tight">
            What it is
          </h2>
          <ul className="list-disc pl-5 text-base sm:text-lg text-slate-700 leading-relaxed space-y-3 max-w-3xl mx-auto">
            <li>A durable index of trust states, maintained independently of content platforms.</li>
            <li>A place where state references resolve to canonical records.</li>
            <li>A retrieval surface for verifiers and tools across systems.</li>
          </ul>
        </div>
      </section>

      {/* Guarantees / Does Not Guarantee */}
      <section className="bg-slate-50 py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">What it guarantees</h3>
              <ul className="list-disc pl-5 text-base text-slate-700 leading-relaxed space-y-2">
                <li>Trust states remain retrievable after creation.</li>
                <li>State references resolve to canonical records.</li>
                <li>Records remain usable across toolchains and archives.</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">What it does not guarantee</h3>
              <ul className="list-disc pl-5 text-base text-slate-700 leading-relaxed space-y-2">
                <li>Content quality, truthfulness, or authority reputation.</li>
                <li>Platform availability or centralized control.</li>
                <li>Any local policy decisions made by verifiers.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">01</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">State is created</h3>
              <p className="text-sm text-slate-600">An authority declares responsibility as a trust state.</p>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">02</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">State is registered</h3>
              <p className="text-sm text-slate-600">A canonical record is written to the registry.</p>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">03</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Reference is shared</h3>
              <p className="text-sm text-slate-600">Content carries a stable reference to the state.</p>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">04</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Verifier resolves</h3>
              <p className="text-sm text-slate-600">Tools resolve and validate the canonical record.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-slate-50 py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-10 text-center">
            Related
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/platform/anchor-service"
              className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 hover:border-slate-300 transition-colors"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Anchor Service</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Commitments that make registry records tamper-evident.
              </p>
            </a>
            <a
              href="/platform/verifier"
              className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 hover:border-slate-300 transition-colors"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Verifier</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Independent verification of trust state integrity.
              </p>
            </a>
            <a
              href="/reference/trust-model"
              className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 hover:border-slate-300 transition-colors md:col-span-2"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Trust Model Reference</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                How authority, accountability, and verification interact across components.
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
