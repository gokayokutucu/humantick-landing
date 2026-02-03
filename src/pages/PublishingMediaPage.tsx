import { Footer } from '../components/Footer';

export function PublishingMediaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Publishing & Media
          </h1>
          <p className="text-xl sm:text-2xl text-slate-900 font-medium mb-6 leading-relaxed">
            Attribution, provenance, and authority — for content that moves.
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Articles, reports, and editorials travel across platforms, archives, and syndication networks. HumanTick makes responsibility verifiable wherever content ends up.
          </p>
          <a
            href="/platform/verification"
            className="inline-block text-base text-slate-900 border-b-2 border-slate-300 hover:border-slate-900 transition-colors"
          >
            Explore publishing workflows
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 leading-tight">
            The publishing trust gap
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Content moves. Articles are republished, syndicated, archived, and redistributed across platforms and jurisdictions. As content travels, the <strong className="font-semibold text-slate-900">connection to the original publisher weakens</strong>.
            </p>
            <p>
              Platforms may vanish or change ownership. Archives migrate. Syndication partners add layers. <strong className="font-semibold text-slate-900">Accountability becomes ambiguous</strong> when content outlives the systems that first hosted it.
            </p>
            <p>
              Traditional verification depends on calling back to the issuer — but that only works when the issuer's infrastructure remains reachable, stable, and trusted. <strong className="font-semibold text-slate-900">Platform-bound trust does not scale</strong> across distributed publishing environments.
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
                Authorship that travels
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Register responsibility at publication time so content carries verifiable authority wherever it goes.
              </p>
            </div>

            {/* Capability 2 */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Editorial responsibility
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Newsrooms can declare editorial oversight as a trust state, making accountability explicit and portable.
              </p>
            </div>

            {/* Capability 3 */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Independent verification
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Readers, platforms, and archives can verify responsibility without permission from the original publisher.
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
                Breaking news
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Fast-moving stories often get republished, quoted, and aggregated across platforms within minutes.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                HumanTick allows the originating newsroom to register responsibility at publication, ensuring that accountability remains verifiable even as the story spreads.
              </p>
            </div>

            {/* Scenario 2 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Opinion & analysis
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Opinion pieces and long-form analysis carry the author's voice and the publisher's editorial judgment.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Trust states can reflect both individual authorship and institutional backing, allowing readers to understand who stands behind the work.
              </p>
            </div>

            {/* Scenario 3 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Long-term archives
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Articles archived for historical reference need to remain attributable decades after original publication.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Anchored trust states survive platform migrations, ownership changes, and format updates, keeping responsibility verifiable over time.
              </p>
            </div>

            {/* Scenario 4 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Syndication networks
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Content syndicated to partner outlets needs to preserve original attribution and editorial responsibility.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Trust references travel with syndicated content, allowing partners and readers to verify the original source independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-12 text-center">
            How it works
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 text-sm font-medium text-slate-400 w-8">01</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Responsibility declared
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Publisher or newsroom declares responsibility for the content at publication time.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 text-sm font-medium text-slate-400 w-8">02</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Trust state registered
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  The declaration becomes a registered trust state with policy constraints and verifiable identity.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 text-sm font-medium text-slate-400 w-8">03</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Anchored record
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  The trust state is anchored, creating a tamper-evident commitment that can be checked later.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 text-sm font-medium text-slate-400 w-8">04</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Independent verification
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Readers, platforms, and archives verify responsibility without needing live access to the original publisher.
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
            Make publishing responsibility explicit
          </h2>
          <a
            href="/reference/specification"
            className="inline-block text-base text-slate-900 border-b-2 border-slate-300 hover:border-slate-900 transition-colors"
          >
            View publishing integrations
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
