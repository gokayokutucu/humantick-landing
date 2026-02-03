import { Footer } from '../components/Footer';

export function ResearchDataPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Research & Data
          </h1>
          <p className="text-xl sm:text-2xl text-slate-900 font-medium mb-6 leading-relaxed">
            Verifiable responsibility for data, findings, and institutional claims.
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Datasets and research outputs are cited, reused, and repackaged across institutions and time. HumanTick makes institutional responsibility verifiable in ways that survive organizational change, platform migration, and long-term archival.
          </p>
          <a
            href="/platform/verification"
            className="inline-block text-base text-slate-900 border-b-2 border-slate-300 hover:border-slate-900 transition-colors"
          >
            Explore research workflows
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 leading-tight">
            Data outlives the systems that publish it
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Datasets and research findings are reused, repackaged, and redistributed across institutions, platforms, and jurisdictions. A dataset released by one institution may be cited, analyzed, and built upon by researchers decades later. <strong className="font-semibold text-slate-900">Responsibility becomes unclear</strong> when original publication systems disappear or change ownership.
            </p>
            <p>
              Research platforms evolve. Institutional repositories migrate. Grant-funded infrastructure reaches end-of-life. Traditional provenance metadata travels with datasets, but <strong className="font-semibold text-slate-900">metadata alone cannot preserve accountability</strong> when the systems that issued it are no longer reachable or trusted.
            </p>
            <p>
              Verifying the source of a dataset typically requires calling back to the institution's infrastructure — but that only works when systems remain stable, accessible, and under consistent governance. <strong className="font-semibold text-slate-900">Platform-dependent verification does not scale</strong> across decades, reorganizations, or international reuse.
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
                Institutional responsibility
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Research outputs carry the authority of the institution that released them.
              </p>
            </div>

            {/* Capability 2 */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Durable attribution
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Authorship and responsibility remain verifiable across reuse and citation.
              </p>
            </div>

            {/* Capability 3 */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Independent verification
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Trust does not depend on access to internal systems or private APIs.
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
                Public datasets and open science
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Publicly released datasets are downloaded, analyzed, and cited by researchers worldwide, often years after original publication.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                HumanTick allows institutions to register responsibility at release time, ensuring accountability remains verifiable even when platforms migrate or hosting infrastructure changes.
              </p>
            </div>

            {/* Scenario 2 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Research publications and citations
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Research papers and findings are cited across disciplines, with institutional backing serving as an anchor for credibility.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Trust states can reflect institutional endorsement alongside individual authorship, making responsibility clear and verifiable across citation networks and time.
              </p>
            </div>

            {/* Scenario 3 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Long-term data archives
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Research data archived for decades must maintain verifiable provenance as institutional stewardship changes hands.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Anchored trust states survive organizational restructuring, platform transitions, and format migrations, keeping institutional accountability intact over time.
              </p>
            </div>

            {/* Scenario 4 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Collaborative research networks
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Multi-institution collaborations produce datasets and findings where responsibility is distributed across partners.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Trust references enable each institution to register its contribution and oversight, making shared accountability explicit and independently verifiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-12 text-center">
            How research trust becomes verifiable
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 text-sm font-medium text-slate-400 w-8">01</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Institution declares responsibility
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Research institution or laboratory declares responsibility for the dataset, finding, or publication at release time.
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
                  The declaration is validated and recorded as a trust state with verifiable institutional identity and policy constraints.
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
                  The trust state is anchored, creating a tamper-evident commitment that remains checkable across time and infrastructure changes.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 text-sm font-medium text-slate-400 w-8">04</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Verification remains independent over time
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Researchers, institutions, and archives verify responsibility without needing live access to the original institution's systems.
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
            Make research accountability durable
          </h2>
          <a
            href="/reference/specification"
            className="inline-block text-base text-slate-900 border-b-2 border-slate-300 hover:border-slate-900 transition-colors"
          >
            View research integrations
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
