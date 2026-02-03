export function ProblemSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1040px] px-8 sm:px-10 md:px-12 text-center">
        <h2 className="text-5xl sm:text-6xl font-serif font-semibold tracking-tight leading-[1.02] text-black">
          Fake content is not the core issue.
          <br />
          Unverifiable authority is.
        </h2>

        <p className="mt-6 text-base sm:text-lg leading-snug text-slate-700">
          Content can carry <em className="italic">provenance</em> and still fail to establish <strong className="font-semibold text-slate-900">trust</strong>.
          <br />
          Signatures can remain <em className="italic">valid</em> without clear <strong className="font-semibold text-slate-900">accountability</strong>.
          <br />
          <strong className="font-semibold text-slate-900">Authority</strong> that cannot be <strong className="font-semibold text-slate-900">verified</strong> cannot scale.
        </p>

        <p className="mt-4 text-base sm:text-lg leading-snug text-slate-800">
          HumanTick exists to make <strong className="font-semibold text-black">authority</strong> explicit, <strong className="font-semibold text-black">verifiable</strong>, and <strong className="font-semibold text-black">durable</strong>.
        </p>

        <div className="mt-10">
          <a
            href="/platform"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-900 transition-colors inline-block"
          >
            Explore how HumanTick works
          </a>
        </div>
      </div>
    </section>
  );
}
