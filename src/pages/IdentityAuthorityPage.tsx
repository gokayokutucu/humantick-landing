import { Footer } from '../components/Footer';

export function IdentityAuthorityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-6">
            Identity & Authority
          </p>
          
          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
            Verified authority, not implied identity
          </h1>
          
          {/* Subheader */}
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-12">
            HumanTick separates who created content from who takes responsibility for it.
            Authority is proven through verifiable identity, then recorded as a trust state.
          </p>
          
          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/platform/trust-states"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              View Trust States
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

      {/* The Core Confusion Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Text */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
                Identity is not responsibility
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  Many systems can show "who uploaded" or "who signed," but <strong className="font-semibold text-slate-900">responsibility</strong> remains ambiguous.
                </p>
                <p>
                  HumanTick treats responsibility as an <strong className="font-semibold text-slate-900">explicit declaration</strong> made by an authority.
                </p>
                <p>
                  Identity is the foundation that makes authority verifiable, not assumed.
                </p>
              </div>
              
              <p className="mt-8 text-lg sm:text-xl text-slate-900 font-medium">
                HumanTick verifies authority as a state, not as a private claim.
              </p>
            </div>
            
            {/* Right: Abstract Visual */}
            <div className="flex items-center justify-center">
              <div className="space-y-4 w-full max-w-sm">
                <div className="h-2 bg-slate-200 rounded" style={{ width: '80%' }} />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '70%' }} />
                <div className="h-2 bg-slate-200 rounded" style={{ width: '85%' }} />
                <div className="h-px bg-slate-300 my-8" />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '75%' }} />
                <div className="h-2 bg-slate-200 rounded" style={{ width: '65%' }} />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '80%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What "Authority" Means in HumanTick Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            Authority is an accountable actor
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              An authority is an actor that can be <strong className="font-semibold text-slate-900">held accountable</strong> for a declaration.
            </p>
            <p>
              Authority can be an organization, newsroom, institution, lab, studio, or service.
            </p>
            <p>
              Authority can <strong className="font-semibold text-slate-900">delegate signing</strong>, but cannot outsource responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* How Identity Becomes Verifiable Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            How identity becomes verifiable
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Identity Reference */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Identity Reference
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                A stable identifier representing the authority.
              </p>
            </div>

            {/* Card 2: Proof of Control */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Proof of Control
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Evidence that the authority controls its identifier.
              </p>
            </div>

            {/* Card 3: Resolution */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Resolution
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                A deterministic way to retrieve identity material when needed.
              </p>
            </div>

            {/* Card 4: Binding to Trust State */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Binding to Trust State
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                The authority identity is bound to the trust state at registration time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DID as a Resolution Mechanism Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            Resolution enables verifiable authority
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Identity must be <strong className="font-semibold text-slate-900">resolvable</strong> in a consistent way.
            </p>
            <p>
              HumanTick can use DID methods (e.g. DID:web) as a resolution layer.
            </p>
            <p>
              Resolution is the bridge from "claimed identity" to "verifiable authority."
            </p>
          </div>
          
          <div className="mt-12 space-y-4 text-base sm:text-lg text-slate-600">
            <p>
              Resolution at verification time
            </p>
            <p>
              Portable fallback verification where possible
            </p>
            <p>
              Graceful degradation under policy
            </p>
          </div>
        </div>
      </section>

      {/* Delegation Without Losing Accountability Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: What can be delegated */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                What can be delegated
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Signing operations</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Tooling / automation</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-700">Workflow steps</p>
                </div>
              </div>
            </div>
            
            {/* Right: What cannot be delegated */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                What cannot be delegated
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Responsibility</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Policy obligations</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-700">Authority identity</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="mt-12 text-xl sm:text-2xl text-slate-900 font-medium text-center">
            Delegation changes who acts, not who is accountable.
          </p>
        </div>
      </section>

      {/* Human + AI Attribution Without Guesswork Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            Attribution is registered, not inferred
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              HumanTick does not attempt to <strong className="font-semibold text-slate-900">detect AI</strong>.
            </p>
            <p>
              It records declared production context as part of the trust state.
            </p>
            <p>
              Human-made, AI-assisted, and AI-generated content can be declared and audited under policy.
            </p>
          </div>
          
          <p className="mt-12 text-xl sm:text-2xl text-slate-900 font-medium text-center">
            Accountability scales better than inference.
          </p>
        </div>
      </section>

      {/* Failure Modes Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            Failure modes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Unresolvable identity */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Unresolvable identity
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Authority cannot be verified under current policy.
              </p>
            </div>

            {/* Card 2: Proof mismatch */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Proof mismatch
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Identity proof does not match the declared authority.
              </p>
            </div>

            {/* Card 3: Expired or revoked authority */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Expired or revoked authority
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Policy may treat the declaration as invalid or historical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12">
            Authority becomes scalable when it is verifiable
          </h2>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/platform/verification"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Explore the Verification Model
            </a>
            <a
              href="/platform/trust-states"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              View Trust States
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
