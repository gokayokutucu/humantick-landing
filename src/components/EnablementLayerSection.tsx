interface EnablementLayer {
  id: number;
  label: string;
  name: string;
  description: string;
  supporting?: string;
  detailLink: string;
}

const enablementLayers: EnablementLayer[] = [
  {
    id: 1,
    label: "IDENTITY LAYER",
    name: "Decentralized Identity",
    description: "HumanTick relies on W3C Decentralized Identifiers (DIDs) to anchor responsibility claims. Identity is cryptographically verifiable, globally resolvable, and independent of any single authority.",
    supporting: "No central registry controls who can declare authority.",
    detailLink: "#", // Placeholder - leads to informational detail page
  },
  {
    id: 2,
    label: "PERSISTENCE LAYER",
    name: "Distributed Ledger",
    description: "Trust states are anchored to a tamper-evident, append-only ledger. The ledger does not store content—it stores cryptographic commitments that make responsibility durable and change detectable.",
    supporting: "Trust outlives platforms, organizations, and infrastructure migrations.",
    detailLink: "#", // Placeholder - leads to informational detail page
  },
];

export function EnablementLayerSection() {
  const renderLayer = (layer: EnablementLayer) => {
    return (
      <div
        key={layer.id}
        className="bg-slate-200/50 rounded-lg p-8 sm:p-10 flex flex-col"
      >
        <div className="flex-1">
          {/* Layer Label */}
          <p className="text-xs font-medium tracking-widest text-slate-500 mb-4">
            {layer.label}
          </p>

          {/* Layer Name */}
          <h3 className="text-xl sm:text-2xl font-serif font-semibold text-slate-800 mb-4">
            {layer.name}
          </h3>

          {/* Description */}
          <p className="text-base text-slate-600 leading-relaxed mb-3">
            {layer.description}
          </p>

          {/* Supporting (optional) */}
          {layer.supporting && (
            <p className="text-sm text-slate-500 leading-relaxed">
              {layer.supporting}
            </p>
          )}
        </div>

        {/* Subtle secondary button - leads to informational detail page */}
        <div className="mt-8">
          <a
            href={layer.detailLink}
            className="inline-block bg-slate-300/60 text-slate-700 px-6 py-2.5 rounded text-sm font-medium hover:bg-slate-300/80 transition-colors"
          >
            Learn more
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-slate-100 py-32 sm:py-40">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* 2-column equal width layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {enablementLayers.map(renderLayer)}
          </div>
        </div>
      </div>
    </section>
  );
}
