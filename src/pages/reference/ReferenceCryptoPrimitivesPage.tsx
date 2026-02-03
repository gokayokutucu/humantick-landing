import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { ReferenceOnThisPageNav } from '../../components/reference/ReferenceOnThisPageNav';
import { useScrollSpy } from '../../components/reference/useScrollSpy';

export function ReferenceCryptoPrimitivesPage() {
  const sections = [
    { id: 'what-is-used', title: 'What HumanTick uses' },
    { id: 'why-minimal', title: 'Why the set is intentionally minimal' },
    { id: 'what-is-not-invented', title: 'What HumanTick does not invent' },
    { id: 'digest-profiles', title: 'Digest profiles' },
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
            Cryptographic Primitives
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            The minimal cryptographic set used across the HumanTick protocol. This page explains what HumanTick uses, why the set is intentionally small, and what it does not invent.
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

              <div id="what-is-used">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">What HumanTick uses</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    HumanTick relies on <strong className="font-semibold text-slate-900">Ed25519</strong> for signatures, <strong className="font-semibold text-slate-900">SHA-256</strong> for hashing, and <strong className="font-semibold text-slate-900">RFC 8785 JSON canonicalization</strong> for deterministic serialization.
                  </p>
                  <p>
                    Public key material is resolved via W3C DID methods. Key binding follows JWK and JWKS conventions.
                  </p>
                </div>
              </div>

              <div id="why-minimal">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Why the set is intentionally minimal</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    A smaller cryptographic surface reduces implementation complexity and interoperability friction.
                  </p>
                  <p>
                    HumanTick does not require novel cryptography. It uses well-tested primitives with broad library support.
                  </p>
                </div>
              </div>

              <div id="what-is-not-invented">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">What HumanTick does not invent</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    HumanTick does not introduce new signature schemes, hash functions, or cryptographic protocols.
                  </p>
                  <p>
                    It does not replace C2PA's cryptographic layer. It complements existing provenance systems by adding trust state anchoring.
                  </p>
                </div>
              </div>

              <div id="digest-profiles">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Digest profiles</h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    Digest profiles define how content is hashed. The protocol includes <strong className="font-semibold text-slate-900">self-excluding-v1</strong> (exclude the signature field itself) and <strong className="font-semibold text-slate-900">image-rgba-v0</strong> (pixel-level image hashing).
                  </p>
                  <p>
                    New digest profiles can be registered without changing the core protocol.
                  </p>
                </div>
              </div>

              {/* Common questions */}
              <div id="common-questions" className="border-t border-gray-200 pt-12">
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-8">Common questions</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I use RSA instead of Ed25519?</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      The current spec requires Ed25519 for consistency. Alternative signature schemes may be supported in future versions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Does HumanTick support post-quantum cryptography?</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      Not yet. Post-quantum primitives are under consideration for future versions as standards mature.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Is key rotation supported?</h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      Yes. DID methods support key rotation. Trust states reference the key active at signing time.
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
