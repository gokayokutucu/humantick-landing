import { Footer } from '../../components/Footer';

export function CompanyCareersPage() {
  const roles = [
    {
      title: 'Protocol Engineer',
      scope:
        'Design and refine the HumanTick specification, ensuring cryptographic soundness and long-term stability.',
      applyLink: 'mailto:careers@humantick.org?subject=Protocol Engineer Application',
    },
    {
      title: 'Verification Systems Engineer',
      scope:
        'Build and optimize verification implementations, focusing on offline operation and deterministic behavior.',
      applyLink: 'mailto:careers@humantick.org?subject=Verification Systems Engineer Application',
    },
    {
      title: 'Developer Experience (Docs/SDK)',
      scope:
        'Create comprehensive documentation, SDKs, and integration guides that make HumanTick accessible to implementers.',
      applyLink: 'mailto:careers@humantick.org?subject=Developer Experience Application',
    },
    {
      title: 'Research Engineer',
      scope:
        'Explore adversarial models, cryptographic primitives, and long-term durability challenges for trust infrastructure.',
      applyLink: 'mailto:careers@humantick.org?subject=Research Engineer Application',
    },
  ];

  const stages = [
    {
      title: 'Intro',
      description:
        'Initial conversation about your background, interests, and alignment with the role. We discuss the problem space and how you think about trust infrastructure.',
    },
    {
      title: 'Technical Discussion',
      description:
        'Deep dive into relevant technical areas: protocol design, cryptographic primitives, verification logic, or implementation challenges depending on the role.',
    },
    {
      title: 'Collaboration Exercise',
      description:
        'Work through a realistic problem together—reviewing a proposal, designing a feature, or analyzing a security concern. Focuses on how you think and communicate.',
    },
    {
      title: 'Offer',
      description:
        'If we are aligned, we extend an offer with clear expectations, compensation, and details about how we work together.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Company</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Careers
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Work on verification infrastructure with us.
          </p>
        </div>
      </section>

      {/* What We Optimize For */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">
            What We Optimize For
          </h2>
          <div className="space-y-4 text-base text-slate-700 leading-relaxed">
            <p>
              Rigor in specification and implementation. Every normative requirement must be testable. Edge cases
              are documented, not dismissed. Security properties are proven, not assumed.
            </p>
            <p>
              Clarity in communication. Technical writing is precise, unambiguous, and accessible to implementers.
              Decisions are documented with rationale. Review feedback is constructive and specific.
            </p>
            <p>
              Longevity in design. Features are built to last decades, not quarters. Backward compatibility is
              preserved. Breaking changes require exceptional justification. Short-term convenience does not
              override long-term durability.
            </p>
            <p>
              Composability with existing systems. HumanTick complements rather than replaces. Integration points
              are well-defined. Interoperability is prioritized over proprietary lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-12">Open Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{role.title}</h3>
                <p className="text-base text-slate-700 leading-relaxed mb-4">{role.scope}</p>
                <a
                  href={role.applyLink}
                  className="inline-block bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-900 transition-colors text-sm"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">How We Work</h2>
          <div className="space-y-4 text-base text-slate-700 leading-relaxed">
            <p>
              Writing-first culture. Proposals, designs, and decisions are documented before implementation. Clear
              writing reveals unclear thinking. Ambiguity is resolved in specification text, not after deployment.
            </p>
            <p>
              Review culture. All work is reviewed by peers. Technical feedback is expected and welcomed. Reviews
              focus on correctness, clarity, and long-term implications. Approval requires understanding, not just
              agreement.
            </p>
            <p>
              Security mindset. Threat models are documented. Attack vectors are analyzed. Cryptographic properties
              are verified. Security researchers are part of the review process. Responsible disclosure is
              supported.
            </p>
            <p>
              Remote-first, asynchronous collaboration. Work happens across time zones. Written communication is
              primary. Synchronous meetings are scheduled deliberately. Documentation enables independent work.
            </p>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-12">Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stages.map((stage, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-semibold">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">{stage.title}</h3>
                </div>
                <p className="text-base text-slate-700 leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-base text-slate-600">
              The entire process typically takes 2-3 weeks. We move deliberately and communicate clearly at each
              stage.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Contact
            </a>
            <a
              href="/company/roadmap"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              View Roadmap
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
