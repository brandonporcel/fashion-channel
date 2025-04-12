import TopRunways from "@/components/top-runways";
import RunwayForm from "./form";

function RunwayData() {
  return (
    <>
      <main className="mx-auto pt-10 py-4 sm:px-8 md:px-16 lg:px-60 xl:px-80 flex flex-col">
        <Header title="Add new Runway" subtitle="Complete the form below" />

        <div className="w-9/12 mx-auto p-6 mb-12">
          <RunwayForm />
        </div>

        <section className="p-4 sm:px-0">
          <TopRunways />
        </section>
      </main>
    </>
  );
}

function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center space-y-2 mb-6">
      <h1 className="font-bold font-serif text-6xl sm:text-5xl">{title}</h1>
      <h2 className="text-xl font-serif font-light uppercase tracking-wide">
        {subtitle}
      </h2>
    </div>
  );
}

export default RunwayData;
