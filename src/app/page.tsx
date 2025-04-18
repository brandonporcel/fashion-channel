import Hero from "@/components/hero";
import Introduction from "@/components/introduction";
import RandomQuote from "@/components/random-quote";
import TopDesigners from "@/components/top-designers";
import TopRunways from "@/components/top-runways";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <main className="mx-auto pt-10 py-4 sm:px-8 md:px-16 lg:px-60 xl:px-80 flex flex-col gap-4">
        <div id="runways">
          <TopRunways />
        </div>
        <div id="designers">
          <TopDesigners />
        </div>
        <RandomQuote />
      </main>
    </>
  );
}
