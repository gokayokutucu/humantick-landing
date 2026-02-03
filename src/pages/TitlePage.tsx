type TitlePageProps = {
  title: string;
};

export function TitlePage({ title }: TitlePageProps) {
  return (
    <main className="bg-white">
      <section className="py-24 sm:py-28">
        <div className="mx-auto w-full max-w-[1040px] px-8 sm:px-10 md:px-12">
          <h1 className="text-5xl sm:text-6xl font-serif font-semibold tracking-tight leading-[1.02] text-black">
            {title}
          </h1>
        </div>
      </section>
    </main>
  );
}
