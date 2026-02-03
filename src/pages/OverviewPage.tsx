import { Footer } from '../components/Footer';

export function OverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28 min-h-[520px] sm:min-h-[620px] flex items-center">
        <img
          src="/platform/overview.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-wider text-white/70 mb-6">
            Overview
          </p>
          
          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-white mb-8 leading-tight">
            Trust infrastructure for accountable content
          </h1>
          
          {/* Subheader */}
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
            <mark
              className="
                relative
                inline
                bg-transparent
                px-[0.4em]
                py-[0.12em]
                mx-[-0.4em]
                rounded-[0.85em_0.35em]
                [background-image:linear-gradient(to_right,rgba(0,0,0,0.08),rgba(0,0,0,0.40)_9%,rgba(0,0,0,0.18))]
                [box-decoration-break:clone]
                [-webkit-box-decoration-break:clone]
                text-white/95
              "
            >
              HumanTick is a protocol and verification system that records who stands behind content — and makes that responsibility portable, verifiable, and durable across systems.
            </mark>
          </p>
          
          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/reference/trust-model"
              className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-white/90 transition-colors"
            >
              Explore the Trust Model
            </a>
            <a
              href="/reference/specification"
              className="bg-transparent text-white px-8 py-3 rounded border-2 border-white hover:bg-white/10 transition-colors"
            >
              Read the Specification
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gra y-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Text */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
                Provenance exists. Trust still fails.
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  Content can carry signatures and metadata — yet <strong className="font-semibold text-slate-900">responsibility</strong> remains unclear.
                </p>
                <p>
                  Attribution can exist without <strong className="font-semibold text-slate-900">accountability</strong>.
                </p>
                <p>
                  Verification that depends on private systems cannot scale.
                </p>
              </div>
              
              <p className="mt-8 text-lg sm:text-xl text-slate-900 font-medium">
                Trust that cannot be verified independently is fragile.
              </p>
            </div>
            
            {/* Right: Abstract Side Image */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src="/platform/absolute_side_image_white_background.png"
                  alt=""
                  aria-hidden="true"
                  className="block w-full object-contain"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-px"
                  style={{
                    backgroundImage: `
                      linear-gradient(to left, rgba(255,255,255,0.95), rgba(255,255,255,0) 38%),
                      linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0) 38%),
                      linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0) 38%)
                    `,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '38% 100%, 100% 38%, 100% 38%',
                    backgroundPosition: 'right center, center top, center bottom',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What HumanTick Does Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            HumanTick makes authority explicit
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              HumanTick allows a creator or organization to <strong className="font-semibold text-slate-900">declare responsibility</strong> for content.
            </p>
            <p>
              That declaration becomes a <strong className="font-semibold text-slate-900">registered trust state</strong>.
            </p>
            <p>
              The trust state can be <strong className="font-semibold text-slate-900">anchored</strong>, making it tamper-evident.
            </p>
            <p>
              Anyone can later <strong className="font-semibold text-slate-900">verify responsibility independently</strong>, without permission.
            </p>
          </div>
        </div>
      </section>

      {/* How the System Fits Together Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            How the system fits together
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">01</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Authority declares responsibility
              </h3>
              <p className="text-sm text-slate-600">
                Creator makes an explicit claim
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">02</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Responsibility becomes a trust state
              </h3>
              <p className="text-sm text-slate-600">
                Claim is registered and validated
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">03</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Trust state is anchored
              </h3>
              <p className="text-sm text-slate-600">
                Record becomes tamper-evident
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-400 mb-3">04</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Verification becomes independent
              </h3>
              <p className="text-sm text-slate-600">
                Anyone can verify without permission
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Components Section */}
      <section className="bg-slate-50 py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-12 text-center">
            Core components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Trust Registry */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-3">Trust Registry</h3>
              <p className="text-base text-slate-700 leading-relaxed mb-6">
                A durable index of trust states, maintained independently of content platforms.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">What it guarantees</h4>
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                    <li>Trust states remain retrievable after creation</li>
                    <li>State references resolve to canonical records</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">What it does not guarantee</h4>
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                    <li>Content quality, truthfulness, or authority reputation</li>
                    <li>Platform availability or centralized control</li>
                  </ul>
                </div>
              </div>

	              <div className="mt-6">
	                <a
	                  href="/platform/trust-registry"
	                  className="text-sm font-medium text-slate-700 hover:text-slate-900 underline underline-offset-4"
	                >
	                  Learn more →
	                </a>
	              </div>
	            </div>

            {/* Anchor Service */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-3">Anchor Service</h3>
              <p className="text-base text-slate-700 leading-relaxed mb-6">
                Infrastructure that commits trust state digests to a public anchoring layer, making records tamper-evident.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">What it guarantees</h4>
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                    <li>Commitments are verifiable without service access</li>
                    <li>Anchor records persist beyond service lifetime</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">What it does not guarantee</h4>
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                    <li>Instantaneous finality (subject to network confirmation)</li>
                    <li>Cost elimination (anchoring can incur fees)</li>
                  </ul>
                </div>
              </div>

	              <div className="mt-6">
	                <a
	                  href="/platform/anchor-service"
	                  className="text-sm font-medium text-slate-700 hover:text-slate-900 underline underline-offset-4"
	                >
	                  Learn more →
	                </a>
	              </div>
	            </div>

            {/* Verifier */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-3">Verifier</h3>
              <p className="text-base text-slate-700 leading-relaxed mb-6">
                CLI tools, libraries, and third-party implementations that verify trust state integrity without contacting issuers.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">What it guarantees</h4>
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                    <li>Offline verification using only anchored state</li>
                    <li>Deterministic results based on cryptographic checks</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">What it does not guarantee</h4>
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                    <li>Real-time updates (verification uses the available state)</li>
                    <li>Authority judgment (verifier checks integrity, not trustworthiness)</li>
                  </ul>
                </div>
              </div>

	              <div className="mt-6">
	                <a
	                  href="/platform/verifier"
	                  className="text-sm font-medium text-slate-700 hover:text-slate-900 underline underline-offset-4"
	                >
	                  Learn more →
	                </a>
	              </div>
	            </div>
          </div>
        </div>
      </section>

      {/* What HumanTick Is / Is Not Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: What HumanTick IS */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                What HumanTick is
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">A trust protocol</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">A verification model</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-700">A responsibility registry</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-700">Infrastructure for accountability</p>
                </div>
              </div>
            </div>
            
            {/* Right: What HumanTick IS NOT */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
                What HumanTick is not
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">Not a content platform</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">Not a moderation system</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-base text-slate-600">Not an AI detector</p>
                </div>
                <div className="pb-4">
                  <p className="text-base text-slate-600">Not a closed ecosystem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Mixed Reality Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 text-center leading-tight">
            Built for a world where humans and machines create together
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              HumanTick does not attempt to judge content.
            </p>
            <p>
              It records <strong className="font-semibold text-slate-900">who takes responsibility</strong>, regardless of how content was produced.
            </p>
            <p>
              Human-made, AI-assisted, and AI-generated content can coexist — without ambiguity.
            </p>
          </div>
          
          <p className="mt-12 text-xl sm:text-2xl text-slate-900 font-medium text-center">
            Responsibility scales better than intent.
          </p>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12">
            Make responsibility verifiable
          </h2>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/reference/trust-model"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Explore the Trust Model
            </a>
            <a
              href="/reference/specification"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              View the Specification
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
