import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { ReferenceOnThisPageNav } from '../../components/reference/ReferenceOnThisPageNav';
import { useScrollSpy } from '../../components/reference/useScrollSpy';

export function ReferenceInteropGuidelinesPage() {
  const sections = [
    { id: 'why-matters', title: 'Why interoperability matters' },
    { id: 'relationship-provenance', title: 'Relationship to existing provenance standards' },
    { id: 'verification-without-coupling', title: 'Verification without platform coupling' },
    { id: 'anchor-independence', title: 'Anchor independence and portability' },
    { id: 'policy-diversity', title: 'Policy and verifier diversity' },
    { id: 'what-not-mean', title: 'What interoperability does not mean' },
    { id: 'ecosystem-summary', title: 'Ecosystem positioning summary' },
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
            Interoperability Guidelines
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            How HumanTick layers accountability and verification on top of existing content provenance systems.
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

            {/* Section 1: Why Interoperability Matters */}
            <section id="why-matters">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Why interoperability matters
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Content moves across tools, platforms, archives, and borders. A video published on one platform may be archived by institutions, cited in research, and redistributed across networks that did not exist when it was created. Trust systems that do not interoperate fragment verification.
                </p>
                <p>
                  If trust is bound to a single platform, it fails when content moves elsewhere. If verification requires a specific service to remain operational, it fails when that service changes ownership, migrates infrastructure, or shuts down. HumanTick is designed to travel with content, not trap it.
                </p>
                <p>
                  Verification must survive format changes, platform exits, and long-term redistribution. Interoperability is not a feature—it is a requirement for accountability that lasts.
                </p>
              </div>
            </section>

            {/* Section 2: Relationship to Existing Provenance Standards */}
            <section id="relationship-provenance">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Relationship to existing provenance standards
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  HumanTick does not replace provenance standards like C2PA. Provenance describes how content was produced—what tools were used, what edits were made, what metadata was embedded. HumanTick records who declares responsibility for content and how that responsibility is anchored for independent verification.
                </p>
                <p>
                  These are complementary concerns. Provenance answers "what happened to this content?" HumanTick answers "who stands behind this content?" Both are necessary. Neither replaces the other.
                </p>
                <p>
                  HumanTick can reference, embed, or coexist with existing manifests. A content item may carry both C2PA provenance data and HumanTick trust states. Trust states may reference provenance manifests as part of their production context. The systems layer naturally without conflict.
                </p>
                <p>
                  Provenance and accountability serve different verification questions. Provenance enables content authenticity checks. HumanTick enables responsibility verification. Both strengthen trust infrastructure when used together.
                </p>
              </div>
            </section>

            {/* Section 3: Verification Without Platform Coupling */}
            <section id="verification-without-coupling">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Verification without platform coupling
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Verification does not require calling HumanTick services. Any compliant verifier can evaluate trust states independently using the cryptographic primitives and verification rules defined in the protocol. There is no central service that verifiers must contact, no API keys required, no platform dependency.
                </p>
                <p>
                  Platforms may add UI, display trust signals, or integrate verification into their workflows. These are presentation and integration choices. The verification logic itself remains portable. A platform that implements HumanTick verification does not become the gatekeeper of trust.
                </p>
                <p>
                  This design prevents lock-in. Content with HumanTick trust states can be verified by any implementation—newsrooms, archives, research institutions, verification services, or end-user tools. No platform becomes the single point of trust.
                </p>
                <p>
                  HumanTick defines verifiable structure, not platform behavior. The protocol specifies how trust states are formed and verified. It does not dictate how platforms present trust information or integrate verification into user experiences.
                </p>
              </div>
            </section>

            {/* Section 4: Anchor Independence and Portability */}
            <section id="anchor-independence">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Anchor independence and portability
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Anchors are references, not dependencies. A trust state references an anchor commitment that can be verified independently. The anchor itself may be stored in various backends—distributed ledgers, timestamping services, institutional archives, or other durable systems.
                </p>
                <p>
                  Different anchoring backends can coexist. One authority may use one anchoring approach, another may use a different one. Verifiers check anchor integrity through the anchor reference, not by assuming a specific backend. This enables anchoring diversity without breaking verification.
                </p>
                <p>
                  Verification rules do not assume a single ledger, network, or operator. The protocol defines anchor properties—tamper-evidence, durability, time-boundedness—not specific implementations. This separation preserves portability and prevents vendor lock-in.
                </p>
                <p>
                  Anchors enable verification to outlive specific services. If an anchoring backend changes, migrates, or shuts down, anchor references remain checkable through alternative means as long as the commitment data is preserved. This durability is essential for long-term accountability.
                </p>
              </div>
            </section>

            {/* Section 5: Policy and Verifier Diversity */}
            <section id="policy-diversity">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Policy and verifier diversity
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Different verifiers may apply different policies. A newsroom may require specific authority types. An archive may enforce stricter anchoring requirements. A research institution may apply domain-specific constraints. Interoperability does not require policy uniformity.
                </p>
                <p>
                  HumanTick enables shared evidence, not shared judgment. The same trust state can be verified by multiple parties, each applying their own policies and standards. One verifier may accept a trust state that another rejects. This diversity is by design.
                </p>
                <p>
                  Policy is local to the verifier. It is not embedded in trust states or enforced globally. Authorities declare responsibility according to their own standards. Verifiers evaluate those declarations according to their own policies. The protocol provides the infrastructure for both.
                </p>
                <p>
                  Same evidence, different conclusions—by design. This separation enables HumanTick to serve communities with different trust requirements without forcing consensus. Technical verification remains deterministic. Policy evaluation remains contextual.
                </p>
              </div>
            </section>

            {/* Section 6: What Interoperability Does Not Mean */}
            <section id="what-not-mean">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                What interoperability does not mean
              </h2>
              <div className="space-y-6 text-base text-slate-700 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Not automatic trust</h3>
                  <p>
                    Interoperability does not mean that all trust states are automatically trusted or accepted. Verifiers remain responsible for evaluating which authorities they trust, which policies they apply, and which trust states they accept. Interoperability provides portable verification, not universal acceptance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Not shared reputation</h3>
                  <p>
                    Interoperability does not create a global reputation system. Authorities may be trusted differently across communities, jurisdictions, or contexts. One platform's trust decisions do not bind another platform. Reputation remains local, even when verification infrastructure is shared.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Not universal acceptance</h3>
                  <p>
                    A valid trust state does not guarantee acceptance by all verifiers. Policy requirements vary. Some verifiers may require additional evidence, stricter anchoring, or specific authority types. Interoperability ensures technical portability, not policy agreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Not removal of legal or editorial responsibility</h3>
                  <p>
                    Interoperability does not transfer or dilute legal responsibility. Authorities remain accountable under applicable laws and contracts. Platforms remain responsible for their editorial decisions and content policies. HumanTick provides accountability infrastructure—it does not replace legal or editorial frameworks.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Ecosystem Positioning Summary */}
            <section id="ecosystem-summary">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Ecosystem positioning summary
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  HumanTick is a trust layer. It sits alongside provenance systems, digital signatures, and archival formats. It does not replace these systems—it adds verifiable accountability where responsibility needs to be explicit, portable, and durable.
                </p>
                <p>
                  It complements provenance, signatures, and archives by making responsibility declarations checkable over time without requiring issuer infrastructure to remain accessible. This independence enables verification across organizational lifetimes, platform changes, and format migrations.
                </p>
                <p>
                  It enables independent verification across systems. Any compliant verifier can check trust states without platform permission or service access. This portability prevents lock-in and ensures that accountability survives infrastructure changes.
                </p>
                <p>
                  It avoids platform lock-in by design. Trust states are not bound to specific platforms, services, or operators. They travel with content. They remain verifiable regardless of where content appears or how distribution channels evolve. This portability is foundational, not optional.
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
              href="/reference/trust-model"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Read the Trust Model
            </a>
            <a
              href="/reference/cryptographic-primitives"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              View Cryptographic Primitives
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
