import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  image: string;
}

function RunwayCard({ id, image }: Props) {
  return (
    <Link
      href={`/runways/${id}`}
      title="View runway"
      aria-label={`View runway ${id}`}
      className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-60 cursor-pointer hover:opacity-90"
    >
      <div className="relative aspect-[2/3] rounded-md overflow-hidden">
        <Image src={image} alt="Runway Image" fill className="object-cover" />
      </div>
      <p className="mt-2 text-sm text-center">Fall 2025 Ready-To-Wear</p>
    </Link>
  );
}
export default RunwayCard;
