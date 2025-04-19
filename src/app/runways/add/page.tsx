import TopRunways from "@/components/top-runways";
import RunwayForm from "./form";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function RunwayData() {
  return (
    <>
      <main className="mx-auto pt-10 py-4 sm:px-8 md:px-16 lg:px-60 xl:px-80 flex flex-col">
        <Header title="Add new Runway" subtitle="Complete the form below" />

        <div className="w-9/12 mx-auto p-6">
          <RunwayForm />
        </div>

        <Button asChild variant={"secondary"} className="w-9/12 mx-auto">
          <Link href={"/runways"}>See all runways</Link>
        </Button>
      </main>
    </>
  );
}

export default RunwayData;
