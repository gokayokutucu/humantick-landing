export function WhatItIsSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1040px] px-8 sm:px-10 md:px-12 text-center">
        {/* Definition (smaller, grounding text) */}
        <p className="text-lg sm:text-xl leading-relaxed text-slate-700">
          HumanTick is a <strong className="font-semibold text-slate-900">trust infrastructure</strong> that records <em className="italic">who stands behind content</em> — and makes that responsibility <strong className="font-semibold text-slate-900">verifiable anywhere</strong>.
        </p>

        {/* Assertion (larger, interpretive headline) */}
        <h2 className="mt-8 text-4xl sm:text-5xl font-serif font-semibold tracking-tight leading-[1.1] text-black">
          Verifiable trust, by design.
        </h2>
      </div>
    </section>
  );
}
