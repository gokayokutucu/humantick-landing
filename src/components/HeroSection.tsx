import { getRequestAccessUrl } from "../lib/requestAccessUrl";

export function HeroSection() {
  const requestAccessUrl = getRequestAccessUrl();

  return (
    <section className="relative bg-[#16D98F] overflow-hidden min-h-screen flex items-center">
      <div className="w-full max-w-screen-xl mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl relative z-10">
          <h1 className="text-[120px] leading-[100px] font-serif font-semibold tracking-tight text-black mb-6">
            Make
            <br />
            trust
            <br />
            verifiable.
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-slate-800">
            HumanTick creates a digital hologram of <strong className="font-semibold text-black">trust</strong> —
            <br />
            a visible, <strong className="font-semibold text-black">verifiable</strong> record of <em className="italic">who stands behind content</em>.
            <br />
            <br />
            AI attribution is a registered <strong className="font-semibold text-black">trust signal</strong>.
            <br />
            <strong className="font-semibold text-slate-900">Verification</strong> is anchored and <strong className="font-semibold text-slate-900">verifiable anywhere</strong>.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={requestAccessUrl} className="bg-black text-white px-8 py-3 rounded text-lg hover:bg-gray-900 transition-colors">
              Request Access
            </a>
            <a href="/platform/trust-states" className="bg-transparent border border-black text-black px-8 py-3 rounded text-lg hover:bg-black hover:text-white transition-colors">
              Explore the model
            </a>
          </div>
        </div>
      </div>

      {/* Hero visual: anchored to section edges (not constrained by max-width container) */}
      <div className="pointer-events-none absolute hidden lg:block right-0 bottom-0 h-[720px] w-[1280px] z-0">
        <div
          className="w-full h-full bg-no-repeat bg-right-bottom bg-cover opacity-85"
          style={{ backgroundImage: "url(/creation_of_adam.png)" }}
        />
        {/* Readability veil for headline */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#16D98F] via-[#16D98F]/1 to-transparent" />
      </div>

      {/* Decorative Elements */}


      <div className="absolute top-10 left-5">
        <img
          src="/zebra_circle.svg"
          alt=""
          className="w-[150px] h-[100px]"
        />
      </div>

      {/* <div className="absolute top-35 left-25">
        <img
          src="/zebra_yoyo.svg"
          alt=""
          className="w-[150px] h-[150px]"
        />
      </div> */}

      <div className="absolute bottom-0 left-0 w-32 h-96 bg-[#3B82F6] rounded-tr-full opacity-80" />
    </section>
  );
}
