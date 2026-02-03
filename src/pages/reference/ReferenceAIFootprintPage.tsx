import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { ReferenceOnThisPageNav } from '../../components/reference/ReferenceOnThisPageNav';
import { useScrollSpy } from '../../components/reference/useScrollSpy';

export function ReferenceAIFootprintPage() {
  const sections = [
    { id: 'why-the-term-exists', title: 'Why the Term Exists' },
    { id: 'what-an-ai-footprint-is', title: 'What an AI Footprint Is' },
    { id: 'what-an-ai-footprint-is-not', title: 'What an AI Footprint Is Not' },
    {
      id: 'relationship-to-authority-and-responsibility',
      title: 'Relationship to Authority and Responsibility',
    },
    { id: 'relationship-to-the-digital-hologram', title: 'Relationship to the Digital Hologram' },
    { id: 'offline-and-independent-readability', title: 'Offline and Independent Readability' },
    { id: 'common-misinterpretations', title: 'Common Misinterpretations' },
  ];

  const [activeSectionId, setActiveSectionId] = useScrollSpy(sections.map((section) => section.id));
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Reference</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            AI Footprint
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            A descriptive signal indicating system involvement — without assigning authority, intent, or responsibility.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Mobile TOC */}
              <div className="lg:hidden border border-gray-200 rounded-lg">
                <button
                  type="button"
                  onClick={() => setMobileTocOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                  aria-expanded={mobileTocOpen}
                >
                  <span className="text-sm font-medium text-slate-900 uppercase tracking-wider">On this page</span>
                  <span className="text-slate-500 text-sm">{mobileTocOpen ? '−' : '+'}</span>
                </button>
                {mobileTocOpen && (
                  <div className="px-4 pb-4">
                    <ReferenceOnThisPageNav
                      sections={sections}
                      activeSectionId={activeSectionId}
                      onActiveChange={setActiveSectionId}
                      onNavigate={() => setMobileTocOpen(false)}
                    />
                  </div>
                )}
              </div>

              <section id="why-the-term-exists">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Why the Term Exists</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    Modern content often involves AI systems in creation, transformation, or assistance. Existing systems
                    either over-attribute responsibility by labeling content as "AI-generated" or under-describe
                    involvement by omitting system participation entirely.
                  </p>
                  <p>
                    HumanTick needed a neutral, descriptive concept to record system participation without implying
                    authorship, intent, or responsibility. The term "AI footprint" was introduced to capture this gap: a
                    factual signal of involvement that makes no claims about who is accountable.
                  </p>
                  <p>AI involvement is a fact to record, not a judgment to infer.</p>
                </div>
              </section>

              <section id="what-an-ai-footprint-is">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">What an AI Footprint Is</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    An AI footprint is a descriptive signal that records when one or more automated systems participated
                    in content production. It may include system identifiers, roles, or stages at a conceptual level,
                    depending on how the authority chooses to declare production context.
                  </p>
                  <p>
                    The footprint is attached to a trust state. It travels with the content as part of the trust surface,
                    providing context about system involvement without implying that the system is the source of
                    authority.
                  </p>
                  <p className="font-medium text-slate-900">An AI footprint describes involvement, not authorship.</p>
                </div>
              </section>

              <section id="what-an-ai-footprint-is-not">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">What an AI Footprint Is Not</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    An AI footprint is not a claim of authorship. It does not assign creative or intellectual ownership to
                    an automated system.
                  </p>
                  <p>
                    It is not a declaration of responsibility. Responsibility is always declared by a human or
                    institutional authority, never by a system.
                  </p>
                  <p>
                    It is not a quality or safety signal. The presence or absence of an AI footprint says nothing about the
                    accuracy, reliability, or appropriateness of content.
                  </p>
                  <p>
                    It is not a truth or intent indicator. Systems do not express intent, make decisions, or hold beliefs.
                    The footprint records participation, not purpose.
                  </p>
                  <p>
                    It is not a verification outcome. Verification evaluates anchors, signatures, and trust states. The AI
                    footprint is one piece of context within that evaluation, not a result of it.
                  </p>
                  <p className="font-medium text-slate-900">AI systems never become authorities in HumanTick.</p>
                </div>
              </section>

              <section id="relationship-to-authority-and-responsibility">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                  Relationship to Authority and Responsibility
                </h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    Responsibility is always declared by a human or institutional authority. AI systems may assist,
                    transform, or generate content, but the authority remains accountable for the outcome.
                  </p>
                  <p>
                    An AI footprint may coexist with signatures and anchors. It does not weaken or replace authority
                    binding. Instead, it provides additional context about the production process.
                  </p>
                  <p>
                    Authority declares responsibility; AI footprints provide context.
                  </p>
                </div>
              </section>

              <section id="relationship-to-the-digital-hologram">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                  Relationship to the Digital Hologram
                </h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    The digital hologram renders multiple trust-related signals. An AI footprint is one possible signal
                    that may be rendered in the hologram, alongside anchoring status, authority declarations, and other
                    production context.
                  </p>
                  <p>
                    Removing the hologram does not remove the footprint. The footprint exists at the trust state level,
                    independent of how it is rendered or displayed to verifiers.
                  </p>
                </div>
              </section>

              <section id="offline-and-independent-readability">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                  Offline and Independent Readability
                </h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    An AI footprint must remain readable without network access. Verifiers should not need to call AI
                    services to interpret it. Offline readability preserves long-term interpretability, ensuring that
                    production context remains accessible even when systems change or become unavailable.
                  </p>
                  <p>
                    The footprint is a declared record, not an inference. It does not rely on detection, classification, or
                    probabilistic analysis.
                  </p>
                </div>
              </section>

              <section id="common-misinterpretations" className="border-t border-gray-200 pt-12">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-8">Common Misinterpretations</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Does an AI footprint mean the content was generated by AI?
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      Not necessarily. The footprint indicates that an AI system participated in some part of the
                      production process. That participation may range from minor assistance to full generation, depending
                      on what the authority declares. The footprint itself does not specify the degree or nature of
                      involvement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Can an AI system be the authority?</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      No. Authority is always held by a human or institutional entity capable of accountability. AI
                      systems do not sign trust states, declare responsibility, or act as authorities in HumanTick.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Is AI footprint a verification result?</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      No. Verification evaluates cryptographic signatures, anchored commitments, and trust state
                      integrity. The AI footprint is part of the production context that verification reads, not the
                      outcome it produces.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar - On this page */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <h3 className="text-sm font-medium text-slate-900 mb-4 uppercase tracking-wider">On this page</h3>
                <ReferenceOnThisPageNav
                  sections={sections}
                  activeSectionId={activeSectionId}
                  onActiveChange={setActiveSectionId}
                />
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
              href="/reference/digital-hologram"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Read Digital Hologram
            </a>
            <a
              href="/reference/glossary"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              View Glossary
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
