import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { ReferenceOnThisPageNav } from '../../components/reference/ReferenceOnThisPageNav';
import { useScrollSpy } from '../../components/reference/useScrollSpy';


export function ReferenceSpecificationPage() {
  const sections = [
    { id: 'what-it-defines', title: 'What the specification defines' },
    { id: 'where-to-find-it', title: 'Where to find the authoritative spec' },
    { id: 'for-implementers', title: 'For implementers' },
    { id: 'common-questions', title: 'Common questions' },
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
            Specification
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mb-6">
            The canonical protocol and data model documentation. This page explains what the specification defines and where to find the authoritative normative version.
          </p>
          <a
            href="https://spec.humantick.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base text-slate-900 border-b-2 border-slate-300 hover:border-slate-900 transition-colors"
          >
            View full specification
            <span className="text-xs">↗</span>
          </a>
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

              <div id="what-it-defines">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">What the specification defines</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    The HumanTick specification defines the data model, verification flow, and anchoring requirements for creating and checking trust states.
                  </p>
                  <p>
                    It includes normative requirements for trust state structure, digest profiles, signature formats, and verification rules.
                  </p>
                </div>
              </div>

              <div id="where-to-find-it">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Where to find the authoritative spec</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    The normative specification lives at <strong className="font-semibold text-slate-900">spec.humantick.org</strong>.
                  </p>
                  <p>
                    This site (humantick.io) provides context, use cases, and conceptual explanations. The spec provides the implementable technical requirements.
                  </p>
                </div>
              </div>

              <div id="for-implementers">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">For implementers</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    Implementers building trust state creation, anchoring, or verification tools should treat the spec as the source of truth.
                  </p>
                  <p>
                    Reference implementations exist in the htick-tool repository. These implementations demonstrate spec compliance but are not themselves normative.
                  </p>
                </div>
              </div>

              {/* Common questions */}
              <div id="common-questions" className="border-t border-gray-200 pt-12">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-8">Common questions</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Is this the full spec?</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      No. This page describes what the spec contains. The full normative specification is at spec.humantick.org.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I implement from this site alone?</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      No. Implementers need the normative spec. This site provides context and conceptual framing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">How is the spec versioned?</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      Spec versions are semantic and include a date identifier. The current stable version is documented at spec.humantick.org.
                    </p>
                  </div>
                </div>
              </div>
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
      <section className="bg-slate-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-base text-slate-700">Ready to implement?</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://spec.humantick.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2.5 rounded hover:bg-gray-900 transition-colors text-sm font-medium"
            >
              Read the Spec
            </a>
            <a
              href="/access/request"
              className="bg-transparent text-slate-900 px-6 py-2.5 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm font-medium"
            >
              Request Access
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
