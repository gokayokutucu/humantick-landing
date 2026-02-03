import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { createAccessRequest, loadAccessRequests, saveAccessRequests } from '../../lib/accessRequests';

export function RequestAccessPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    apexDomain: '',
    useCase: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState<string | null>(null);
  const [apexError, setApexError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const benefits = [
    {
      title: 'Spec-Aligned Tooling',
      description:
        'CLI tools and SDKs that implement the specification exactly, with comprehensive test coverage and deterministic behavior.',
    },
    {
      title: 'Verification Guidance',
      description:
        'Technical support for implementing offline verification, handling edge cases, and integrating with existing systems.',
    },
    {
      title: 'Early API Surface',
      description:
        'Access to trust state registration, anchoring infrastructure, and verification endpoints before general availability.',
    },
    {
      title: 'Feedback Loop',
      description:
        'Direct communication with maintainers. Your implementation challenges inform specification refinements and tooling priorities.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const apexValue = normalizeApexDomain(formData.apexDomain);
    const validation = validateApexDomain(apexValue);
    if (validation) {
      setApexError(validation);
      return;
    }

    let backendRequestId: string | null = null;
    try {
      const response = await fetch('/api/request-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email.trim(),
          company_name: formData.companyName.trim(),
          use_case: formData.useCase.trim(),
          apex_domain: apexValue,
        }),
      });

      if (response.ok) {
        const payload = (await response.json()) as { request_id?: string };
        backendRequestId = payload.request_id ?? null;
      } else {
        setSubmitError('We could not submit your request right now. Please try again.');
      }
    } catch {
      setSubmitError('We could not submit your request right now. Please try again.');
    }

    const record = createAccessRequest({
      company_name: formData.companyName.trim(),
      contact_name: formData.contactName.trim(),
      email: formData.email.trim(),
      apex_domain: apexValue,
      use_case: formData.useCase.trim(),
    });
    const existing = loadAccessRequests();
    saveAccessRequests([record, ...existing]);
    setRequestId(backendRequestId ?? record.request_id);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name === 'apexDomain') {
      setApexError(null);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Access</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
              Application received.
            </h1>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                We review applications within 5 business days. You'll receive an email at{' '}
                <strong className="text-slate-900">{formData.email}</strong> with next steps.
              </p>
              {requestId ? (
                <p>
                  Your request id is <strong className="text-slate-900">{requestId}</strong>.
                </p>
              ) : null}
              <p>
                Alpha access is granted based on fit and verification requirements. We prioritize teams with clear
                provenance constraints and production deployment timelines.
              </p>
              <p>
                If your application is accepted, we'll schedule a technical discussion to review integration
                requirements and ensure the protocol fits your use case.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              {requestId ? (
                <a
                  href={`/request-status?rid=${encodeURIComponent(requestId)}`}
                  className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
                >
                  View status
                </a>
              ) : null}
              <a
                href="/"
                className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
              >
                Return Home
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Access</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Request access to the HumanTick alpha.
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Access is granted based on fit and verification needs. We prioritize teams shipping real provenance
            constraints.
          </p>
        </div>
      </section>

      {/* What You Get in Alpha */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-12">What You Get in Alpha</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-base text-slate-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-8">Application</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-slate-900 mb-2">
                Company name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-slate-900 mb-2">
                Contact name
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                Work email
              </label>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="apexDomain" className="block text-sm font-medium text-slate-900 mb-2">
                Apex domain
              </label>
              <input
                type="text"
                id="apexDomain"
                name="apexDomain"
                value={formData.apexDomain}
                onChange={handleChange}
                onBlur={() => {
                  const normalized = normalizeApexDomain(formData.apexDomain);
                  const validation = validateApexDomain(normalized);
                  setApexError(validation);
                  if (!validation && normalized !== formData.apexDomain) {
                    setFormData((prev) => ({ ...prev, apexDomain: normalized }));
                  }
                }}
                required
                data-testid="request-access-apex-domain"
                placeholder="example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
              <p className="mt-2 text-sm text-slate-600">Use the apex domain only (example.com).</p>
              {apexError ? (
                <p className="mt-2 text-sm text-red-600" data-testid="request-access-apex-domain-error">
                  {apexError}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="useCase" className="block text-sm font-medium text-slate-900 mb-2">
                Use case
              </label>
              <textarea
                id="useCase"
                name="useCase"
                value={formData.useCase}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe what you plan to ship, what you need to verify, and any provenance constraints."
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
            </div>

            {submitError ? (
              <p className="text-sm text-red-600" data-testid="request-access-submit-error">
                {submitError}
              </p>
            ) : null}

            <button
              type="submit"
              data-testid="request-access-submit"
              className="w-full bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Request Access
            </button>
          </form>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-6">What Happens Next</h2>
          <div className="space-y-4 text-base text-slate-700 leading-relaxed">
            <p>
              We review all applications within 5 business days. Applications are evaluated based on technical fit,
              verification requirements, and production readiness. We prioritize teams with clear provenance
              constraints and deployment timelines.
            </p>
            <p>
              If your application is accepted, we schedule a technical discussion to review integration
              requirements, answer specification questions, and ensure HumanTick aligns with your use case. This
              conversation typically takes 45-60 minutes.
            </p>
            <p>
              After the technical discussion, you receive access credentials, onboarding documentation, and a direct
              channel for implementation support. Alpha participants are expected to provide feedback on
              specification clarity, tooling gaps, and integration challenges.
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
              href="/reference/trust-model"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              Read the Trust Model
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function normalizeApexDomain(value: string) {
  return value.trim().toLowerCase();
}

function validateApexDomain(value: string): string | null {
  if (!value) return 'Enter an apex domain like example.com (no www, no urls, no paths or ports).';
  if (value.includes('://') || value.includes('/') || value.includes('?') || value.includes('#')) {
    return 'Enter an apex domain like example.com (no www, no urls, no paths or ports).';
  }
  if (value.includes('@') || value.includes(' ') || value.includes(':')) {
    return 'Enter an apex domain like example.com (no www, no urls, no paths or ports).';
  }
  if (value.startsWith('www.')) {
    return 'Use the apex domain only (no www).';
  }
  if (value.startsWith('.') || value.endsWith('.') || value.includes('..')) {
    return 'Enter a valid apex domain (example.com).';
  }
  if (!value.includes('.')) {
    return 'Enter a valid apex domain (example.com).';
  }
  if (value.length > 253) {
    return 'Apex domain is too long.';
  }

  const labels = value.split('.');
  for (const label of labels) {
    if (!label || label.length > 63) {
      return 'Enter a valid apex domain (example.com).';
    }
    if (label.startsWith('-') || label.endsWith('-')) {
      return 'Enter a valid apex domain (example.com).';
    }
    if (!/^[a-z0-9-]+$/.test(label)) {
      return 'Enter a valid apex domain (example.com).';
    }
  }

  return null;
}
