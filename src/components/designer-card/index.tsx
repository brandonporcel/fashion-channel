import { Designer } from "@/types/designer.types";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function DesignerCard({ designer }: { designer: Designer }) {
  return (
    <Link
      href="/designers/1"
      title="View designer"
      aria-label={`View designer id}`}
      className="flex flex-col items-center w-40 sm:w-48 md:w-56 lg:w-60 mx-2 hover:bg-neutral-200 py-2 rounded-md"
    >
      <div className="w-42 h-42 relative">
        <Image
          src={designer.thumbnailUrl}
          alt="Designer"
          className="rounded-full object-cover"
          fill
        />
      </div>

      <p className="mt-3 font-semibold text-white">
        {designer.name} {designer.lastName}
      </p>
      <p className="text-sm text-gray-400 flex items-center">
        Asics <Dot className="w-4 h-4" /> Novalis
      </p>
    </Link>
  );
}

export default DesignerCard;
