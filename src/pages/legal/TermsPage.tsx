import { Footer } from '../../components/Footer';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Terms
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Draft terms for HumanTick services. This page will be finalized before public availability.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-slate-500 mb-12">Last updated: January 2026</p>

          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Scope</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  These terms govern access to and use of HumanTick services during the alpha period. Services
                  include trust state registration, anchoring infrastructure, verification tools, and protocol
                  documentation.
                </p>
                <p>
                  By accessing HumanTick services, you agree to these terms. If you disagree with any provision, do
                  not use the services.
                </p>
                <p>
                  These terms may change before general availability. Material changes will be communicated to alpha
                  participants with reasonable notice.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Accounts</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  You are responsible for maintaining the security of your account credentials. Do not share
                  credentials or allow unauthorized access to your account.
                </p>
                <p>
                  You must provide accurate information during registration. Organizations must designate authorized
                  representatives who can bind the organization to these terms.
                </p>
                <p>
                  We may suspend or terminate accounts that violate these terms, engage in abusive behavior, or pose
                  security risks to the infrastructure.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Acceptable Use</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  You may use HumanTick services for lawful purposes that align with the protocol's design:
                  verifiable content responsibility, trust state creation, and independent verification.
                </p>
                <p>
                  Prohibited uses include attempting to bypass security measures, impersonating other authorities,
                  creating fraudulent trust states, or interfering with service availability for other users.
                </p>
                <p>
                  You are responsible for content you register and trust states you create. We do not review,
                  endorse, or take responsibility for user-generated trust states.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Confidentiality</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  During the alpha period, you may receive access to pre-release features, documentation, or
                  implementation details. This information should be treated as confidential until publicly released.
                </p>
                <p>
                  Confidentiality obligations do not apply to information that is publicly available, independently
                  developed, or required to be disclosed by law.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Availability</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  We aim to provide reliable service but do not guarantee uninterrupted availability during the
                  alpha period. Services may be modified, suspended, or discontinued without notice.
                </p>
                <p>
                  Scheduled maintenance will be communicated when possible. We are not liable for downtime,
                  performance issues, or data loss during the alpha period.
                </p>
                <p>
                  Before general availability, service-level agreements and availability guarantees will be
                  formalized in updated terms.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Intellectual Property</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  The HumanTick specification is licensed under CC BY 4.0. Reference implementations and tooling are
                  licensed under Apache 2.0. You retain all rights to content you create using HumanTick services.
                </p>
                <p>
                  Trust states you register, content you anchor, and verification results you generate remain your
                  property. We do not claim ownership of user-generated content or trust states.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Liability</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  HumanTick services are provided as-is during the alpha period. We make no warranties about
                  accuracy, reliability, or fitness for particular purposes.
                </p>
                <p>
                  We are not liable for indirect, consequential, or incidental damages arising from service use. Our
                  total liability is limited to amounts you have paid for services in the preceding 12 months.
                </p>
                <p>
                  You are responsible for implementing appropriate backup, security, and verification procedures for
                  your use case.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Changes to Terms</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  We may modify these terms as the protocol evolves and services mature. Material changes will be
                  communicated via email to registered users with at least 30 days notice.
                </p>
                <p>
                  Continued use of services after changes take effect constitutes acceptance of updated terms. If
                  you disagree with changes, discontinue service use before the effective date.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Contact</h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <p>
                  Questions about these terms should be directed to{' '}
                  <a href="mailto:legal@humantick.org" className="text-slate-900 underline hover:text-black">
                    legal@humantick.org
                  </a>
                  .
                </p>
                <p>
                  For security issues, use{' '}
                  <a href="mailto:security@humantick.org" className="text-slate-900 underline hover:text-black">
                    security@humantick.org
                  </a>
                  . For general inquiries, see our{' '}
                  <a href="/contact" className="text-slate-900 underline hover:text-black">
                    contact page
                  </a>
                  .
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
              href="/legal/privacy"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Privacy
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
