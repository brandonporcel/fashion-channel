import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function DesignerCard() {
  return (
    <Link
      href="/designers/1"
      title="View designer"
      aria-label={`View designer id}`}
      className="flex flex-col items-center w-40 sm:w-48 md:w-56 lg:w-60 mx-2 hover:bg-neutral-200 py-2 rounded-md"
    >
      <div className="w-42 h-42 relative">
        <Image
          src="https://assets.vogue.com/photos/66f84ce3b7a248afbd81786b/master/w_1280,c_limit/_OBY0008.jpg"
          alt="Designer"
          className="rounded-full object-cover"
          fill
        />
      </div>

      <p className="mt-3 font-semibold text-white">Kiko Kostadinov</p>
      <p className="text-sm text-gray-400 flex gap-1">
        Asics <Dot className="w-4 h-4" /> Novalis
      </p>
    </Link>
  );
}

export default DesignerCard;
