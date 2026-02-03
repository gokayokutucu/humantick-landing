import { Footer } from '../components/Footer';

export function CoreArchitecturePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-6">
            Core Architecture
          </p>
          
          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
            Actors, artifacts, and trust boundaries
          </h1>
          
          {/* Subheader */}
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-12">
            HumanTick is designed as a verifiable system of responsibility.
            The architecture separates registration, anchoring, and verification
            so trust can scale without permission.
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

      {/* The Architecture at a Glance Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Text */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
                A system, not a service
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  HumanTick treats authority as a <strong className="font-semibold text-slate-900">verifiable state</strong>.
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Registration</strong> creates a trust state.
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Anchoring</strong> makes it tamper-evident.
                </p>
                <p>
                  <strong className="font-semibold text-slate-900">Verification</strong> reads state independently.
                </p>
              </div>
              
              <p className="mt-8 text-lg sm:text-xl text-slate-900 font-medium">
                The verifier does not need a relationship with the issuer.
              </p>
            </div>
            
            {/* Right: Minimal Component Map */}
            <div className="flex items-center justify-center">
              <div className="space-y-4 w-full max-w-sm">
                <div className="border border-slate-300 rounded p-4 bg-slate-50">
                  <p className="text-sm font-medium text-slate-700">Registration</p>
                </div>
                <div className="h-px bg-slate-300 mx-8" />
                <div className="border border-slate-300 rounded p-4 bg-slate-50">
                  <p className="text-sm font-medium text-slate-700">Anchoring</p>
                </div>
                <div className="h-px bg-slate-300 mx-8" />
                <div className="border border-slate-300 rounded p-4 bg-slate-50">
                  <p className="text-sm font-medium text-slate-700">Verification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actors Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            Actors
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Authority */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Authority
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Declares responsibility and is accountable for the claim.
              </p>
            </div>

            {/* Card 2: Registry */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Registry
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Validates and records responsibility as a trust state.
              </p>
            </div>

            {/* Card 3: Anchor Service */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Anchor Service
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Produces a durable commitment that makes the state tamper-evident.
              </p>
            </div>

            {/* Card 4: Verifier */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Verifier
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Checks trust independently using the traveling record and anchor reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artifacts Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-8 text-center">
            Artifacts are designed to travel
          </h2>
          
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-center">
              HumanTick produces artifacts that can move with content or alongside it.
              Verification relies on what is carried, not on private access.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Responsibility Declaration */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Responsibility Declaration
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                The statement of "who stands behind this content."
              </p>
            </div>

            {/* Card 2: Trust State */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Trust State
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                A registered, policy-bound record derived from the declaration.
              </p>
            </div>

            {/* Card 3: Anchor Reference */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Anchor Reference
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                A durable, checkable commitment to the trust state.
              </p>
            </div>

            {/* Card 4: Verification Result */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Verification Result
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                A local decision produced by the verifier under policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Boundaries Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            Trust boundaries
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Trusted at registration time */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                Trusted at registration time
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Registry policy enforcement</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Identity resolution (as required by policy)</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-700">Authority proof validation</p>
                </div>
              </div>
            </div>
            
            {/* Right: Verifiable at verification time */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                Verifiable at verification time
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Trust state integrity (via anchor reference)</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">Authority consistency (via resolvable identity)</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-700">Policy checks (locally applied)</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="mt-12 text-xl sm:text-2xl text-slate-900 font-medium text-center">
            HumanTick minimizes what must be trusted, and maximizes what can be verified.
          </p>
        </div>
      </section>

      {/* Separation of Concerns Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            Separation of concerns
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {/* Block 1 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">01</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Registration
              </h3>
              <p className="text-sm text-slate-600">
                Creates the trust state under policy
              </p>
            </div>
            
            {/* Block 2 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">02</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Anchoring
              </h3>
              <p className="text-sm text-slate-600">
                Makes state tamper-evident and durable
              </p>
            </div>
            
            {/* Block 3 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">03</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Verification
              </h3>
              <p className="text-sm text-slate-600">
                Reads and checks without permission
              </p>
            </div>
          </div>
          
          <p className="mt-16 text-lg sm:text-xl text-slate-900 font-medium text-center">
            Each layer can evolve independently without breaking verification.
          </p>
        </div>
      </section>

      {/* Interop and Extensibility Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            Designed to interoperate
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              HumanTick is <strong className="font-semibold text-slate-900">additive</strong>: it can coexist with existing provenance and signing systems.
            </p>
            <p>
              The architecture supports multiple anchoring backends and multiple verification environments.
            </p>
          </div>
        </div>
      </section>

      {/* Failure Modes Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            Failure modes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Registration not present */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Registration not present
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                No trust state exists to verify.
              </p>
            </div>

            {/* Card 2: Anchor missing or unavailable */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Anchor missing or unavailable
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Verification may degrade under policy.
              </p>
            </div>

            {/* Card 3: Anchor mismatch */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Anchor mismatch
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Indicates inconsistency or tampering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12">
            A scalable trust system starts with clear boundaries
          </h2>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/platform/anchoring"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Explore the Anchoring Model
            </a>
            <a
              href="/platform/verification"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              Explore the Verification Model
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
