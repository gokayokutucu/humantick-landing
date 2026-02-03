interface CaseStudy {
  id: number;
  label: string;
  statement: React.ReactNode;
  supporting: string;
  logo: string;
  gridSpan: "wide" | "regular";
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    label: "Newsroom",
    statement: (
      <>
        A publisher signs every article at the moment of publication, creating an <strong className="font-semibold">immutable chain</strong> from <em className="italic">editorial decision</em> to <strong className="font-semibold">public record</strong>.
      </>
    ),
    supporting: "Readers verify authenticity without contacting the newsroom.",
    logo: "/case_study/reuters.svg",
    gridSpan: "wide",
  },
  {
    id: 2,
    label: "Research Lab",
    statement: (
      <>
        A lab registers <strong className="font-semibold">datasets</strong> and <strong className="font-semibold">findings</strong> before release, ensuring <em className="italic">authorship</em> cannot be disputed later.
      </>
    ),
    supporting: "Attribution remains verifiable across institutional changes.",
    logo: "/case_study/adobe.svg",
    gridSpan: "regular",
  },
  {
    id: 3,
    label: "Creative Studio",
    statement: (
      <>
        A studio marks <strong className="font-semibold">original work</strong> with a <em className="italic">cryptographic signature</em>, distinguishing human from synthetic output.
      </>
    ),
    supporting: "Clients verify provenance independently, without mediation.",
    logo: "/case_study/gettyimages.svg",
    gridSpan: "regular",
  },
  {
    id: 4,
    label: "Policy Institute",
    statement: (
      <>
        An institute <strong className="font-semibold">anchors</strong> policy drafts to a <em className="italic">public ledger</em>, creating a <strong className="font-semibold">tamper-evident timeline</strong> of revisions.
      </>
    ),
    supporting: "Accountability persists beyond organizational transitions.",
    logo: "/case_study/bbc.svg",
    gridSpan: "wide",
  },
];

export function CaseStudiesSection() {
  const renderCard = (study: CaseStudy, extraClasses = "") => {
    const isWide = study.gridSpan === "wide";
    const colSpan = isWide ? "lg:col-span-2" : "lg:col-span-1";

    return (
      <div
        key={study.id}
        className={`group relative rounded-lg overflow-hidden min-h-[280px] bg-slate-100 ${colSpan} ${extraClasses} transition-all duration-300`}
      >
        {/* Content */}
        <div className="relative h-full p-8 sm:p-10 flex flex-col justify-between">
          {/* Text Content (Top) */}
          <div className="relative z-10">
            {/* Label */}
            <p className="text-xs font-medium uppercase tracking-wider text-slate-800/70 mb-4">
              {study.label}
            </p>

            {/* Statement */}
            <div className="text-base sm:text-lg leading-relaxed text-slate-900 mb-4">
              {study.statement}
            </div>

            {/* Supporting */}
            <p className="text-sm sm:text-base text-slate-700">
              {study.supporting}
            </p>
          </div>

          {/* SVG Wordmark (Bottom-Left) */}
          <div className="relative z-10 mt-8">
            <img
              src={study.logo}
              alt=""
              className="h-6 sm:h-7 w-auto object-contain opacity-30 group-hover:opacity-50 transition-opacity duration-300 ease-out"
              style={{
                filter: "brightness(0%) saturate(100%)",
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Row 1: Reuters (wide) + Adobe (regular) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-[18px] max-w-6xl mx-auto mb-4 lg:mb-[18px]">
          {renderCard(caseStudies[0])} {/* Reuters - spans 2 cols */}
          {renderCard(caseStudies[1])} {/* Adobe - spans 1 col */}
        </div>

        {/* Rows 2+3: Getty (tall, left) + Section Header (middle-right) + BBC (bottom-right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-[18px] max-w-6xl mx-auto lg:grid-rows-2">
          {/* Creative Studio (Getty) - Tall, spans 2 rows */}
          {renderCard(caseStudies[2], "lg:row-span-2")}

          {/* Section Header - Row 2, spans 2 cols (center + right) */}
          <div className="lg:col-span-2 flex items-center py-8 lg:py-0">
            <div className="text-left w-full">
              <h2 className="text-5xl font-serif font-semibold text-slate-900 mb-3">
                How it shows up
              </h2>
              <p className="text-lg text-slate-600 mb-2">
                How trust infrastructure applies across contexts
              </p>
              
              {/* Micro-accent text */}
              <p className="text-sm text-slate-900/65 font-normal mt-1">
                Real-world applications of verifiable authority
              </p>

              {/* Hairline guide - subtle alignment cue */}
              <div 
                className="w-full h-px mt-4"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.07)' }}
              />
            </div>
          </div>

          {/* BBC - Row 3, spans 2 cols (center + right) */}
          {renderCard(caseStudies[3])}
        </div>
      </div>
    </section>
  );
}
