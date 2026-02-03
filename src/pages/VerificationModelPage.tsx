import { Footer } from '../components/Footer';

export function VerificationModelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-6">
            Verification Model
          </p>
          
          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
            Verification without authority access
          </h1>
          
          {/* Subheader */}
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-12">
            HumanTick verification does not rely on live systems, private APIs,
            or ongoing permission from issuers.
          </p>
          
          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/platform/anchoring"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              See the Anchoring Model
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

      {/* The Problem with Traditional Verification Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Text */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
                Verification usually depends on authority
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  Many systems require calling back to an <strong className="font-semibold text-slate-900">issuer</strong>.
                </p>
                <p>
                  Trust breaks when systems go offline, change, or disappear.
                </p>
                <p>
                  Verifiers become dependent on infrastructure they do not control.
                </p>
              </div>
              
              <p className="mt-8 text-lg sm:text-xl text-slate-900 font-medium">
                Verification that requires permission does not scale.
              </p>
            </div>
            
            {/* Right: Abstract Visual */}
            <div className="flex items-center justify-center">
              <div className="space-y-4 w-full max-w-sm">
                <div className="h-2 bg-slate-200 rounded" style={{ width: '80%' }} />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '65%' }} />
                <div className="h-2 bg-slate-200 rounded" style={{ width: '75%' }} />
                <div className="h-px bg-slate-300 my-8" />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '70%' }} />
                <div className="h-2 bg-slate-200 rounded" style={{ width: '85%' }} />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '60%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HumanTick's Verification Principle Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            Verification reads state — not intent
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Verifiers do not <strong className="font-semibold text-slate-900">evaluate trust</strong>.
            </p>
            <p>
              They check whether a trust state exists, is valid, and is anchored.
            </p>
            <p>
              No issuer interaction is required at verification time.
            </p>
          </div>
          
          <p className="mt-12 text-xl sm:text-2xl text-slate-900 font-medium text-center">
            Verification is <strong className="font-semibold">passive</strong>, <strong className="font-semibold">deterministic</strong>, and <strong className="font-semibold">independent</strong>.
          </p>
        </div>
      </section>

      {/* What a Verifier Needs Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Verifier needs */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                Verifier needs
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">The content</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">The trust state reference</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-700">The anchor reference</p>
                </div>
              </div>
            </div>
            
            {/* Right: Verifier does NOT need */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                Verifier does NOT need
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">Issuer systems</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">Platform access</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">Accounts or credentials</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-600">Network connectivity to the authority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conceptual Verification Flow Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            Conceptual verification flow
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">01</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Input
              </h3>
              <p className="text-sm text-slate-600">
                Content and associated trust reference
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">02</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Resolution
              </h3>
              <p className="text-sm text-slate-600">
                Trust state is located and read
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">03</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Anchor Check
              </h3>
              <p className="text-sm text-slate-600">
                Anchoring confirms integrity and existence
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">04</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Decision
              </h3>
              <p className="text-sm text-slate-600">
                Verifier determines validity based on policy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offline and Independent Verification Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            Verification works even when issuers are gone
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Issuers can <strong className="font-semibold text-slate-900">disappear</strong> without breaking verification.
            </p>
            <p>
              Verification relies on <strong className="font-semibold text-slate-900">anchored trust states</strong>, not live authority.
            </p>
            <p>
              This enables long-term, cross-platform trust.
            </p>
          </div>
          
          <p className="mt-12 text-xl sm:text-2xl text-slate-900 font-medium text-center">
            Verification survives organizational change, platform collapse, and time.
          </p>
        </div>
      </section>

      {/* What Verification Is Not Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Verification is not */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                Verification is not
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">A trust oracle</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">A reputation engine</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">A moderation system</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-600">An AI classifier</p>
                </div>
              </div>
            </div>
            
            {/* Right: Verification is */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                Verification is
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">A check against an anchored trust state</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">A deterministic process</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-700">A portable capability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relationship to Trust States Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            Trust is created once — verification happens everywhere
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Trust states are created <strong className="font-semibold text-slate-900">intentionally</strong>.
            </p>
            <p>
              Verification can occur <strong className="font-semibold text-slate-900">anywhere, anytime</strong>.
            </p>
            <p>
              This separation is the core scalability property of HumanTick.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12">
            Independent verification is the foundation of scalable trust
          </h2>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/platform/anchoring"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Explore the Anchoring Model
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
