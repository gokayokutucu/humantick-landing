import { Footer } from '../../components/Footer';
import { getRequestAccessUrl } from '../../lib/requestAccessUrl';
import { useState } from 'react';
import { ReferenceOnThisPageNav } from '../../components/reference/ReferenceOnThisPageNav';
import { useScrollSpy } from '../../components/reference/useScrollSpy';

export function ReferenceGlossaryPage() {
  const requestAccessUrl = getRequestAccessUrl();
  const sections = [
    { id: 'core-trust-protocol-concepts', title: 'Core Trust & Protocol Concepts' },
    { id: 'experience-product-language', title: 'Experience & Product Language' },
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
            Glossary
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Precise definitions for the HumanTick trust model, protocol concepts, and experience-level terminology.
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

              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  HumanTick separates protocol-level trust mechanics from experience-level language. Protocol concepts define how the system operates. Experience language describes how trust becomes visible and interpretable in real-world contexts.
                </p>
                <p>
                  Both layers are part of the same system, but serve different purposes. Protocol terms establish normative behavior. Experience terms shape understanding and application without altering protocol mechanics.
                </p>
              </div>

              {/* Layer 1: Core Trust & Protocol Concepts */}
              <section id="core-trust-protocol-concepts">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Core Trust & Protocol Concepts</h2>
                <p className="text-base text-slate-600 leading-relaxed mb-10">
                  These terms define the foundational mechanics of the HumanTick trust model. They describe how authority, responsibility, anchoring, and verification operate at a system level.
                </p>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Anchor</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A durable, tamper-evident commitment to a trust state that can be verified independently over time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Anchoring</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The process of creating a verifiable commitment to a trust state, making changes detectable and enabling independent verification without ongoing access to the issuer.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Artifact</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A discrete unit of data that travels with or references content, such as a trust state, anchor reference, or verification result.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Attestation</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A signed statement made by an authority about content, its provenance, or its production context.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Authority</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      An actor that can be held accountable for a declaration of responsibility. Authority can be an organization, institution, studio, newsroom, or service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Authority Declaration</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      An explicit statement by an authority claiming responsibility for content or a trust state.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Canonicalization</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The process of transforming data into a standard, normalized form to ensure consistent hashing and signature verification across implementations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Claim</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A statement made by an authority about content, responsibility, or provenance that can be registered as a trust state.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Content Digest</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A cryptographic hash of content that serves as a stable reference for verification, binding the trust state to specific content.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Cryptographic Primitive</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A fundamental cryptographic operation used in the protocol, such as hashing, signing, or key derivation. HumanTick uses a minimal, well-established set.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">External Verifier</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A verification system or tool that operates independently of the issuing authority, checking trust states without requiring permission or live access.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Identity</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A stable, verifiable reference to an authority, typically represented through decentralized identifiers (DIDs) that enable resolution and proof of control.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Interoperability</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The ability of HumanTick to coexist with and complement existing provenance and signing systems, such as C2PA, without replacing them.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Issuer</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The authority or system that creates and registers a trust state. The issuer declares responsibility and provides verifiable identity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Managed Trust Services</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      Operational services that handle registration, anchoring, or verification on behalf of authorities, while preserving the protocol's verification independence.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Non-Normative</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      Content or guidance that explains concepts or provides examples but does not establish protocol requirements. Non-normative material supports understanding without defining mandatory behavior.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Policy</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A set of rules or constraints that govern how trust states are created, validated, or interpreted. Policies are applied locally by verifiers and do not require issuer permission.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Portable Verification</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The capability to verify trust states across different platforms, tools, and environments without requiring access to the original issuing system.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Registration</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The process of recording a responsibility declaration as a trust state, validating authority identity, and applying policy constraints.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Specification</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The authoritative, normative document that defines the HumanTick protocol, data structures, and implementation requirements. Hosted at humantick.org.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Trust Boundary</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The distinction between what must be trusted at registration time versus what can be verified independently at verification time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Trust Model</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The conceptual framework that defines how authority, accountability, policy, and verification interact within the HumanTick protocol.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Trust State</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A registered, policy-bound record that declares who takes responsibility for content. Trust states are explicit, verifiable, and durable.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Verification</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The process of checking whether a trust state exists, is valid, and is anchored, without requiring permission from the issuing authority.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Verification Rule</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A deterministic check applied during verification to assess trust state validity, such as signature verification, anchor integrity, or policy compliance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Verifier Independence</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The principle that verifiers can check trust states without ongoing access to, or permission from, the issuing authority's infrastructure.
                    </p>
                  </div>
                </div>
              </section>

              {/* Layer 2: Experience & Product Language */}
              <section id="experience-product-language">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Experience & Product Language</h2>
                <p className="text-base text-slate-600 leading-relaxed mb-10">
                  These terms describe how trust becomes visible, interpretable, and usable across real-world contexts. They do not alter protocol behavior, but shape how HumanTick is understood and applied.
                </p>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">AI Footprint</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The declared production context of content, describing the role of AI tools or systems in its creation. Footprints are registered, not inferred.
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      <a href="/reference/digital-hologram" className="hover:text-slate-900 transition-colors">
                        See: Digital Hologram
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">AI-Assisted</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A production context label indicating that content was created primarily by humans with the aid of AI tools or systems.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">AI-Generated</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A production context label indicating that content was created primarily or entirely by AI systems, with human oversight or direction.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Digital Hologram</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      An experience-layer term for a tamper-evident trust state that travels with content, making responsibility verifiable wherever the content appears.
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      <a href="/reference/digital-hologram" className="hover:text-slate-900 transition-colors">
                        See: Digital Hologram (Reference)
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Footprint Signal</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The declared production context as it appears in user interfaces, tools, or verification displays. Signals make footprints human-readable.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Hologram Surface</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The user-facing representation of a trust state, showing responsibility, production context, and verification status in a format suitable for non-technical audiences.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Misuse Boundary</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The operational distinction between authorized use of content under a registered trust state and unauthorized manipulation or misrepresentation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Provenance vs Footprint</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      Provenance describes what happened to content (technical history). Footprint describes who takes responsibility and how content was made (declared accountability).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Responsibility Preservation</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The principle that declared responsibility remains verifiable across distribution, format changes, and platform migrations without degradation.
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
              href="https://humantick.org/spec"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Read the Specification
            </a>
            <a
              href={requestAccessUrl}
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
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
