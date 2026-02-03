import { Footer } from '../components/Footer';

export function PublicInstitutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Public Institutions
          </h1>
          <p className="text-xl sm:text-2xl text-slate-900 font-medium mb-6 leading-relaxed">
            Verifiable responsibility for records that must outlast administrations.
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Public records, official announcements, and institutional communications serve citizens across decades and administrations. HumanTick makes institutional responsibility verifiable in ways that survive website changes, system migrations, and organizational transitions.
          </p>
          <a
            href="/platform/verification"
            className="inline-block text-base text-slate-900 border-b-2 border-slate-300 hover:border-slate-900 transition-colors"
          >
            Explore public sector workflows
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 leading-tight">
            Public trust depends on durable records
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Public information often changes hands across administrations, agencies, and jurisdictions. Records that were published on one website may be archived, migrated, or redistributed under different stewardship. <strong className="font-semibold text-slate-900">Institutional responsibility becomes unclear</strong> when systems that first issued records are replaced or retired.
            </p>
            <p>
              Government websites and domains are redesigned, merged, or decommissioned. Infrastructure changes ownership. Platforms evolve. Traditional approaches to verification — checking a specific URL or calling back to a known system — <strong className="font-semibold text-slate-900">do not work when those systems no longer exist</strong> in their original form.
            </p>
            <p>
              Citizens, journalists, and institutions need a way to verify <strong className="font-semibold text-slate-900">official responsibility without relying on a single website</strong>, domain, or platform. Public accountability requires verification that survives infrastructure turnover and administrative transitions.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Capability 1 */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Administrative accountability
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Institutions declare responsibility for official records at the time of release.
              </p>
            </div>

            {/* Capability 2 */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Record durability
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Public records remain verifiable even as systems and administrations change.
              </p>
            </div>

            {/* Capability 3 */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Citizen-level verification
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Anyone can verify responsibility without privileged access or credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-16 text-center">
            Where this applies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Scenario 1 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Official announcements and press releases
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Government agencies issue announcements, policy updates, and public communications that must remain attributable over time.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                HumanTick allows institutions to register responsibility at publication, ensuring accountability remains verifiable even when websites are redesigned, domains change, or content is archived elsewhere.
              </p>
            </div>

            {/* Scenario 2 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Public reports and regulatory documents
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Regulatory agencies publish reports, guidelines, and compliance documents that serve as authoritative references for years.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Trust states can reflect institutional oversight and approval processes, making responsibility explicit and independently verifiable across platform migrations and archival systems.
              </p>
            </div>

            {/* Scenario 3 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Long-term government archives
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Public records archived for historical access must maintain verifiable provenance as archival systems and custodianship evolve.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Anchored trust states survive organizational restructuring, system replacements, and format transitions, keeping institutional accountability intact across decades.
              </p>
            </div>

            {/* Scenario 4 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Multi-jurisdictional coordination
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Joint announcements, treaties, and collaborative records involve multiple institutions across jurisdictions and governance structures.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Trust references enable each institution to register its endorsement and responsibility, making shared accountability verifiable without requiring coordinated infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-12 text-center">
            How public responsibility becomes verifiable
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 text-sm font-medium text-slate-400 w-8">01</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Institution declares responsibility
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Government agency or public institution declares responsibility for the record, announcement, or communication at the time of release.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 text-sm font-medium text-slate-400 w-8">02</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Responsibility becomes a registered trust state
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  The declaration is validated and recorded as a trust state with verifiable institutional identity and governance context.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 text-sm font-medium text-slate-400 w-8">03</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Trust state is anchored
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  The trust state is anchored, creating a tamper-evident commitment that remains checkable across administrative transitions and infrastructure changes.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 text-sm font-medium text-slate-400 w-8">04</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Verification remains independent of institutional systems
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Citizens, journalists, and institutions verify responsibility without needing live access to the original agency's infrastructure or websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-8">
            Make public responsibility verifiable by design
          </h2>
          <a
            href="/reference/specification"
            className="inline-block text-base text-slate-900 border-b-2 border-slate-300 hover:border-slate-900 transition-colors"
          >
            View public sector integrations
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
