import { Footer } from '../../components/Footer';

export function CompanyAboutPage() {
  const principles = [
    {
      title: 'Authority is explicit',
      description: 'Trust cannot be inferred. It must be declared, signed, and anchored.',
    },
    {
      title: 'Verification is offline',
      description: 'No verifier should require permission from an issuer to check a claim.',
    },
    {
      title: 'Responsibility is portable',
      description: 'Trust states travel with content across platforms and archives.',
    },
    {
      title: 'Systems describe, humans decide',
      description: 'Technical infrastructure records facts. Judgment remains with people.',
    },
    {
      title: 'Durability over convenience',
      description: 'Design for decades, not quarters. Trust outlives platforms.',
    },
    {
      title: 'Interoperability by default',
      description: 'HumanTick complements existing standards rather than replacing them.',
    },
  ];

  const audiences = [
    {
      title: 'Publishing & Media',
      outcome: 'Editorial responsibility becomes portable and verifiable.',
      constraint: 'Attribution does not replace journalism. It makes authority checkable.',
    },
    {
      title: 'Creative Industries',
      outcome: 'Authorship claims remain intact across distribution channels.',
      constraint: 'Protection does not replace copyright. It makes responsibility traceable.',
    },
    {
      title: 'Research & Data',
      outcome: 'Dataset provenance remains verifiable across citations and archives.',
      constraint: 'Verification does not replace peer review. It makes lineage checkable.',
    },
    {
      title: 'AI Systems & Agents',
      outcome: 'Machine outputs carry declared responsibility from their operators.',
      constraint: 'AI footprint does not assign authority. Humans remain accountable.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Company</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            About
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Mission, principles, and what we're building toward.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">Mission</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            HumanTick enables content to carry verifiable responsibility. It creates infrastructure for declaring
            authority, anchoring those declarations, and verifying them independently—without requiring permission from
            issuers or reliance on platforms. The goal is to make trust portable, durable, and checkable across time
            and distribution channels.
          </p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-12">Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{principle.title}</h3>
                <p className="text-base text-slate-700 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What HumanTick Is Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">What HumanTick Is</h2>
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              HumanTick is trust infrastructure. It provides a protocol for declaring responsibility, anchoring those
              declarations on durable ledgers, and verifying them independently. Trust states are signed, registered,
              and made tamper-evident through cryptographic anchoring. Verification reads these states without requiring
              contact with issuers.
            </p>
            <p>
              The system establishes clear boundaries: who declared responsibility, what they declared, when it was
              anchored, and whether those commitments remain intact. It does not evaluate quality, truthfulness, or
              intent. It records accountability and makes it verifiable.
            </p>
          </div>
        </div>
      </section>

      {/* What HumanTick Is Not Section */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">What HumanTick Is Not</h2>
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              HumanTick is not a content moderation system. It does not determine what content is allowed, prohibited,
              or flagged. Moderation policies are applied by platforms and institutions using trust states as one input
              among many.
            </p>
            <p>
              It is not a reputation framework. It does not aggregate authority reputation, compute trust scores, or
              maintain historical performance metrics. Reputation systems may consume trust states, but the protocol
              itself remains neutral.
            </p>
            <p>
              It is not a truth verification system. It records who stands behind content, not whether content is
              accurate. Fact-checking and verification of claims happen outside the protocol, using trust states as
              inputs.
            </p>
            <p>
              It is not a replacement for legal frameworks. The protocol provides technical infrastructure for
              accountability. It does not replace contracts, regulatory requirements, or legal responsibility. Trust
              states may serve as evidence in legal contexts, but they do not constitute legal agreements.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-12">Who It's For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map((audience, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{audience.title}</h3>
                <p className="text-base text-slate-700 leading-relaxed mb-2">{audience.outcome}</p>
                <p className="text-base text-slate-600 leading-relaxed">{audience.constraint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://humantick.org/spec"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Read the Specification
            </a>
            <a
              href="/company/governance"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              Explore Governance
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
