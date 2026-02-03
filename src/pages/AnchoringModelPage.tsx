import { Footer } from '../components/Footer';

export function AnchoringModelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-6">
            Anchoring Model
          </p>
          
          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
            Make trust states tamper-evident
          </h1>
          
          {/* Subheader */}
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Anchoring binds a registered trust state to a stable, portable reference.
            It makes changes detectable, history durable, and verification resilient across systems.
          </p>
          
          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/platform/verification"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Explore Verification
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

      {/* Why Registration Alone Isn't Enough Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Text */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
                A trust state can exist — but still be rewritten
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  Registration creates an <strong className="font-semibold text-slate-900">explicit state</strong>, but does not automatically make it durable.
                </p>
                <p>
                  Systems evolve; databases migrate; parties disappear.
                </p>
                <p>
                  Anchoring provides a stable reference so integrity violations become <strong className="font-semibold text-slate-900">detectable</strong>.
                </p>
              </div>
              
              <p className="mt-8 text-lg sm:text-xl text-slate-900 font-medium">
                Anchoring turns "recorded" into "tamper-evident."
              </p>
            </div>
            
            {/* Right: Abstract Visual */}
            <div className="flex items-center justify-center">
              <div className="space-y-4 w-full max-w-sm">
                <div className="h-2 bg-slate-200 rounded" style={{ width: '75%' }} />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '90%' }} />
                <div className="h-2 bg-slate-200 rounded" style={{ width: '65%' }} />
                <div className="h-px bg-slate-300 my-8" />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '80%' }} />
                <div className="h-2 bg-slate-200 rounded" style={{ width: '70%' }} />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Anchoring Is Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            Anchoring is a commitment to a state
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Anchoring does not <strong className="font-semibold text-slate-900">judge content</strong>.
            </p>
            <p>
              Anchoring does not <strong className="font-semibold text-slate-900">decide trust</strong>.
            </p>
            <p>
              Anchoring creates a verifiable commitment to a trust state at a point in time.
            </p>
            <p>
              The result is a <strong className="font-semibold text-slate-900">reference that can travel</strong> and be checked later.
            </p>
          </div>
        </div>
      </section>

      {/* What Anchoring Guarantees Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Anchoring guarantees */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                Anchoring guarantees
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">
                    <strong className="font-semibold text-slate-900">Tamper-evidence</strong> — changes become detectable
                  </p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">
                    <strong className="font-semibold text-slate-900">Time-boundedness</strong> — a state existed at a given time
                  </p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">
                    <strong className="font-semibold text-slate-900">Durability</strong> — reference survives system changes
                  </p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-700">
                    <strong className="font-semibold text-slate-900">Portability</strong> — can be checked across environments
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right: Anchoring does NOT guarantee */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                Anchoring does NOT guarantee
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">Truthfulness of the content</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">Moral correctness</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">Intent</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">Reputation</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-600">Platform endorsement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Anchoring Object Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            The anchoring object
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Trust State Reference */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Trust State Reference
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                A stable pointer to the registered state.
              </p>
            </div>

            {/* Card 2: Anchor Reference */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Anchor Reference
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                A durable commitment that can be checked later.
              </p>
            </div>

            {/* Card 3: Timestamp Boundary */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Timestamp Boundary
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                A "when" signal that strengthens auditability.
              </p>
            </div>

            {/* Card 4: Tamper-evident Link */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Tamper-evident Link
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                The relationship that reveals changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anchor Independence Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            Anchoring is a property — not a platform
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              HumanTick treats anchoring as a <strong className="font-semibold text-slate-900">model</strong>, not a vendor dependency.
            </p>
            <p>
              Today it can be operated by HumanTick.
            </p>
            <p>
              Tomorrow it can be backed by a shared public ledger.
            </p>
            <p>
              The verifier only cares that the anchor is <strong className="font-semibold text-slate-900">checkable and stable</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* How Anchoring Enables Independent Verification Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            How anchoring enables independent verification
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">01</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                State exists
              </h3>
              <p className="text-sm text-slate-600">
                Registered trust state
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">02</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Anchor exists
              </h3>
              <p className="text-sm text-slate-600">
                Durable commitment
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">03</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Verifier checks anchor
              </h3>
              <p className="text-sm text-slate-600">
                No issuer required
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">04</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Verifier applies policy
              </h3>
              <p className="text-sm text-slate-600">
                Local decision
              </p>
            </div>
          </div>
          
          <p className="mt-16 text-xl sm:text-2xl text-slate-900 font-medium text-center">
            Verification depends on anchored state, not ongoing access.
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
            {/* Card 1: Missing anchor */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Missing anchor
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                State may exist, but durability is not proven.
              </p>
            </div>

            {/* Card 2: Anchor mismatch */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Anchor mismatch
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Indicates tampering or inconsistency.
              </p>
            </div>

            {/* Card 3: Anchor unavailable */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Anchor unavailable
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Verification can degrade gracefully depending on policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12">
            Anchoring makes verification resilient
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
