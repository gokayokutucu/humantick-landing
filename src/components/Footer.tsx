export function Footer() {
  return (
    <footer className="bg-[#16D98F] border-t border-black/10 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          <div>
            <h4 className="mb-4 text-sm font-medium text-black">Platform</h4>
            <ul className="space-y-2 text-sm text-black/80">
              <li><a href="/platform" className="hover:underline">Overview</a></li>
              <li><a href="/platform/architecture" className="hover:underline">Core Architecture</a></li>
              <li><a href="/platform/trust-states" className="hover:underline">Trust States</a></li>
              <li><a href="/platform/anchoring" className="hover:underline">Anchoring Model</a></li>
              <li><a href="/platform/verification" className="hover:underline">Verification Model</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-black">Solutions</h4>
            <ul className="space-y-2 text-sm text-black/80">
              <li><a href="/solutions/publishing-media" className="hover:underline">Publishing &amp; Media</a></li>
              <li><a href="/solutions/creative" className="hover:underline">Creative Industries</a></li>
              <li><a href="/solutions/research-data" className="hover:underline">Research &amp; Data</a></li>
              <li><a href="/solutions/public-institutions" className="hover:underline">Public Institutions</a></li>
              <li><a href="/solutions/ai-systems-agents" className="hover:underline">AI Systems &amp; Agents</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-black">Reference</h4>
            <ul className="space-y-2 text-sm text-black/80">
              <li><a href="/reference/specification" className="hover:underline">Specification</a></li>
              <li><a href="/reference/digital-hologram" className="hover:underline">Digital Hologram</a></li>
              <li><a href="/reference/ai-footprint" className="hover:underline">AI Footprint</a></li>
              <li><a href="/reference/trust-model" className="hover:underline">Trust Model Reference</a></li>
              <li><a href="/reference/cryptographic-primitives" className="hover:underline">Cryptographic Primitives</a></li>
              <li><a href="/reference/verification-rules" className="hover:underline">Verification Rules</a></li>
              <li><a href="/reference/interop" className="hover:underline">Interop Guidelines</a></li>
              <li><a href="/reference/glossary" className="hover:underline">Glossary</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-black">Company</h4>
            <ul className="space-y-2 text-sm text-black/80">
              <li><a href="/company/about" className="hover:underline">About</a></li>
              <li><a href="/company/governance" className="hover:underline">Governance</a></li>
              <li><a href="/company/roadmap" className="hover:underline">Roadmap</a></li>
              <li><a href="/company/research" className="hover:underline">Research</a></li>
              <li><a href="/company/press" className="hover:underline">Press</a></li>
              <li><a href="/company/careers" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-black">Legal</h4>
            <ul className="space-y-2 text-sm text-black/80">
              <li><a href="/legal/terms" className="hover:underline">Terms</a></li>
              <li><a href="/legal/privacy" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-black/80">
          <div>© HumanTick, 2026</div>
          <div className="flex items-center gap-4">
            <a href="/legal/terms" className="hover:underline">Terms</a>
            <a href="/legal/privacy" className="hover:underline">Privacy</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-10 pointer-events-none opacity-[0.06]">
        <svg width="700" height="240" viewBox="0 0 700 240" className="text-black">
          <text x="-40" y="170" fontSize="140" fontWeight="700" fill="currentColor">
            HumanTick
          </text>
        </svg>
      </div>
    </footer>
  );
}
