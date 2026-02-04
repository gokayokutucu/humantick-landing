import { useMemo, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useHeaderHeightCssVar } from './useHeaderHeightCssVar';
import { getRequestAccessUrl } from '../lib/requestAccessUrl';

export function Header() {
  useHeaderHeightCssVar();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const consoleOrigin = import.meta.env.VITE_CONSOLE_ORIGIN ?? '';
  const signInHref = consoleOrigin
    ? `${consoleOrigin.replace(/\/$/, '')}/`
    : '/';
  const requestAccessUrl = getRequestAccessUrl();
  
  // Desktop hover menu state
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isItOnMe, setIsItOnMe] = useState(false);
  const currentNavItem = useRef<string | null>(null);

  const nav = useMemo(
    () => [
      {
        label: 'Platform',
        prefix: '/platform',
        desc: 'How HumanTick turns responsibility into portable verification.',
        items: [
          { label: 'Overview', to: '/platform', desc: 'What HumanTick is and how the system fits together.' },
          { label: 'Core Architecture', to: '/platform/architecture', desc: 'Actors, artifacts, and trust boundaries.' },
          { label: 'Trust States', to: '/platform/trust-states', desc: 'How claims become registered and policy-bound.' },
          { label: 'Anchoring Model', to: '/platform/anchoring', desc: 'How a trust state becomes tamper-evident.' },
          { label: 'Verification Model', to: '/platform/verification', desc: 'Offline / independent verification flow.' },
          { label: 'Identity & Authority', to: '/platform/identity', desc: 'Who can claim responsibility and how identity is proven.' },
          { label: 'Interoperability', to: '/platform/interoperability', desc: 'How HumanTick aligns with external ecosystems.' },
        ],
      },
      {
        label: 'Solutions',
        prefix: '/solutions',
        desc: 'Where verification-grade provenance meets real operational constraints.',
        items: [
          { label: 'Publishing & Media', to: '/solutions/publishing-media', desc: 'Attribution, provenance, and authority for distributed publishing.' },
          { label: 'Creative Industries', to: '/solutions/creative', desc: 'Protecting authorship while keeping work portable and usable.' },
          { label: 'Research & Data', to: '/solutions/research-data', desc: 'Trustable datasets, citations, and institutional accountability.' },
          { label: 'Public Institutions', to: '/solutions/public-institutions', desc: 'Public records that remain verifiable beyond any single site.' },
          { label: 'AI Systems & Agents', to: '/solutions/ai-systems-agents', desc: 'Machine-readable responsibility for agentic and generative systems.' },
        ],
      },
      {
        label: 'Reference',
        prefix: '/reference',
        desc: 'Definitions, rules, and primitives for implementers and reviewers.',
        items: [
          { label: 'Specification', to: '/reference/specification', desc: 'Canonical protocol and data model documentation.' },
          { label: 'Digital Hologram', to: '/reference/digital-hologram', desc: 'Portable, machine-readable representation of trust.' },
          { label: 'Trust Model Reference', to: '/reference/trust-model', desc: 'How authority, accountability, and policy interact.' },
          { label: 'Cryptographic Primitives', to: '/reference/cryptographic-primitives', desc: 'The minimal crypto set used across the protocol.' },
          { label: 'Verification Rules', to: '/reference/verification-rules', desc: 'Deterministic checks for offline verification.' },
          { label: 'Interop Guidelines', to: '/reference/interop', desc: 'How to integrate with existing formats and ecosystems.' },
          { label: 'AI Footprint', to: '/reference/ai-footprint', desc: 'Descriptive signals indicating AI system involvement without assigning authority.' },
          { label: 'Glossary', to: '/reference/glossary', desc: 'Precise language for shared understanding.' },
        ],
      },
      {
        label: 'Company',
        prefix: '/company',
        desc: 'The people, governance, and decisions behind the protocol.',
        items: [
          { label: 'About', to: '/company/about', desc: "Mission, principles, and what we're building toward." },
          { label: 'Governance', to: '/company/governance', desc: 'How changes are proposed, reviewed, and adopted.' },
          { label: 'Roadmap', to: '/company/roadmap', desc: 'Near-term milestones and longer-horizon priorities.' },
          { label: 'Research', to: '/company/research', desc: 'Research directions, notes, and collaborations.' },
          { label: 'Press', to: '/company/press', desc: 'Announcements, media, and press inquiries.' },
          { label: 'Careers', to: '/company/careers', desc: 'Work on verification infrastructure with us.' },
        ],
      },
    ],
    []
  );

  const isActivePrefix = (prefix: string) =>
    location.pathname === prefix || location.pathname.startsWith(`${prefix}/`);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  // Scroll lock effect when desktop menu is open
  useEffect(() => {
    if (openMenu !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [openMenu]);

  // Handle nav button enter - only trigger if different item
  const handleNavButtonEnter = (label: string) => {
    if (currentNavItem.current !== label) {
      currentNavItem.current = label;
      setOpenMenu(label);
    }
  };

  // Handle dropdown enter
  const handleDropdownEnter = () => {
    setIsItOnMe(true);
  };

  // Handle dropdown leave
  const handleDropdownLeave = () => {
    setIsItOnMe(false);
    // Eğer isItOnMe true ise ve dropdown dışına çıktıysak, menüyü kapat
    if (isItOnMe) {
      setOpenMenu(null);
      currentNavItem.current = null;
    }
  };

  return (
    <>
      {/* Modal overlay - only on desktop when menu is open */}
      {openMenu !== null && (
        <div className="hidden md:block fixed inset-0 bg-black/20 z-40" />
      )}

      <div className="sticky top-0 z-50">
        <div className="bg-black text-gray-200 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-2">
            <div role="status" className="flex items-center justify-between gap-4 text-xs sm:text-sm">
              <div className="hidden md:block">
                Early Access Registry is open (Mar 2026 cohort).
              </div>
              <div className="md:hidden min-w-0 truncate">
                Early Access Registry open (Mar 2026).
              </div>
              <div className="hidden md:flex items-center gap-3">
                <span>Limited slots for design partners.</span>
                <a
                  href={requestAccessUrl}
                  className="text-orange-400 hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 rounded"
                >
                  Request Access
                </a>
              </div>
              <div className="md:hidden shrink-0">
                <a
                  href={requestAccessUrl}
                  className="text-orange-400 hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 rounded"
                >
                  Request Access
                </a>
              </div>
            </div>
          </div>
        </div>

        <header
          id="site-header"
          className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          {/* Left: logo */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="/" className="flex items-center">
              <img src="/logomark.png" alt="HumanTick" className="block md:hidden h-6 w-auto object-contain shrink-0" />
              <img src="/wordmark.png" alt="HumanTick" className="hidden md:block h-6 w-auto object-contain shrink-0" />
            </a>
          </div>

          {/* Center: desktop nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-5 lg:gap-7 min-w-0">
            {nav.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => handleNavButtonEnter(group.label)}
              >
                <button
                  type="button"
                  className={`text-sm tracking-wide hover:text-black focus:outline-none ${
                    isActivePrefix(group.prefix) ? 'text-black' : 'text-gray-700'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={openMenu === group.label}
                >
                  {group.label}
                </button>
              </div>
            ))}

            <div className="relative">
              <a
                href="/pricing"
                className={`text-sm tracking-wide hover:text-black ${
                  location.pathname === '/pricing' ? 'text-black' : 'text-gray-700'
                }`}
              >
                Pricing
              </a>
            </div>
          </nav>

          {/* Right: actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0 flex-nowrap">
            <a
              href="/reference/specification"
              className={`hidden lg:inline-block text-sm hover:text-black whitespace-nowrap ${
                location.pathname === '/reference/specification' ? 'text-black' : 'text-gray-700'
              }`}
            >
              Docs
            </a>
            <a
              href="/contact"
              className={`hidden lg:inline-block text-sm hover:text-black whitespace-nowrap ${
                location.pathname === '/contact' ? 'text-black' : 'text-gray-700'
              }`}
            >
              Contact
            </a>
            <a
              href={requestAccessUrl}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors text-sm whitespace-nowrap"
            >
              Request Access
            </a>
            <a
              href={signInHref}
              className="border border-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-50 transition-colors text-sm whitespace-nowrap"
            >
              Sign in
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center justify-end gap-3">
            <button
              type="button"
              className="text-sm text-gray-700 hover:text-black"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Dropdown panel - centered on page */}
        {openMenu !== null && (
          <div 
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            {nav.map((group) => {
              if (group.label !== openMenu) return null;
              
              return (
                <div 
                  key={group.label}
                  className="w-[820px] max-w-[calc(100vw-3rem)] rounded-xl border border-gray-200 bg-white shadow-lg p-4"
                >
                  {/* Header - typography bumped up one step */}
                  <div className="px-2 pb-3">
                    <div className="text-lg font-medium text-gray-900">{group.label}</div>
                    <div className="mt-1 text-base text-gray-500 leading-snug">{group.desc}</div>
                  </div>

                  {/* Items grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {group.items.map((item) => {
                      const isActive = location.pathname === item.to;
                      return (
                        <a
                          key={item.to}
                          href={item.to}
                          className={`group/item rounded-lg p-3 transition-colors ${
                            isActive ? 'bg-gray-50 text-gray-900' : 'text-gray-800 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <div className={`text-sm ${isActive ? 'font-medium' : 'font-normal'}`}>
                                {item.label}
                              </div>
                              <div className="mt-1 text-xs text-gray-500 leading-snug line-clamp-2">
                                {item.desc}
                              </div>
                            </div>
                            <span className="text-gray-400 opacity-0 translate-x-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-opacity">
                              →
                            </span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden relative z-50 border-t border-gray-200 bg-white">
            <div className="px-6 py-4">
              <div className="space-y-2">
                {nav.map((group) => (
                  <div key={group.label} className="border border-gray-200 rounded-lg">
                    <button
                      type="button"
                      className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:text-black"
                      onClick={() =>
                        setMobileSection((current) => (current === group.label ? null : group.label))
                      }
                      aria-expanded={mobileSection === group.label}
                    >
                      {group.label}
                    </button>
                    {mobileSection === group.label && (
                      <div className="border-t border-gray-200 py-1">
                        {group.items.map((item) => (
                          <a
                            key={item.to}
                            href={item.to}
                            onClick={closeMobile}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-black"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <a
                  href="/pricing"
                  onClick={closeMobile}
                  className="block px-4 py-3 text-sm text-gray-700 hover:text-black border border-gray-200 rounded-lg"
                >
                  Pricing
                </a>

                <div className="pt-2 flex flex-wrap items-center justify-end gap-4">
                  <a
                    href="/reference/specification"
                    onClick={closeMobile}
                    className="text-sm text-gray-700 hover:text-black"
                  >
                    Docs
                  </a>
                  <a
                    href="/contact"
                    onClick={closeMobile}
                    className="text-sm text-gray-700 hover:text-black"
                  >
                    Contact
                  </a>
                  <a
                    href={signInHref}
                    onClick={closeMobile}
                    className="border border-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-50 transition-colors text-sm"
                  >
                    Sign in
                  </a>
                  <a
                    href={requestAccessUrl}
                    onClick={closeMobile}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors text-sm"
                  >
                    Request Access
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        </header>
      </div>
    </>
  );
}
