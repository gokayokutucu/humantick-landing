import { Footer } from '../../components/Footer';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Privacy
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            How we handle data in the HumanTick alpha. This page will be finalized before public availability.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-slate-500 mb-12">Last updated: January 2026</p>

          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">What We Collect</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  We collect information you provide during registration: name, email, organization, and role.
                  During service use, we collect technical data: trust states you register, anchoring operations,
                  verification requests, and API usage patterns.
                </p>
                <p>
                  Trust states and content digests you register are stored as part of service operation. These may
                  be anchored on public blockchains, making them permanently available.
                </p>
                <p>
                  We collect standard web server logs: IP addresses, user agents, request timestamps, and error
                  messages. These logs are retained for operational monitoring and security analysis.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Why We Collect It</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  Account information enables authentication, service access, and communication about protocol
                  updates, security issues, and service changes.
                </p>
                <p>
                  Technical data enables service operation: trust state storage, anchor coordination, verification
                  processing, and usage metering. This data helps us understand system load, identify performance
                  issues, and plan capacity.
                </p>
                <p>
                  Server logs support security monitoring, abuse prevention, and technical support. They help
                  identify attacks, diagnose errors, and investigate service disruptions.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Cookies and Analytics</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  We use essential cookies for authentication and session management. These are required for service
                  operation and cannot be disabled.
                </p>
                <p>
                  During the alpha period, we may use analytics to understand how documentation and tools are used.
                  Analytics data is anonymized and used only for service improvement. Specific analytics providers
                  will be documented before general availability.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Data Retention</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  Account information is retained while your account is active. Trust states and anchors are
                  retained indefinitely as part of protocol operation. Once anchored on public blockchains, they
                  become permanent public records.
                </p>
                <p>
                  Server logs are retained for 90 days. Security-relevant logs may be retained longer for
                  investigation purposes.
                </p>
                <p>
                  After account closure, we retain minimal information required for legal compliance and security
                  purposes. Trust states you created remain available as they may be referenced by other users'
                  verification workflows.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Data Sharing</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  We do not sell user data. We do not share account information with third parties except as
                  required for service operation or legal compliance.
                </p>
                <p>
                  Trust states and anchors you create are public by design. They are intended to be verifiable by
                  anyone. Do not include sensitive information in trust state metadata.
                </p>
                <p>
                  We may share anonymized, aggregated usage statistics for research purposes or to demonstrate
                  protocol adoption. Individual user behavior is not disclosed.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Security</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  We implement standard security measures: encrypted connections, access controls, regular security
                  audits, and monitoring for suspicious activity. Account credentials are stored using
                  industry-standard hashing.
                </p>
                <p>
                  Despite these measures, no system is perfectly secure. You are responsible for protecting your
                  credentials and reporting suspected security issues promptly.
                </p>
                <p>
                  Security incidents affecting user data will be disclosed according to applicable regulations and
                  responsible disclosure practices.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Your Choices</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  You can update account information through your account settings. You can request account closure
                  by contacting support. Account closure does not delete trust states you created, as they may be
                  referenced by other users.
                </p>
                <p>
                  You can opt out of non-essential communications. Security notifications and service announcements
                  cannot be disabled.
                </p>
                <p>
                  You can request a copy of your account data. We will provide this in machine-readable format
                  within 30 days.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Contact</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  Privacy questions should be directed to{' '}
                  <a href="mailto:privacy@humantick.org" className="text-slate-900 underline hover:text-black">
                    privacy@humantick.org
                  </a>
                  .
                </p>
                <p>
                  For data access requests, account closure, or other privacy-related issues, contact the same
                  address. We respond to privacy inquiries within 5 business days.
                </p>
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
              href="/legal/terms"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Terms
            </a>
            <a
              href="/contact"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
