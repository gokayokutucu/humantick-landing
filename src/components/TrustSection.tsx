export function TrustSection() {
  const companies = [
    { name: 'Adobe', style: 'font-semibold' },
    { name: 'shopify', logo: '🛍' },
    { name: 'Canva', style: 'italic' },
    { name: 'Quora', style: 'font-semibold' },
    { name: 'perplexity', style: 'font-normal' },
    { name: 'PlayAI', style: 'font-semibold' },
    { name: 'Genspark', style: 'font-semibold' },
  ];

  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 text-sm">
            Trusted by over <span className="font-semibold">1,000,000</span> developers and leading companies.
          </p>
          <p className="text-gray-600 text-sm">Enterprise Scale</p>
        </div>
        <div className="flex items-center justify-between gap-8 flex-wrap">
          {companies.map((company, index) => (
            <div key={index} className={`text-xl ${company.style || ''}`}>
              {company.logo && <span className="mr-1">{company.logo}</span>}
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
