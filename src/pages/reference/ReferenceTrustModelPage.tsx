import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { ReferenceOnThisPageNav } from '../../components/reference/ReferenceOnThisPageNav';
import { useScrollSpy } from '../../components/reference/useScrollSpy';

export function ReferenceTrustModelPage() {
  const sections = [
    { id: 'what-trust-means', title: 'What trust means in HumanTick' },
    { id: 'authority-as-root', title: 'Authority as the root' },
    { id: 'trust-states', title: 'Trust states' },
    { id: 'anchoring-durability', title: 'Anchoring and durability' },
    { id: 'verification-without-permission', title: 'Verification without permission' },
    { id: 'relationship-digital-hologram', title: 'Relationship to the digital hologram' },
    { id: 'relationship-ai-footprint', title: 'Relationship to AI footprint' },
    { id: 'what-model-is-not', title: 'What the trust model is not' },
    { id: 'why-scales', title: 'Why this model scales' },
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
            Trust Model
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            How HumanTick structures authority, trust states, anchoring, and verification — without relying on live issuers or platforms.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
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

            {/* Section 1: What Trust Means */}
            <section id="what-trust-means">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                What trust means in HumanTick
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Trust is not belief, reputation, or social consensus. In HumanTick, trust is a verifiable relationship between authority and content. It exists as a recorded state, not as an opinion or aggregate score.
                </p>
                <p>
                  Trust is not binary. A trust state does not declare content true or false. It does not assert correctness, safety, or quality. Trust answers "who stands behind this?", not "is this true?"
                </p>
                <p>
                  This distinction is foundational. HumanTick provides infrastructure for accountability, not judgment. Verification checks whether responsibility has been declared and anchored. It does not evaluate whether that responsibility is deserved or the content is correct.
                </p>
              </div>
            </section>

            {/* Section 2: Authority as the Root */}
            <section id="authority-as-root">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Authority as the root
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Authority is an explicit role in the trust model. Authority may be human or institutional—a person, newsroom, studio, research institution, or government agency. Authority always precedes trust. Without authority, no trust state can exist.
                </p>
                <p>
                  Systems and AI models are never authorities. They may produce content, process data, or execute workflows, but they cannot declare responsibility. Authority is accountable by definition. Machines are not.
                </p>
                <p>
                  When AI is involved in content creation, a human or institutional authority declares responsibility for releasing it. The authority may delegate tooling or workflow to systems, but accountability remains with the authority.
                </p>
                <p className="text-lg font-medium text-slate-900 mt-6">
                  Trust begins with responsibility, not verification.
                </p>
              </div>
            </section>

            {/* Section 3: Trust States */}
            <section id="trust-states">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Trust states
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  A trust state is a registered declaration of responsibility. It is not a signature alone, but a recognized state accepted, validated, and recorded by the HumanTick system. Trust states bind authority to content through verifiable identity and policy constraints.
                </p>
                <p>
                  Trust states are independent of transport format. A trust state may travel as part of a C2PA manifest, an embedded metadata structure, or a separate reference file. The trust state itself is conceptually distinct from how it is carried.
                </p>
                <p>
                  Trust states can exist without immediate anchoring. Registration establishes the state. Anchoring makes it durable and independently verifiable. Multiple trust states may exist for the same content—different authorities may declare responsibility for different aspects or contexts.
                </p>
              </div>
            </section>

            {/* Section 4: Anchoring and Durability */}
            <section id="anchoring-durability">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Anchoring and durability
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Anchoring gives trust states durability and independence. An anchor creates a tamper-evident commitment that can be verified without ongoing access to the issuing authority. Anchors make trust states time-bound and referenceable across platforms and organizational changes.
                </p>
                <p>
                  Anchoring is not consensus about truth. It does not validate content correctness. Anchoring does not replace issuer signatures—it complements them by making those signatures checkable over time without requiring the issuer's infrastructure to remain accessible.
                </p>
                <p>
                  Anchoring enables offline and long-term verification. A news article anchored today can be verified decades later, even if the original publisher's systems have changed, migrated, or disappeared. Anchors preserve accountability across time.
                </p>
                <p className="text-lg font-medium text-slate-900 mt-6">
                  Anchors stabilize trust — they do not validate content.
                </p>
              </div>
            </section>

            {/* Section 5: Verification Without Permission */}
            <section id="verification-without-permission">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Verification without permission
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Verification reads trust states and anchors. It checks whether a declared responsibility exists, is properly signed, and is anchored. Verification never requires contacting the issuer. It never requires platform access, API keys, or network connectivity to the original authority.
                </p>
                <p>
                  Verification answers "is this trust state intact and anchored?" It does not answer "should I trust this authority?" That judgment remains with the verifier—whether human, institution, or automated system applying policy rules.
                </p>
                <p>
                  The trust model explicitly separates technical verification from human judgment. Technical verification is deterministic and portable. Human judgment is contextual and local. This separation enables the same trust infrastructure to serve different communities with different standards.
                </p>
              </div>
            </section>

            {/* Section 6: Relationship to Digital Hologram */}
            <section id="relationship-digital-hologram">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Relationship to the digital hologram
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  The digital hologram is a surface representation of this trust model. It reflects trust states and anchors, making them observable and portable. The hologram carries references that enable verification without requiring the verifier to understand the underlying protocol mechanics.
                </p>
                <p>
                  Removing the hologram does not remove trust. The trust state and anchor exist independently. A hologram may be stripped from content, corrupted, or lost—but as long as trust state references remain resolvable, verification can proceed. Trust exists independently of presentation.
                </p>
                <p className="text-lg font-medium text-slate-900 mt-6">
                  The trust model defines reality; the hologram reflects it.
                </p>
              </div>
            </section>

            {/* Section 7: Relationship to AI Footprint */}
            <section id="relationship-ai-footprint">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Relationship to AI footprint
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  AI footprint is a descriptive signal within the trust model. It indicates system involvement in content production—whether content was AI-generated, AI-assisted, or created through other means. Footprints describe production context, not authorship.
                </p>
                <p>
                  Responsibility always resolves to an authority. An AI model may generate an image, but a person or institution declares responsibility for releasing it. The footprint makes production context explicit without transferring accountability to machines.
                </p>
                <p>
                  AI systems never become trust roots. They remain tools, even when they produce entire outputs. Footprints do not evaluate quality, intent, or truthfulness. They record declared context, not inferred characteristics.
                </p>
              </div>
            </section>

            {/* Section 8: What the Trust Model Is Not */}
            <section id="what-model-is-not">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                What the trust model is not
              </h2>
              <div className="space-y-6 text-base text-slate-700 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Not a content moderation system</h3>
                  <p>
                    The trust model does not determine what content is allowed, prohibited, or flagged. It records who stands behind content. Moderation policies are applied by platforms, institutions, or communities using trust states as one input among many.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Not a reputation framework</h3>
                  <p>
                    The trust model does not aggregate authority reputation, compute trust scores, or maintain historical performance metrics. It records individual declarations of responsibility. Reputation systems may consume trust states, but the model itself remains neutral.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Not a scoring or ranking model</h3>
                  <p>
                    Trust states do not carry quality scores, credibility ratings, or comparative rankings. They declare responsibility. Any scoring or ranking applied to authorities or content happens outside the trust model, using trust states as verifiable inputs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Not a replacement for legal responsibility</h3>
                  <p>
                    The trust model provides technical infrastructure for accountability. It does not replace legal frameworks, contracts, or regulatory requirements. Trust states may serve as evidence in legal contexts, but they do not constitute legal agreements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Not a platform trust badge system</h3>
                  <p>
                    The trust model does not issue badges, seals of approval, or verification marks. Platforms may choose to render trust states as visual indicators, but those representations are implementation choices, not protocol requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Why This Model Scales */}
            <section id="why-scales">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Why this model scales
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Independence from live issuers enables verification across organizational lifetimes. A publisher may cease operations, change ownership, or migrate infrastructure. Anchored trust states remain verifiable without requiring the original publisher's systems to be online.
                </p>
                <p>
                  Portability across platforms allows content to move freely while preserving accountability. A video shared across social platforms, archived by institutions, and cited in research carries the same verifiable trust state. No platform becomes the single source of truth.
                </p>
                <p>
                  Long-term verifiability supports archival and historical analysis. Research datasets, news archives, and institutional records remain verifiable decades after creation. Trust does not degrade when content outlives the systems that published it.
                </p>
                <p>
                  Compatibility with existing provenance systems allows HumanTick to complement rather than replace established standards. Trust states can reference C2PA manifests, EXIF metadata, or other provenance structures, adding accountability without disrupting existing workflows.
                </p>
              </div>
            </section>
          </div>

          {/* Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
                On this page
              </h3>
              <ReferenceOnThisPageNav
                sections={sections}
                activeSectionId={activeSectionId}
                onActiveChange={setActiveSectionId}
              />
            </div>
          </aside>
        </div>
      </div>

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
              href="/reference/digital-hologram"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
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
