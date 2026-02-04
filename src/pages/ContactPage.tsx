import { Footer } from '../components/Footer';
import { useState } from 'react';
import { getRequestAccessUrl } from '../lib/requestAccessUrl';
import { TurnstileWidget } from '../components/TurnstileWidget';

const API_BASE =
  ((import.meta as any).env?.VITE_API_BASE_URL as string | undefined) ?? "http://localhost:5160";

export function ContactPage() {
  const requestAccessUrl = getRequestAccessUrl();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileSiteKey = (import.meta as any).env?.VITE_TURNSTILE_SITE_KEY as string | undefined;
  const requiresTurnstile = Boolean(turnstileSiteKey);

  const contactRoutes = [
    {
      title: 'General',
      email: 'hello@humantick.org',
      description: 'Questions, partnerships, or implementation support.',
    },
    {
      title: 'Press',
      email: 'press@humantick.org',
      description: 'Media inquiries and press requests.',
    },
    {
      title: 'Security',
      email: 'security@humantick.org',
      description: 'Vulnerability reports and security research.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (requiresTurnstile && !turnstileToken) {
      setSubmitError("Please complete the verification first.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          topic: formData.topic.trim(),
          message: formData.message.trim(),
          turnstile_token: turnstileToken ?? undefined,
        }),
      });

      if (!response.ok) {
        setSubmitError("We could not send your message right now. Please try again.");
        return;
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', topic: '', message: '' });
      setTurnstileToken(null);
    } catch {
      setSubmitError("We could not send your message right now. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-4">Contact</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
            Talk to HumanTick.
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Questions, partnerships, press, or implementation support.
          </p>
        </div>
      </section>

      {/* Contact Routes */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactRoutes.map((route, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 bg-slate-50">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{route.title}</h3>
                <a
                  href={`mailto:${route.email}`}
                  className="text-base text-slate-900 underline hover:text-black mb-3 block"
                >
                  {route.email}
                </a>
                <p className="text-sm text-slate-600">{route.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Form */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-8">Send a Message</h2>
          
          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-900 font-medium">Thanks — we'll reply soon.</p>
            </div>
          )}
          {submitError && (
            <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-lg">
              <p className="text-rose-900 font-medium">{submitError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-slate-900 mb-2">
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              >
                <option value="">Select a topic</option>
                <option value="general">General inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="implementation">Implementation support</option>
                <option value="press">Press inquiry</option>
                <option value="security">Security research</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
            </div>

            <TurnstileWidget siteKey={turnstileSiteKey} onToken={setTurnstileToken} />

            <button
              type="submit"
              className="w-full bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Implementation Links */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-8">Implementation Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/reference/specification"
              className="border border-gray-200 rounded-lg p-6 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Read the Specification →</h3>
              <p className="text-sm text-slate-600">Complete protocol documentation and normative requirements.</p>
            </a>
            <a
              href="/reference/verification-rules"
              className="border border-gray-200 rounded-lg p-6 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Verification Rules →</h3>
              <p className="text-sm text-slate-600">Deterministic checks for offline verification.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href={requestAccessUrl}
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
            >
              Request Access
            </a>
            <a
              href="/pricing"
              className="bg-transparent text-slate-900 px-8 py-3 rounded border-2 border-slate-300 hover:border-slate-400 hover:bg-white transition-colors"
            >
              Pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
