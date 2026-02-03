import { Footer } from '../components/Footer';

export function CreativeIndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Creative Industries
          </h1>
          <p className="text-xl sm:text-2xl text-slate-900 font-medium mb-6 leading-relaxed">
            Protecting authorship while keeping creative work portable.
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Creative work moves across tools, platforms, and distribution channels. HumanTick makes authorship verifiable wherever the work ends up — without locking it to a single system.
          </p>
          <a
            href="/platform/verification"
            className="inline-block text-base text-slate-900 border-b-2 border-slate-300 hover:border-slate-900 transition-colors"
          >
            Explore creative workflows
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 leading-tight">
            Authorship without ownership is fragile
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Creative work travels. Designs are adapted, remixed, and redistributed. Film and video content appears on platforms that didn't exist when the work was created. <strong className="font-semibold text-slate-900">Authorship becomes ambiguous</strong> when work outlives the tools and platforms that first hosted it.
            </p>
            <p>
              Attribution embedded in metadata can be stripped, altered, or separated from the work itself. Watermarks can be removed. File headers can change. <strong className="font-semibold text-slate-900">Copyable signals are not proof</strong> of authorship.
            </p>
            <p>
              Traditional verification depends on platforms vouching for creators — but platforms disappear, change ownership, or shift policies. <strong className="font-semibold text-slate-900">Platform-bound trust does not survive</strong> format changes, distribution shifts, or organizational transitions.
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
                Portable authorship
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Register authorship at creation time so creative work carries verifiable responsibility across platforms and formats.
              </p>
            </div>

            {/* Capability 2 */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Explicit responsibility
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Studios, agencies, and creators can declare who stands behind the work, making accountability clear and durable.
              </p>
            </div>

            {/* Capability 3 */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Human / AI clarity
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Production context can be registered as part of the trust state, allowing creators to declare how work was made.
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
                Visual artists & designers
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Design work moves from creation tools to client reviews, portfolio sites, and licensing platforms.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                HumanTick allows artists to register responsibility at creation, ensuring authorship remains verifiable even as work is licensed, adapted, or distributed across multiple channels.
              </p>
            </div>

            {/* Scenario 2 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Film & media production
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Video content, animation, and film assets are distributed across streaming platforms, broadcast networks, and archives.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Trust states can reflect both individual creators and production studios, allowing responsibility to remain clear across distribution and preservation systems.
              </p>
            </div>

            {/* Scenario 3 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Digital marketplaces
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Creators sell work through multiple platforms, each with different verification and attribution systems.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Anchored trust states travel with creative work, allowing buyers and platforms to verify original authorship without depending on any single marketplace.
              </p>
            </div>

            {/* Scenario 4 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Agency & studio work
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Creative agencies produce work for clients across campaigns, formats, and distribution channels.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Trust references enable agencies to register responsibility that remains verifiable through client handoffs, campaign adaptations, and long-term licensing.
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
                  Authorship declared
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Creator, studio, or agency declares responsibility for the work at creation or publication time.
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
                  The declaration becomes a registered trust state with verifiable identity and production context.
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
                  The trust state is anchored, creating a tamper-evident commitment that survives platform changes.
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
                  Platforms, buyers, and archives verify authorship without needing live access to the original creator's systems.
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
            Make authorship durable — not platform-bound
          </h2>
          <a
            href="/reference/specification"
            className="inline-block text-base text-slate-900 border-b-2 border-slate-300 hover:border-slate-900 transition-colors"
          >
            View creative integrations
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
