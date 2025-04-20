import Link from "next/link";
import DesignerCard from "@/components/designer-card";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { fetchDesigners } from "@/services/designer.service";

async function DesignersList() {
  const designers = await fetchDesigners();

  return (
    <main className="mx-auto pt-10 py-4 sm:px-8 md:px-16 lg:px-60 xl:px-80 flex flex-col">
      <Header title="All Designers" subtitle="" />

      <div className="flex flex-wrap justify-center gap-4">
        {designers.map((designer) => (
          <DesignerCard key={designer.id} designer={designer} />
        ))}

        {designers.length === 0 && (
          <p className="text-gray-500">No designers found</p>
        )}
      </div>

      <Button asChild className="mt-4">
        <Link href={"/"}>Go home</Link>
      </Button>
    </main>
  );
}

export default DesignersList;
