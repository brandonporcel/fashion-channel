import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { fetchCritics } from "@/services/critics.service";
import Link from "next/link";

async function CriticsList() {
  const critics = await fetchCritics();

  return (
    <main className="mx-auto pt-10 py-4 sm:px-8 md:px-16 lg:px-60 xl:px-80 flex flex-col">
      <Header title="All Critics" subtitle="" />
      <div className="w-9/12 mx-auto p-6 mb-12">
        <ol className="list-disc">
          {critics.map((critic) => (
            <li key={critic.id}>{critic.name}</li>
          ))}
        </ol>
      </div>

      <Button asChild>
        <Link href={"/"}>Go home</Link>
      </Button>
    </main>
  );
}

export default CriticsList;
