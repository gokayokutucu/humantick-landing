import { Footer } from '../components/Footer';

export function InteroperabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-6">
            Interoperability
          </p>
          
          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
            Additive trust, portable verification
          </h1>
          
          {/* Subheader */}
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-12">
            HumanTick is designed to layer on top of existing provenance systems.
            It makes responsibility explicit and verifiable, without breaking established workflows.
          </p>
          
          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/reference/specification"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Read the Specification
            </a>
            <a
              href="/platform/verification"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              Explore the Verification Model
            </a>
          </div>
        </div>
      </section>

      {/* Why Interoperability Matters Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Text */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
                Trust can't be platform-bound
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  Content moves across tools, platforms, archives, and <strong className="font-semibold text-slate-900">jurisdictions</strong>.
                </p>
                <p>
                  Verification must survive format changes and distribution channels.
                </p>
                <p>
                  Interoperability prevents lock-in and increases <strong className="font-semibold text-slate-900">durability</strong>.
                </p>
              </div>
              
              <p className="mt-8 text-lg sm:text-xl text-slate-900 font-medium">
                If trust can't travel, it can't scale.
              </p>
            </div>
            
            {/* Right: Abstract Visual */}
            <div className="flex items-center justify-center">
              <div className="space-y-4 w-full max-w-sm">
                <div className="h-2 bg-slate-200 rounded" style={{ width: '85%' }} />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '70%' }} />
                <div className="h-2 bg-slate-200 rounded" style={{ width: '80%' }} />
                <div className="h-px bg-slate-300 my-8" />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '75%' }} />
                <div className="h-2 bg-slate-200 rounded" style={{ width: '90%' }} />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '65%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HumanTick's Interop Principle Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            HumanTick complements provenance
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Provenance can describe <strong className="font-semibold text-slate-900">what happened</strong>.
            </p>
            <p>
              HumanTick records <strong className="font-semibold text-slate-900">who stands behind it</strong> as a trust state.
            </p>
            <p>
              The two can coexist: one doesn't invalidate the other.
            </p>
          </div>
        </div>
      </section>

      {/* Relationship to C2PA Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: C2PA (conceptually) */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                C2PA (conceptually)
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Captures provenance metadata</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Supports content integrity and provenance claims</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-700">Often travels with media assets</p>
                </div>
              </div>
            </div>
            
            {/* Right: HumanTick (conceptually) */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                HumanTick (conceptually)
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Registers responsibility as a trust state</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Anchors that state for tamper-evidence</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-700">Enables verifier-independent verification</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-base sm:text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              C2PA can make content verifiable offline.
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-slate-900">HumanTick makes trust verifiable — and portable across systems.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Interop Surfaces Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            Interop surfaces
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Content Layer */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Content Layer
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Trust references can travel with content or alongside it.
              </p>
            </div>

            {/* Card 2: Registry Layer */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Registry Layer
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Trust states can be queried, resolved, or mirrored under policy.
              </p>
            </div>

            {/* Card 3: Anchor Layer */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Anchor Layer
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Multiple anchoring backends can exist behind the same verification model.
              </p>
            </div>

            {/* Card 4: Verifier Layer */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Verifier Layer
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Different verifiers (tools, clients, devices) can check the same anchored state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portability and Graceful Degradation Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            Interoperability includes fallback paths
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Verification policies can define <strong className="font-semibold text-slate-900">acceptable degradation</strong>:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="pl-2">
                If the anchor is unavailable, treat as "unverified" rather than "false".
              </li>
              <li className="pl-2">
                If identity resolution fails, keep a deterministic reason.
              </li>
              <li className="pl-2">
                The system should remain honest under failure.
              </li>
            </ul>
          </div>
          
          <p className="mt-12 text-xl sm:text-2xl text-slate-900 font-medium text-center">
            A portable model is one that fails predictably.
          </p>
        </div>
      </section>

      {/* What HumanTick Does Not Require Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: HumanTick does not require */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                HumanTick does not require
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">A single platform</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">A single ledger</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">A single vendor verifier</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-600">A closed ecosystem</p>
                </div>
              </div>
            </div>
            
            {/* Right: HumanTick enables */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                HumanTick enables
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Multi-tool verification</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Multi-environment portability</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-700">Long-lived accountability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interop without Governance Drift Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            Interop without governance drift
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Consistent semantics */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Consistent semantics
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Interop must preserve what a trust state means.
              </p>
            </div>

            {/* Card 2: Policy alignment */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Policy alignment
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Verifiers apply policy locally, not via issuer permission.
              </p>
            </div>

            {/* Card 3: Stable references */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Stable references
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Anchoring ensures cross-system consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12">
            Interoperability turns trust into infrastructure
          </h2>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/platform/architecture"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Explore Core Architecture
            </a>
            <a
              href="/platform/verification"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              Explore Verification Model
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
