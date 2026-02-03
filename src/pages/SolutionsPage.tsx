import { Footer } from '../components/Footer';

export function SolutionsPage() {
  const solutions = [
    {
      title: 'Publishing & Media',
      description: 'Attribution, provenance, and authority for distributed publishing.',
      explanation: 'Newsrooms and publishers can register responsibility for content that moves across platforms, archives, and jurisdictions without losing verifiable accountability.',
      path: '/solutions/publishing-media'
    },
    {
      title: 'Creative Industries',
      description: 'Protecting authorship while keeping work portable and usable.',
      explanation: 'Studios, artists, and agencies can declare responsibility for creative work in ways that survive distribution, remix, and format changes.',
      path: '/solutions/creative'
    },
    {
      title: 'Research & Data',
      description: 'Trustable datasets, citations, and institutional accountability.',
      explanation: 'Researchers and institutions can anchor responsibility for datasets, findings, and models so that accountability remains verifiable over time.',
      path: '/solutions/research-data'
    },
    {
      title: 'Public Institutions',
      description: 'Public records that remain verifiable beyond any single site.',
      explanation: 'Governments and agencies can issue records with tamper-evident trust states that remain checkable even when systems change or migrate.',
      path: '/solutions/public-institutions'
    },
    {
      title: 'AI Systems & Agents',
      description: 'Machine-readable responsibility for agentic and generative systems.',
      explanation: 'AI operators can register responsibility for outputs in ways that enable automated verification, audit trails, and policy enforcement at scale.',
      path: '/solutions/ai-systems-agents'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Solutions
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
            Where verification-grade provenance meets real operational constraints.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {solutions.map((solution) => (
              <a
                key={solution.path}
                href={solution.path}
                className="group border border-slate-200 rounded-lg p-8 bg-white hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-base text-slate-600 mb-4">
                  {solution.description}
                </p>
                <p className="text-base text-slate-700 leading-relaxed">
                  {solution.explanation}
                </p>
                <div className="mt-6 text-slate-400 group-hover:text-slate-600 transition-colors">
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Divider Text */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl sm:text-2xl text-slate-900 font-medium">
            Different domains. Same trust problem.
          </p>
        </div>
      </section>

      {/* Closing Line */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-center">
            Each solution applies the same HumanTick trust model — adapted to different operational realities.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
