import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { fetchUnfoundRunways } from "@/services/unfound.service ";
import Link from "next/link";

async function UnfoundList() {
  const unfound = await fetchUnfoundRunways();

  return (
    <main className="mx-auto pt-10 py-4 sm:px-8 md:px-16 lg:px-60 xl:px-80 flex flex-col">
      <Header title="All Unfound Runways" subtitle="" />
      <div className="w-9/12 mx-auto p-6 mb-12">
        <ol className="list-disc">
          {unfound.map((u) => (
            <li key={u.id}>
              <a
                href={u.link}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {u.link}
              </a>
            </li>
          ))}
        </ol>
      </div>

      <Button asChild>
        <Link href={"/"}>Go home</Link>
      </Button>
    </main>
  );
}

export default UnfoundList;
