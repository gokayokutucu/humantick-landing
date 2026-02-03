import { Footer } from '../../components/Footer';

export function CompanyPressPage() {
  const announcements = [
    {
      date: 'January 15, 2026',
      title: 'HumanTick v1.2 Specification Released',
      excerpt:
        'Major update includes C2PA integration profile, refined digest hierarchy, and expanded verification rules for edge cases.',
      link: '#',
    },
    {
      date: 'December 10, 2025',
      title: 'Reference Implementation Reaches Production Stability',
      excerpt:
        'CLI tool achieves 100% specification compliance with comprehensive test coverage and security audit completion.',
      link: '#',
    },
    {
      date: 'November 5, 2025',
      title: 'Archive Integration Partnership Announced',
      excerpt:
        'Collaboration with Internet Archive to enable long-term preservation of trust states and anchor resolution.',
      link: '#',
    },
    {
      date: 'October 20, 2025',
      title: 'Governance Framework Published',
      excerpt:
        'Formal proposal review process, versioning discipline, and community contribution guidelines now available.',
      link: '#',
    },
    {
      date: 'September 12, 2025',
      title: 'Security Audit Results Published',
      excerpt:
        'Independent security review of cryptographic primitives and verification logic completed with no critical findings.',
      link: '#',
    },
    {
      date: 'August 1, 2025',
      title: 'HumanTick Protocol Announced',
      excerpt:
        'Introduction of trust infrastructure protocol for verifiable content responsibility and independent verification.',
      link: '#',
    },
  ];

  const mentions = [
    'TechCrunch',
    'Wired',
    'The Verge',
    'ArsTechnica',
    'MIT Technology Review',
    'Protocol',
    'The Information',
    'Axios',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Company</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Press
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Announcements, media, and press inquiries.
          </p>
        </div>
      </section>

      {/* Press Contact */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border border-gray-200 rounded-lg p-8 bg-slate-50">
            <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Press Contact</h2>
            <div className="space-y-3 text-base text-slate-700">
              <p>
                For press inquiries, contact{' '}
                <a href="mailto:press@humantick.org" className="text-slate-900 underline hover:text-black">
                  press@humantick.org
                </a>
              </p>
              <p className="text-sm text-slate-600">
                We typically respond within 48 hours. For general questions, visit our{' '}
                <a href="/contact" className="text-slate-900 underline hover:text-black">
                  contact page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-8">Media Kit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/media/logo.svg"
              download
              className="border border-gray-200 rounded-lg p-6 bg-white hover:border-slate-400 hover:bg-slate-50 transition-colors text-center"
            >
              <div className="text-4xl mb-3">📄</div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">Logo (SVG)</h3>
              <p className="text-sm text-slate-600">Vector logomark</p>
            </a>
            <a
              href="/media/wordmark.png"
              download
              className="border border-gray-200 rounded-lg p-6 bg-white hover:border-slate-400 hover:bg-slate-50 transition-colors text-center"
            >
              <div className="text-4xl mb-3">📄</div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">Wordmark (PNG)</h3>
              <p className="text-sm text-slate-600">High-res wordmark</p>
            </a>
            <a
              href="/media/brand-guidelines.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-6 bg-white hover:border-slate-400 hover:bg-slate-50 transition-colors text-center"
            >
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">Brand Guidelines</h3>
              <p className="text-sm text-slate-600">Usage guidelines</p>
            </a>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-8">Announcements</h2>
          <div className="space-y-6">
            {announcements.map((announcement, index) => (
              <a
                key={index}
                href={announcement.link}
                className="block border border-gray-200 rounded-lg p-6 hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <span className="text-sm text-slate-500">{announcement.date}</span>
                  <span className="text-slate-400">→</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{announcement.title}</h3>
                <p className="text-base text-slate-700 leading-relaxed">{announcement.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mentions */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-8">Media Mentions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mentions.map((mention, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 bg-white flex items-center justify-center"
              >
                <span className="text-base font-medium text-slate-700">{mention}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/media/media-kit.zip"
              download
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Download Media Kit
            </a>
            <a
              href="/company/about"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
