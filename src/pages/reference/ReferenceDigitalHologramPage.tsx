import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { ReferenceOnThisPageNav } from '../../components/reference/ReferenceOnThisPageNav';
import { useScrollSpy } from '../../components/reference/useScrollSpy';

export function ReferenceDigitalHologramPage() {
  const sections = [
    { id: 'why-the-term-exists', title: 'Why the Term Exists' },
    { id: 'what-a-digital-hologram-is', title: 'What a Digital Hologram Is' },
    { id: 'what-a-digital-hologram-is-not', title: 'What a Digital Hologram Is Not' },
    {
      id: 'relationship-to-trust-states-and-anchors',
      title: 'Relationship to Trust States and Anchors',
    },
    { id: 'ai-footprint-as-a-hologram-signal', title: 'AI Footprint as a Hologram Signal' },
    { id: 'offline-and-independent-readability', title: 'Offline and Independent Readability' },
    { id: 'common-questions', title: 'Common Questions' },
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
            Digital Hologram
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            A portable, machine-readable representation of trust — making responsibility observable without redefining verification.
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
                    Existing terms like badge, watermark, label, or proof carry assumptions that do not fit what HumanTick creates. A badge implies endorsement. A watermark suggests content modification. A label is passive. A proof claims validity.
                  </p>
                  <p>
                    Modern content already carries provenance metadata—C2PA manifests, EXIF data, file headers. These systems describe what happened to content. They do not provide a readable structure for who stands behind it.
                  </p>
                  <p>
                    HumanTick needed a term for the portable surface of anchored responsibility: something that can travel with content, remain machine-readable, and stay interpretable without being owned by a single platform. “Digital hologram” names that representation.
                  </p>
                </div>
              </section>

              <section id="what-a-digital-hologram-is">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">What a Digital Hologram Is</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    A digital hologram is a portable, machine-readable representation of declared responsibility. It groups the references a verifier needs to locate trust states and their anchors, and to interpret declared production context.
                  </p>
                  <p>
                    The hologram does not store the content itself. It stores references and structured claims about who stands behind the content, and the commitments that make those claims tamper-evident over time.
                  </p>
                  <p>
                    In practice, it is a readable surface for verification without being the verification result.
                  </p>
                </div>
              </section>

              <section id="what-a-digital-hologram-is-not">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">What a Digital Hologram Is Not</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    A digital hologram is not proof, endorsement, or a verification outcome. It is the data that verification reads, not the decision verification produces.
                  </p>
                  <p>
                    It is not a watermark embedded into the content itself. It is designed to travel with content or alongside it as a separate artifact.
                  </p>
                  <p>
                    It is not a platform feature. It is meant to be readable and verifiable across tools, archives, and distribution channels.
                  </p>
                </div>
              </section>

              <section id="relationship-to-trust-states-and-anchors">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                  Relationship to Trust States and Anchors
                </h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    Trust states are the registered records that declare responsibility. Anchors are the durable commitments that make those records tamper-evident and independently checkable.
                  </p>
                  <p>
                    A digital hologram is the portable surface that references both: it points to trust states, points to their anchors, and packages the information a verifier needs to read and verify them without asking the issuer for permission.
                  </p>
                </div>
              </section>

              <section id="ai-footprint-as-a-hologram-signal">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">AI Footprint as a Hologram Signal</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    A digital hologram can carry production context as declared by an authority, including an AI footprint. The footprint describes the role of AI systems in creation as a registered claim, not a classifier’s guess.
                  </p>
                  <p>
                    When displayed in tools, that same declared context becomes a footprint signal: a human-readable rendering of what was registered and what can be verified.
                  </p>
                </div>
              </section>

              <section id="offline-and-independent-readability">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                  Offline and Independent Readability
                </h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    Digital holograms are designed to be portable. A verifier should be able to read one without custom platform access, and to verify it without contacting the issuer’s infrastructure.
                  </p>
                  <p>
                    Offline verification is possible because the hologram references anchored trust states. As long as anchors and referenced data can be resolved through mirrored storage or caches, verification can proceed without a live connection to the issuer.
                  </p>
                </div>
              </section>

              <section id="common-questions" className="border-t border-gray-200 pt-12">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-8">Common Questions</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Is a digital hologram proof?</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      No. It is a representation of declared responsibility. Verification checks whether its references and commitments are intact.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Can a hologram exist without an anchor?</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      Yes, but it loses tamper-evidence and independent verifiability. An anchored hologram can be checked across tools and over time.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Is this similar to C2PA manifests?</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      They are complementary. C2PA focuses on provenance; HumanTick focuses on responsibility. A hologram can reference C2PA data as production context.
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
              href="/reference/trust-model"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Read the Trust Model
            </a>
            <a
              href="/reference/glossary"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              View the Glossary
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
