import { Footer } from '../../components/Footer';
import { useState } from 'react';

export function CompanyGovernancePage() {
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false);

  const phaseCards = [
    {
      title: 'Proposal',
      description:
        'Changes begin as written proposals with clear motivation, scope, and backward-compatibility analysis. Proposals are reviewed for clarity before entering technical review.',
    },
    {
      title: 'Review',
      description:
        'Technical review evaluates security, interoperability, implementation complexity, and testing requirements. Reviewers represent implementers, security researchers, and domain experts.',
    },
    {
      title: 'Acceptance',
      description:
        'Accepted proposals become part of the specification. Acceptance requires consensus among maintainers and no unresolved blocking concerns from reviewers.',
    },
    {
      title: 'Release',
      description:
        'Changes are released as versioned updates to the specification. Release notes document changes, migration paths, and deprecation timelines.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Company</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Governance
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            How changes are proposed, reviewed, and adopted.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-16">
              {/* Decision Model */}
              <div>
                <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">Decision Model</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    Maintainers are responsible for the specification's coherence, security, and long-term stability.
                    They approve changes, coordinate releases, and ensure backward compatibility is preserved.
                  </p>
                  <p>
                    Reviewers include implementers, security researchers, and domain experts. They evaluate proposals
                    for technical soundness, interoperability constraints, and implementation feasibility.
                  </p>
                  <p>
                    Implementers build tools, libraries, and integrations. Their feedback shapes specification
                    practicality and identifies ambiguities that require clarification.
                  </p>
                  <p>
                    Community members contribute proposals, identify issues, and participate in public review. All
                    discussions are documented and accessible.
                  </p>
                </div>
              </div>

              {/* Change Lifecycle */}
              <div>
                <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">Change Lifecycle</h2>
                <div className="space-y-6">
                  {phaseCards.map((phase, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 bg-slate-50">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{phase.title}</h3>
                      <p className="text-base text-slate-700 leading-relaxed">{phase.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Principles */}
              <div>
                <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">Review Principles</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    Security is prioritized above convenience. Changes that weaken cryptographic guarantees,
                    introduce new trust assumptions, or expand attack surfaces require exceptional justification
                    and extended review periods.
                  </p>
                  <p>
                    Interoperability is maintained through compatibility with existing provenance formats and
                    identity systems. Changes that create walled gardens or require proprietary infrastructure
                    are rejected.
                  </p>
                  <p>
                    Backward compatibility is preserved across minor versions. Breaking changes are rare,
                    clearly documented, and include migration paths. Deprecation timelines span multiple release
                    cycles.
                  </p>
                  <p>
                    Clarity is required in all specification text. Ambiguous language, implementation-dependent
                    behavior, and undefined edge cases must be resolved before acceptance.
                  </p>
                  <p>
                    Testability is mandatory. All normative requirements must be verifiable through automated
                    tests. Test vectors and reference implementations accompany specification changes.
                  </p>
                </div>
              </div>

              {/* Disputes & Escalation */}
              <div>
                <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                  Disputes & Escalation
                </h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    When reviewers disagree on a proposal's merit, discussion continues until consensus emerges
                    or concerns are resolved through revision. Maintainers facilitate discussion but do not
                    override technical objections without clear justification.
                  </p>
                  <p>
                    If consensus cannot be reached, the proposal is deferred. Deferred proposals may be revised
                    and resubmitted with additional analysis or alternative approaches that address concerns.
                  </p>
                  <p>
                    In rare cases where core principles conflict, maintainers make final decisions based on
                    specification stability, security impact, and alignment with long-term goals. All decisions
                    are documented with rationale.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Reference Panel */}
            <div className="lg:col-span-4">
              {/* Mobile Toggle */}
              <div className="lg:hidden border border-gray-200 rounded-lg mb-8">
                <button
                  type="button"
                  onClick={() => setMobilePanelOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                  aria-expanded={mobilePanelOpen}
                >
                  <span className="text-sm font-medium text-slate-900 uppercase tracking-wider">
                    Quick Reference
                  </span>
                  <span className="text-slate-500 text-sm">{mobilePanelOpen ? '−' : '+'}</span>
                </button>
                {mobilePanelOpen && (
                  <div className="px-4 pb-4 space-y-6">
                    <QuickReferenceContent />
                  </div>
                )}
              </div>

              {/* Desktop Sticky Panel */}
              <div className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                    Quick Reference
                  </h3>
                  <QuickReferenceContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/company/roadmap"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              See the Roadmap
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

function QuickReferenceContent() {
  return (
    <>
      <div className="border-l-2 border-slate-300 pl-4">
        <h4 className="text-sm font-semibold text-slate-900 mb-2">Stability Guarantees</h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          Trust states created under v1.x remain verifiable under v1.y. Breaking changes require major version
          increments.
        </p>
      </div>

      <div className="border-l-2 border-slate-300 pl-4">
        <h4 className="text-sm font-semibold text-slate-900 mb-2">Versioning Discipline</h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          Semantic versioning applies. Minor versions add features. Patch versions fix clarifications. Major
          versions may break compatibility.
        </p>
      </div>

      <div className="border-l-2 border-slate-300 pl-4">
        <h4 className="text-sm font-semibold text-slate-900 mb-2">Where Decisions Are Recorded</h4>
        <div className="space-y-2 text-sm text-slate-700">
          <a
            href="https://github.com/humantick/spec"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-slate-900 hover:underline"
          >
            Specification Repository →
          </a>
          <a
            href="https://github.com/humantick/proposals"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-slate-900 hover:underline"
          >
            Proposal Archive →
          </a>
          <a
            href="https://github.com/humantick/governance"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-slate-900 hover:underline"
          >
            Governance Docs →
          </a>
        </div>
      </div>
    </>
  );
}
