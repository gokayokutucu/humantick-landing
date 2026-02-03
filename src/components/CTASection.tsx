export function CTASection() {
  return (
    <section className="bg-[#3B82F6] py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Headline - calm, editorial */}
        <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-white mb-6 leading-tight">
          Start with the system.
        </h2>
        
        {/* Supporting text - frames orientation, not signup */}
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          Explore how HumanTick turns authority into verifiable proof — before you integrate, deploy, or decide.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/* Primary CTA - Get Started (orientation/onboarding) */}
          <a
            href="/access/request"
            className="bg-white text-[#3B82F6] px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </a>
          
          {/* Secondary CTA - Contact Sales (outline style, quieter) */}
          <a
            href="/contact"
            className="bg-transparent text-white px-8 py-3 rounded border-2 border-white/40 hover:border-white/60 hover:bg-white/10 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}
