interface Capability {
  id: number;
  name: string;
  headline: string;
  description: string;
  color: string; // Core HumanTick color
  ctaText: string;
  ctaLink: string;
}

const capabilities: Capability[] = [
  {
    id: 1,
    name: "Authority Registration",
    headline: "Declare who stands behind content",
    description: "Creators and organizations explicitly register their responsibility for content. Authority becomes visible, intentional, and bound to identity from the moment of creation.",
    color: "#FACC15", // Yellow
    ctaText: "Read specification",
    ctaLink: "/platform/identity",
  },
  {
    id: 2,
    name: "Responsibility Claims",
    headline: "Transform statements into verifiable commitments",
    description: "Declared authority becomes a cryptographic responsibility claim. Identity, content, and intent are bound together—making responsibility provable, not assumed.",
    color: "#16D98F", // Green
    ctaText: "View technical details",
    ctaLink: "/reference/cryptographic-primitives",
  },
  {
    id: 3,
    name: "Trust State Registry",
    headline: "Record trust as a durable state",
    description: "Responsibility claims are recorded as trust states designed to survive organizational change, platform shifts, and system migrations. Trust becomes a state, not a moment.",
    color: "#3B82F6", // Blue
    ctaText: "Explore registry model",
    ctaLink: "/reference/trust-model",
  },
  {
    id: 4,
    name: "Anchored Attestations",
    headline: "Make change detectable",
    description: "Trust states are anchored to stable, tamper-evident references. Responsibility cannot be silently altered or erased. Change becomes detectable. History becomes durable.",
    color: "#FA7875", // Coral
    ctaText: "Read about anchoring",
    ctaLink: "/platform/anchoring",
  },
  {
    id: 5,
    name: "Independent Verification",
    headline: "Verify without permission",
    description: "Anyone can verify responsibility without contacting the issuer, platform, or registry. Verification relies solely on the anchored trust record that travels with the content.",
    color: "#FACC15", // Yellow (cycle back)
    ctaText: "See verification flow",
    ctaLink: "/reference/verification-rules",
  },
];

const slogans = [
  "Authority should not be implicit.",
  "Claims are not trust. Registration is.",
  "Trust must outlive systems.",
  "If it can change unnoticed, it was never trust.",
  "Verification should not require permission.",
];

export function CapabilitiesSection() {
  const fingerprintForColor = (color: string) => {
    switch (color.toUpperCase()) {
      case "#3B82F6":
        return "/abstract_fingerprint_blue.svg";
      case "#16D98F":
        return "/abstract_fingerprint_green.svg";
      case "#FA7875":
        return "/abstract_fingerprint_red.svg";
      case "#FACC15":
        return "/abstract_fingerprint_yellow.svg";
      default:
        return "/abstract_fingerprint_orange.svg";
    }
  };

  const renderCapabilityCell = (capability: Capability) => {
    return (
      <div
        key={capability.id}
        className="group relative rounded-lg overflow-hidden min-h-[320px] transition-all duration-300"
        style={{ backgroundColor: capability.color }}
      >
        {/* Pastel Overlay (fades out on hover) */}
        <div className="absolute inset-0 bg-white/65 group-hover:bg-white/0 transition-all duration-300 ease-out" />

        {/* Content */}
        <div className="relative h-full p-8 sm:p-10 flex flex-col justify-between">
          <div>
            {/* Capability Name (small, calm) */}
            <p className="text-xs font-medium uppercase tracking-wider text-slate-800/70 mb-4">
              {capability.name}
            </p>

            {/* Headline (strong, warm) */}
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900 mb-4 leading-tight">
              {capability.headline}
            </h3>

            {/* Description (dense but readable) */}
            <p className="text-base text-slate-700 leading-relaxed">
              {capability.description}
            </p>
          </div>

          {/* Text-only CTA */}
          <div className="mt-8">
            <a
              href={capability.ctaLink}
              className="group/cta inline-flex items-center text-slate-900 font-medium text-base transition-all duration-200"
            >
              <span className="group-hover/cta:underline">
                {capability.ctaText}
              </span>
              <svg
                className="ml-1 w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Optional abstract geometric shapes (subtle) */}
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 p-4 pointer-events-none">
          <img
            src={fingerprintForColor(capability.color)}
            alt=""
            className="w-full h-full object-contain"
            aria-hidden="true"
          />
        </div>
      </div>
    );
  };

  const renderSloganCell = (slogan: string, index: number) => {
    return (
      <div key={`slogan-${index}`} className="flex items-center py-8 sm:py-12">
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 leading-tight">
          {slogan}
        </h2>
      </div>
    );
  };

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* 2-column × 5-row grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* ROW 1: Slogan (L) | Capability (R) */}
            {renderSloganCell(slogans[0], 0)}
            {renderCapabilityCell(capabilities[0])}

            {/* ROW 2: Capability (L) | Slogan (R) */}
            {renderCapabilityCell(capabilities[1])}
            {renderSloganCell(slogans[1], 1)}

            {/* ROW 3: Slogan (L) | Capability (R) */}
            {renderSloganCell(slogans[2], 2)}
            {renderCapabilityCell(capabilities[2])}

            {/* ROW 4: Capability (L) | Slogan (R) */}
            {renderCapabilityCell(capabilities[3])}
            {renderSloganCell(slogans[3], 3)}

            {/* ROW 5: Slogan (L) | Capability (R) */}
            {renderSloganCell(slogans[4], 4)}
            {renderCapabilityCell(capabilities[4])}

          </div>
        </div>
      </div>
    </section>
  );
}
