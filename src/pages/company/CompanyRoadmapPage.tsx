import { Footer } from '../../components/Footer';

export function CompanyRoadmapPage() {
  const nowItems = [
    {
      title: 'C2PA Integration Profile',
      outcome: 'Enable HumanTick trust states to reference C2PA manifests as production context.',
      status: 'In Progress',
    },
    {
      title: 'Reference Implementation',
      outcome: 'Provide a production-ready CLI tool for trust state creation and verification.',
      status: 'In Progress',
    },
    {
      title: 'Test Vector Suite',
      outcome: 'Comprehensive test cases covering all verification rules and edge cases.',
      status: 'In Progress',
    },
  ];

  const nextItems = [
    {
      title: 'SDK Libraries',
      outcome: 'First-party SDKs for Python, JavaScript, and Go with full specification coverage.',
      status: 'Planned',
    },
    {
      title: 'Archive Integration',
      outcome: 'Reference implementations for Internet Archive and institutional repository integration.',
      status: 'Planned',
    },
    {
      title: 'Governance Framework',
      outcome: 'Formalize proposal review process, versioning discipline, and community roles.',
      status: 'Planned',
    },
    {
      title: 'Multi-Chain Anchoring',
      outcome: 'Support additional blockchain anchoring options beyond initial implementation.',
      status: 'Research',
    },
  ];

  const laterItems = [
    {
      title: 'Hardware Security Integration',
      outcome: 'Support for TEE-based signing and hardware-backed key management.',
      status: 'Research',
    },
    {
      title: 'Distributed Verification Networks',
      outcome: 'Enable independent verifier networks with shared anchor resolution.',
      status: 'Research',
    },
    {
      title: 'Long-Term Archive Standards',
      outcome: 'Collaborate on decade-scale preservation standards with archival institutions.',
      status: 'Research',
    },
    {
      title: 'Quantum-Resistant Primitives',
      outcome: 'Prepare migration path for post-quantum cryptographic primitives.',
      status: 'Research',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Planned':
        return 'bg-slate-100 text-slate-800';
      case 'Research':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Company</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Roadmap
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Near-term milestones and longer-horizon priorities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Now/Next/Later */}
            <div className="lg:col-span-8 space-y-12">
              {/* Now */}
              <div>
                <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">Now</h2>
                <div className="space-y-4">
                  {nowItems.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-base text-slate-700 leading-relaxed">{item.outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next */}
              <div>
                <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">Next</h2>
                <div className="space-y-4">
                  {nextItems.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-base text-slate-700 leading-relaxed">{item.outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Later */}
              <div>
                <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">Later</h2>
                <div className="space-y-4">
                  {laterItems.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-base text-slate-700 leading-relaxed">{item.outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Constraints */}
            <div className="lg:col-span-4">
              <div className="space-y-8">
                {/* What We Won't Do */}
                <div className="border border-gray-200 rounded-lg p-6 bg-slate-50">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">What We Won't Do</h3>
                  <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                    <p>
                      We will not build content moderation systems. Trust states record accountability, not
                      judgments about content quality or acceptability.
                    </p>
                    <p>
                      We will not create proprietary verification services. Verification must remain independent
                      and implementable by anyone with access to anchors.
                    </p>
                    <p>
                      We will not introduce trust assumptions that require active issuer participation. Once
                      anchored, trust states must be verifiable offline.
                    </p>
                    <p>
                      We will not optimize for short-term adoption at the expense of long-term durability.
                      Breaking changes require exceptional justification.
                    </p>
                    <p>
                      We will not build features that conflict with interoperability. HumanTick complements
                      existing standards rather than competing with them.
                    </p>
                  </div>
                </div>

                {/* Release Discipline */}
                <div className="border border-gray-200 rounded-lg p-6 bg-slate-50">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Release Discipline</h3>
                  <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                    <p>
                      Semantic versioning applies to the specification. Minor versions add features. Patch
                      versions fix clarifications. Major versions may introduce breaking changes.
                    </p>
                    <p>
                      Backward compatibility is preserved within major versions. Trust states created under v1.x
                      remain verifiable under v1.y. Migration paths are documented for major version transitions.
                    </p>
                    <p>
                      Deprecation timelines span multiple release cycles. Features marked for deprecation remain
                      supported with clear warnings before removal.
                    </p>
                  </div>
                </div>
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
              href="/access/request"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Request Access
            </a>
            <a
              href="/company/governance"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              Read Governance
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
