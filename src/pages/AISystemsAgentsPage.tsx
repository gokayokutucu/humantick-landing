import { Footer } from '../components/Footer';

export function AISystemsAgentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            AI Systems & Agents
          </h1>
          <p className="text-xl sm:text-2xl text-slate-900 font-medium mb-6 leading-relaxed">
            Verifiable responsibility for systems that act, generate, and decide.
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            AI systems produce outputs, make decisions, and execute actions at scale. HumanTick makes organizational responsibility explicit and verifiable — without relying on platform claims or inferred signals.
          </p>
          <a
            href="/platform/verification"
            className="inline-block text-base text-slate-900 border-b-2 border-slate-300 hover:border-slate-900 transition-colors"
          >
            Explore agent workflows
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-slate-900 mb-12 leading-tight">
            AI outputs lack accountable authorship
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              AI systems generate content, make decisions, and execute actions at scale. Outputs may be reviewed, filtered, or modified by human operators — or they may not. <strong className="font-semibold text-slate-900">Responsibility becomes ambiguous</strong> when it is unclear who stands behind the output or the system that produced it.
            </p>
            <p>
              Attribution is often inferred from platform context, model metadata, or system labels. These signals can be altered, spoofed, or lost as content moves across environments. <strong className="font-semibold text-slate-900">Inferred attribution is not accountable authorship</strong>.
            </p>
            <p>
              Responsibility becomes especially unclear when systems act autonomously, integrate with external tools, or operate across organizational boundaries. <strong className="font-semibold text-slate-900">Accountability gaps emerge</strong> when no party explicitly declares responsibility for what a system does or produces.
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
                Declared system responsibility
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Organizations explicitly declare responsibility for AI systems and their outputs.
              </p>
            </div>

            {/* Capability 2 */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Machine-readable trust
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Responsibility is registered in a form that other systems can verify.
              </p>
            </div>

            {/* Capability 3 */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Platform-independent verification
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Verification does not depend on access to proprietary AI platforms.
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
                Generative content systems
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                AI systems generate text, images, code, or other content at scale, often for publication or distribution.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                HumanTick allows operators to register responsibility for system outputs, making accountability explicit and verifiable even when content is generated automatically.
              </p>
            </div>

            {/* Scenario 2 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Autonomous agents and workflows
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                AI agents execute tasks, make decisions, and interact with other systems without continuous human oversight.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Trust states enable organizations to declare responsibility for agent actions, creating verifiable accountability for automated decisions and workflow execution.
              </p>
            </div>

            {/* Scenario 3 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                AI-assisted decision systems
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Systems generate recommendations, analysis, or decisions that inform human operators or feed into other processes.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Organizations can register responsibility for system recommendations, clarifying accountability when decisions are influenced or automated by AI components.
              </p>
            </div>

            {/* Scenario 4 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                Cross-platform AI integrations
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                AI systems operate across multiple platforms, services, or organizational boundaries, producing outputs in distributed environments.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Trust references travel with AI-generated outputs, allowing downstream systems to verify responsibility without direct access to the originating platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-12 text-center">
            How AI responsibility becomes verifiable
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 text-sm font-medium text-slate-400 w-8">01</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  System authority is declared
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Organization declares responsibility for the AI system or agent and its outputs at deployment or registration time.
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
                  The declaration is validated and recorded as a trust state with verifiable organizational identity and system context.
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
                  The trust state is anchored, creating a tamper-evident commitment that can be verified by other systems or humans.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 text-sm font-medium text-slate-400 w-8">04</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Verification remains independent of the AI system itself
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Downstream systems, auditors, and users verify responsibility without needing live access to the AI platform or its operators.
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
            Make AI responsibility explicit
          </h2>
          <a
            href="/reference/specification"
            className="inline-block text-base text-slate-900 border-b-2 border-slate-300 hover:border-slate-900 transition-colors"
          >
            View agent integrations
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
