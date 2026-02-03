import { Footer } from '../../components/Footer';

export function CompanyResearchPage() {
  const themes = [
    {
      title: 'Interoperability Boundaries',
      description:
        'Understanding where HumanTick interfaces with C2PA, EXIF, and other provenance systems without creating conflicts.',
    },
    {
      title: 'Offline Verification UX',
      description:
        'Designing verification experiences that work without network access while remaining understandable to non-technical users.',
    },
    {
      title: 'Adversarial Models',
      description:
        'Analyzing attack vectors, threat models, and mitigation strategies for trust state forgery and anchor manipulation.',
    },
    {
      title: 'AI Footprint Semantics',
      description:
        'Refining how AI system involvement is described without anthropomorphizing tools or misattributing responsibility.',
    },
    {
      title: 'Anchoring Choices',
      description:
        'Evaluating trade-offs between blockchain options, storage costs, verification speed, and long-term durability.',
    },
    {
      title: 'Long-Lived Identity',
      description:
        'Exploring identity systems that remain verifiable across organizational changes, key rotations, and decades of archival storage.',
    },
  ];

  const notes = [
    {
      title: 'Trust State Minimalism',
      description:
        'Why keeping trust states small improves portability and reduces attack surface.',
      link: '/company/research/note-trust-state-minimalism',
    },
    {
      title: 'Verification Without Oracles',
      description:
        'How deterministic verification eliminates dependency on third-party services.',
      link: '/company/research/note-verification-without-oracles',
    },
    {
      title: 'Anchor Selection Criteria',
      description:
        'Comparing blockchain properties relevant to trust anchoring: finality, cost, durability.',
      link: '/company/research/note-anchor-selection',
    },
    {
      title: 'Digest Hierarchy Design',
      description:
        'Why asset digests anchor content while content digests enable partial verification.',
      link: '/company/research/note-digest-hierarchy',
    },
    {
      title: 'Authority vs. Attribution',
      description:
        'Clarifying the difference between who stands behind content and who created it.',
      link: '/company/research/note-authority-vs-attribution',
    },
    {
      title: 'Cryptographic Primitives Choices',
      description:
        'Why Ed25519 and RS256 provide the right balance of security, compatibility, and longevity.',
      link: '/company/research/note-crypto-primitives',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Company</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Research
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Research directions, notes, and collaborations.
          </p>
        </div>
      </section>

      {/* Current Themes */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-12">Current Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{theme.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Notes */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-12">Research Notes</h2>
          <div className="space-y-4">
            {notes.map((note, index) => (
              <a
                key={index}
                href={note.link}
                className="block border border-gray-200 rounded-lg p-6 bg-white hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{note.title}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{note.description}</p>
                  </div>
                  <span className="text-slate-400 text-xl">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">Collaboration</h2>
          <div className="space-y-4 text-base text-slate-700 leading-relaxed">
            <p>
              Research contributions are welcome. Ideas should be submitted as written proposals with clear
              motivation, scope, and analysis of implications for existing implementations.
            </p>
            <p>
              Review prioritizes security, interoperability, and long-term durability. Proposals that introduce
              new trust assumptions, break backward compatibility, or conflict with existing standards require
              exceptional justification.
            </p>
            <p>
              In-scope research includes cryptographic primitives, anchoring mechanisms, verification algorithms,
              identity systems, and interoperability profiles. Out-of-scope research includes content moderation,
              reputation systems, and platform-specific features.
            </p>
            <p>
              Collaboration follows the governance model. Contributors participate in public review, maintainers
              coordinate integration, and all decisions are documented.
            </p>
          </div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">Responsible Disclosure</h2>
          <div className="space-y-4 text-base text-slate-700 leading-relaxed">
            <p>
              Security research is encouraged. If you discover vulnerabilities in the specification,
              reference implementations, or cryptographic primitives, please report them privately.
            </p>
            <p>
              Send security reports to{' '}
              <a href="mailto:security@humantick.org" className="text-slate-900 underline hover:text-black">
                security@humantick.org
              </a>
              . Include detailed reproduction steps, affected versions, and impact analysis.
            </p>
            <p>
              We will acknowledge reports within 48 hours, provide status updates during investigation, and
              coordinate public disclosure timing. Security fixes are prioritized and released as patches with
              advisory documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/company/press"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              View Press
            </a>
            <a
              href="/contact"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
