import Link from "next/link";
import DesignerCard from "../designer-card";
import { fetchDesigners } from "@/services/designer.service";

async function TopDesigners() {
  const designers = await fetchDesigners({ limit: 5 });

  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-4">Top Designers</h2>
        <Link href={"designers"} className="hover:underline">
          See all
        </Link>
      </div>
      <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
        {designers.map((designer) => (
          <DesignerCard key={designer.id} designer={designer} />
        ))}
      </div>
    </section>
  );
}
export default TopDesigners;
