import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { ReferenceOnThisPageNav } from '../../components/reference/ReferenceOnThisPageNav';
import { useScrollSpy } from '../../components/reference/useScrollSpy';

export function ReferenceVerificationRulesPage() {
  const sections = [
    { id: 'scope', title: 'Scope and intent' },
    { id: 'determinism', title: 'Determinism and reproducibility' },
    { id: 'inputs', title: 'Verification inputs' },
    { id: 'checks', title: 'Core checks' },
    { id: 'outcomes', title: 'Outcomes and reason codes' },
    { id: 'offline', title: 'Offline verification expectations' },
    { id: 'failure-modes', title: 'Common failure modes' },
    { id: 'non-goals', title: 'What verification does not prove' },
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
            Verification Rules
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Deterministic checks for offline, independent verification — without requiring platform access.
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

            {/* Section 1: Scope and Intent */}
            <section id="scope">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Scope and intent
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Verification rules define the portable evaluation of trust material. They specify how a verifier checks whether a trust state exists, is properly formed, and is anchored. Verification rules validate integrity and bindings, not truth.
                </p>
                <p>
                  Rules operate on artifacts—trust states, signatures, anchors, and content references. They answer "is this artifact intact and consistent?" not "is this content correct or trustworthy?" That judgment remains with the verifier or the policies they apply.
                </p>
                <p>
                  Verification rules enable independent verification. A verifier implements these rules without requiring permission from, or communication with, the issuing authority. The rules are deterministic, portable, and designed to work offline.
                </p>
              </div>
            </section>

            {/* Section 2: Determinism and Reproducibility */}
            <section id="determinism">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Determinism and reproducibility
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  The same input must yield the same result across implementations. Verification is not an opinion or approximation. It is a deterministic check that any compliant verifier can reproduce. If two verifiers produce different results from identical inputs, at least one is incorrect.
                </p>
                <p>
                  Determinism requires stable serialization and canonicalization. Data must be represented consistently before hashing or signature verification. Ambiguous encodings, variable whitespace, or random field ordering break reproducibility. Canonicalization establishes a single, standard form.
                </p>
                <p>
                  Stable hashing boundaries ensure that content digests remain consistent. The same logical content must produce the same hash regardless of when or where it is processed. Verification depends on this consistency to bind trust states to specific content reliably.
                </p>
              </div>
            </section>

            {/* Section 3: Verification Inputs */}
            <section id="inputs">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Verification inputs
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  A verifier consumes several inputs during verification. The trust artifact itself—the trust state with its signatures and metadata. The referenced content, either directly or through stable references. Optional anchor evidence, if the trust state has been anchored. Policy context that determines which rules apply and how failures are interpreted.
                </p>
                <p>
                  Trust artifacts carry references to content through cryptographic hashes. The verifier does not need the entire content history or processing chain. It needs the specific content referenced by the trust state and the ability to compute matching digests.
                </p>
                <p>
                  Anchor evidence may be stored externally or embedded within the artifact. The verifier must be able to resolve anchor references without requiring live access to the anchoring service. Anchors enable long-term verification by making commitments independently checkable.
                </p>
              </div>
            </section>

            {/* Section 4: Core Checks */}
            <section id="checks">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Core checks
              </h2>
              <div className="space-y-6 text-base text-slate-700 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Structural validity</h3>
                  <p>
                    The trust artifact must be well-formed. Required fields must be present. Data types must be correct. The artifact must conform to the expected schema or format. Structural validation precedes all other checks. A malformed artifact cannot be verified.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Content binding</h3>
                  <p>
                    The trust state declares responsibility for specific content through cryptographic digests. Verification checks that the referenced content produces matching hashes. A digest mismatch indicates the content has changed or the wrong content is being verified.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Authority validity</h3>
                  <p>
                    The trust state is signed by an authority using a cryptographic key. Verification checks the signature against the public key associated with the claimed authority identity. Key resolution may require looking up decentralized identifiers or other identity mechanisms. A signature that does not verify indicates tampering or incorrect key usage.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Policy applicability</h3>
                  <p>
                    Verification rules may vary based on policy context. Different verifiers may apply different policies—stricter requirements, additional checks, or specific trust boundaries. Policy determines which rules apply and how outcomes are interpreted. Policy is local to the verifier, not embedded in the trust state.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Anchoring evidence</h3>
                  <p>
                    When present, anchoring evidence provides tamper-evident commitments that enable long-term verification. The verifier checks that the trust state matches the anchored commitment and that the anchor itself is intact. Anchoring is optional but highly recommended for durability and independence.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Outcomes and Reason Codes */}
            <section id="outcomes">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Outcomes and reason codes
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Verification produces a finite set of outcomes. Verified indicates all checks passed. Unverified indicates one or more checks failed. Indeterminate indicates verification could not complete due to missing inputs, unavailable resources, or ambiguous conditions.
                </p>
                <p>
                  Reason codes provide stable, machine-readable explanations for outcomes. A digest mismatch has a specific reason code. A signature failure has another. Reason codes enable automated processing, logging, and policy enforcement. They are consistent across implementations.
                </p>
                <p>
                  Reason codes do not carry human-readable descriptions or localized messages. Those are presentation concerns. Reason codes are identifiers that map to stable semantic meanings. Implementations may render them differently for different audiences, but the underlying code remains constant.
                </p>
              </div>
            </section>

            {/* Section 6: Offline Verification Expectations */}
            <section id="offline">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Offline verification expectations
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Verification remains meaningful without network access. Offline verification checks signatures, content bindings, and anchoring evidence using locally available data. If all required inputs are present, verification proceeds normally. Network access is not required.
                </p>
                <p>
                  Some checks may become "not checked" rather than "failed" in offline contexts. Key resolution may require network access to retrieve public keys. Anchor evidence may be stored remotely. A verifier can distinguish between "check failed" and "check could not be performed due to missing data."
                </p>
                <p>
                  Offline verification enables archival systems, air-gapped environments, and long-term verification scenarios. Content verified today can be verified decades later without requiring the original authority's infrastructure to remain online. Anchors preserve accountability independently of issuer availability.
                </p>
              </div>
            </section>

            {/* Section 7: Common Failure Modes */}
            <section id="failure-modes">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                Common failure modes
              </h2>
              <div className="space-y-6 text-base text-slate-700 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Missing content</h3>
                  <p>
                    The trust state references content that is not available. The verifier cannot compute digests for comparison. This may be temporary (content not yet retrieved) or permanent (content lost or inaccessible).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Digest mismatch</h3>
                  <p>
                    The content provided does not produce the digest recorded in the trust state. The content has changed, or the wrong content is being verified. This is a verification failure indicating tampering or incorrect binding.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Signature invalid</h3>
                  <p>
                    The cryptographic signature does not verify against the claimed authority's public key. The trust state has been tampered with, or the wrong key was used. This is a critical failure indicating the trust state cannot be trusted.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Key resolution failure</h3>
                  <p>
                    The verifier cannot retrieve the public key needed to check the signature. The authority identity may be malformed, the key may be revoked, or network access may be required but unavailable. This may be temporary or indicate an invalid authority.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Policy mismatch</h3>
                  <p>
                    The trust state does not meet the verifier's policy requirements. Required fields may be missing, constraints may be violated, or the authority may not be recognized. Policy failures are local to the verifier and do not indicate tampering.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Anchor unavailable</h3>
                  <p>
                    The trust state claims to be anchored, but the anchor cannot be retrieved or verified. The anchor may be stored externally and currently unreachable. This may be temporary (network issue) or permanent (anchor service shutdown).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: What Verification Does Not Prove */}
            <section id="non-goals">
              <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
                What verification does not prove
              </h2>
              <div className="space-y-6 text-base text-slate-700 leading-relaxed">
                <p>
                  Verification does not guarantee truth. A properly verified trust state indicates that responsibility has been declared and the artifact is intact. It does not assess whether the content is correct, accurate, or safe. Truth evaluation remains a separate concern.
                </p>
                <p>
                  Verification does not prove authorship beyond key control. It demonstrates that someone with access to the authority's private key signed the trust state. It does not prove the legitimate authority holder performed the signing, only that the key was used. Key compromise undermines this binding.
                </p>
                <p>
                  Verification does not assess intent. A valid signature indicates the key was used deliberately to sign this specific artifact. It does not indicate why the signature was created, whether the signer understood the content, or whether the signature was coerced.
                </p>
                <p>
                  Verification does not provide safety guarantees. Verified content may be harmful, misleading, or malicious. Verification establishes accountability, not safety. Content safety evaluation requires separate analysis and remains the responsibility of the verifier or downstream systems.
                </p>
                <p>
                  Verification does not produce reputation scores. It checks artifacts, not authorities. Reputation systems may consume verification results as inputs, but verification itself remains neutral. It reports technical outcomes without judging authority trustworthiness.
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
              href="/reference/cryptographic-primitives"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Read Cryptographic Primitives
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
