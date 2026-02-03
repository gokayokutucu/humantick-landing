import { Footer } from '../components/Footer';
import { useState } from 'react';

export function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const principles = [
    {
      title: 'Not seat-based',
      description:
        'Pricing does not depend on users, roles, or team size. The cost of verifiable responsibility is not a function of how many people need access.',
    },
    {
      title: 'Not feature-based',
      description:
        'All core trust mechanics are always available. Verification, anchoring, and trust state creation are not gated behind pricing tiers.',
    },
    {
      title: 'Context-based',
      description:
        'Cost reflects how long, where, and under which constraints responsibility must remain verifiable. Institutional requirements shape pricing.',
    },
  ];

  const factors = [
    {
      title: 'Verification volume',
      description:
        'The number of independent verification operations required to support your use case and distribution model.',
    },
    {
      title: 'Trust state lifetime',
      description:
        'How long trust states must remain anchored, verifiable, and independently checkable across organizational changes.',
    },
    {
      title: 'Anchoring policy',
      description:
        'Whether you anchor trust states yourself or rely on shared infrastructure, and which durability guarantees apply.',
    },
    {
      title: 'Offline verification requirements',
      description:
        'The extent to which verification must proceed without network access, active issuer participation, or platform dependencies.',
    },
    {
      title: 'Public vs institutional usage',
      description:
        'Whether trust states serve public consumption or internal accountability, and what audit requirements exist.',
    },
    {
      title: 'Retention and audit expectations',
      description:
        'Compliance frameworks, regulatory requirements, and long-term archival constraints that affect storage and retrieval.',
    },
  ];

  const faqs = [
    {
      question: 'Is there a free tier?',
      answer:
        'There is no traditional free tier. Alpha access includes verification quotas suitable for testing and integration work. Production deployments require a service agreement that reflects operational scope.',
    },
    {
      question: 'Can I self-serve without talking to HumanTick?',
      answer:
        'Not during alpha. Pricing depends on verification requirements, institutional context, and long-term retention expectations. A brief technical conversation ensures the service fits your constraints.',
    },
    {
      question: 'Is this a SaaS subscription?',
      answer:
        'Not in the conventional sense. HumanTick provides trust infrastructure, not platform features. Pricing reflects operational cost: anchoring, storage, verification throughput, and durability guarantees.',
    },
    {
      question: 'How is pricing determined?',
      answer:
        'Pricing is determined by verification scope, anchoring policy, and institutional requirements. We evaluate your use case, discuss durability constraints, and propose a cost structure aligned with actual infrastructure demands.',
    },
    {
      question: 'What happens if I stop using the service?',
      answer:
        'Trust states you created remain anchored and verifiable. Verification does not require an active service relationship. Anchored commitments persist independently of billing status.',
    },
    {
      question: 'Does verification stop if access ends?',
      answer:
        'No. Verification reads anchored trust states and checks cryptographic integrity. Once anchored, trust states remain independently verifiable. Service access affects registration and new anchoring, not existing verification.',
    },
    {
      question: 'Is pricing public or negotiable?',
      answer:
        'Pricing is contextual, not published. Institutional requirements vary too widely for standardized pricing. We discuss your constraints, propose a cost model, and document terms clearly before commitment.',
    },
    {
      question: 'Can I bring my own anchoring infrastructure?',
      answer:
        'Yes. Organizations can self-anchor trust states and use HumanTick for verification services, storage, and protocol compliance. This typically reduces cost but requires technical capability to maintain anchoring infrastructure.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-8 leading-tight">
            Pricing reflects the cost of making responsibility durable.
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-12">
            HumanTick pricing is based on verification scope, anchoring model, and institutional context — not
            seats, features, or usage tiers.
          </p>
	          <div className="flex items-center justify-center gap-4 flex-wrap">
	            <a
	              href="/access/request"
	              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
	            >
	              Request Access
	            </a>
	            <a
	              href="/contact"
	              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
	            >
	              Contact
	            </a>
	          </div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            How pricing works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {principles.map((principle, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{principle.title}</h3>
                <p className="text-base text-slate-700 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Affects Cost */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            What affects cost
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factors.map((factor, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{factor.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Primary Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                  aria-expanded={openFaq === index}
                >
                  <span className="text-lg font-semibold text-slate-900 pr-8">{faq.question}</span>
                  <span className="text-slate-500 text-2xl flex-shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-base text-slate-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise & Institutional Access */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-semibold text-slate-900 mb-8 text-center">
            Enterprise & institutional access
          </h2>
          <div className="space-y-6 text-base text-slate-700 leading-relaxed mb-12">
            <p>
              Pricing is contextual because institutional requirements vary. A news organization anchoring
              editorial decisions faces different durability constraints than a research institution preserving
              dataset lineage or a creative studio protecting authorship claims.
            </p>
            <p>
              Universities, archives, and public institutions often require decades-long verification guarantees,
              specific compliance frameworks, and audit-ready infrastructure. Commercial deployments may prioritize
              throughput, real-time verification, or integration with existing provenance systems.
            </p>
            <p>
              HumanTick avoids one-size-fits-all pricing because trust infrastructure demands vary by use case,
              regulatory environment, and operational scale. A brief conversation ensures the service aligns with
              your actual constraints rather than forcing your requirements into predefined tiers.
            </p>
          </div>
	          <div className="flex items-center justify-center gap-4 flex-wrap">
	            <a
	              href="/access/request"
	              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
	            >
	              Request Access
	            </a>
	            <a
	              href="/reference/trust-model"
	              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
	            >
	              Read the Trust Model
	            </a>
	          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
