import { Footer } from '../components/Footer';

export function TrustStatesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-6">
            Trust States
          </p>
          
          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
            Trust as a registered state
          </h1>
          
          {/* Subheader */}
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-12">
            In HumanTick, trust is not implied, inferred, or negotiated.
            It is explicitly registered, policy-bound, and verifiable.
          </p>
          
          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/reference/trust-model"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              View the Trust Model
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

      {/* Why Trust Needs a State Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Text */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
                Claims are not enough
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  A signature proves <strong className="font-semibold text-slate-900">integrity</strong>, not responsibility.
                </p>
                <p>
                  Metadata can describe provenance, but cannot enforce <strong className="font-semibold text-slate-900">accountability</strong>.
                </p>
                <p>
                  Trust that exists only at verification time is unstable.
                </p>
              </div>
              
              <p className="mt-8 text-lg sm:text-xl text-slate-900 font-medium">
                HumanTick introduces trust as something that can exist <em className="italic">before</em> verification.
              </p>
            </div>
            
            {/* Right: Abstract Visual */}
            <div className="flex items-center justify-center">
              <div className="space-y-4 w-full max-w-sm">
                <div className="h-2 bg-slate-200 rounded" style={{ width: '70%' }} />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '85%' }} />
                <div className="h-2 bg-slate-200 rounded" style={{ width: '60%' }} />
                <div className="h-px bg-slate-300 my-8" />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '75%' }} />
                <div className="h-2 bg-slate-200 rounded" style={{ width: '90%' }} />
                <div className="h-2 bg-slate-300 rounded" style={{ width: '65%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is a Trust State Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            A trust state is a registered responsibility
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              A trust state records <strong className="font-semibold text-slate-900">who claims responsibility</strong> for a piece of content.
            </p>
            <p>
              It is created <strong className="font-semibold text-slate-900">intentionally</strong>, not derived.
            </p>
            <p>
              It exists independently of how content is later distributed or consumed.
            </p>
          </div>
        </div>
      </section>

      {/* Properties of a Trust State Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            Properties of a trust state
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Explicit */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Explicit
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Responsibility is declared directly by an authority — never inferred.
              </p>
            </div>

            {/* Card 2: Policy-bound */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Policy-bound
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Rules and constraints are attached at registration time.
              </p>
            </div>

            {/* Card 3: Verifiable */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Verifiable
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Anyone can verify the trust state without private access.
              </p>
            </div>

            {/* Card 4: Durable */}
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Durable
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                The trust state persists beyond platforms, sessions, or systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle of a Trust State Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            Lifecycle of a trust state
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">01</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Declaration
              </h3>
              <p className="text-sm text-slate-600">
                An authority claims responsibility
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">02</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Registration
              </h3>
              <p className="text-sm text-slate-600">
                The claim becomes a trust state
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">03</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Anchoring
              </h3>
              <p className="text-sm text-slate-600">
                The trust state becomes tamper-evident
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">04</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Verification
              </h3>
              <p className="text-sm text-slate-600">
                Responsibility can be checked independently
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What a Trust State Is Not Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: It is not */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                It is not
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">Not a reputation score</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">Not content moderation</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">Not intent analysis</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-600">Not AI detection</p>
                </div>
              </div>
            </div>
            
            {/* Right: It is */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                It is
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">A responsibility record</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">A verification primitive</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">A trust boundary</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-700">A portable reference point</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relationship to Verification Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            Verification reads trust states — it does not create them
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Verification does not decide trust.
            </p>
            <p>
              It checks whether a <strong className="font-semibold text-slate-900">trust state exists</strong> and is valid.
            </p>
            <p>
              This separation allows verification to scale without authority control.
            </p>
          </div>
          
          <p className="mt-12 text-xl sm:text-2xl text-slate-900 font-medium text-center">
            Trust states make verification passive — and resilient.
          </p>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12">
            Trust becomes real when it can be checked
          </h2>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/platform/verification"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Explore the Verification Model
            </a>
            <a
              href="/reference/specification"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              Read the Specification
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
