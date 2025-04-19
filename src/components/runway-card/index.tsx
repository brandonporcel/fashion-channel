import { Runway } from "@/types/runway.types";
import getYouTubeVideoId from "@/utils/yt";
import Image from "next/image";
import Link from "next/link";

interface Props {
  runway: Runway;
}

function RunwayCard({ runway }: Props) {
  const { slug, link, collectionType, year } = runway;

  const thumbnail = () => {
    const videoId = getYouTubeVideoId(link);
    if (videoId) return `https://img.youtube.com/vi/${videoId}/0.jpg`;
    return "";
  };

  const collectionName = collectionType.replaceAll("_", " ");

  return (
    <Link
      href={`/runways/${slug}`}
      title="View runway"
      aria-label={`View runway ${slug}`}
      className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-60 cursor-pointer hover:opacity-90"
    >
      <div className="relative aspect-[2/3] rounded-md overflow-hidden">
        <Image
          src={thumbnail()}
          alt="Runway Image"
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-2 text-sm text-center">
        {collectionName} {year}
      </p>
    </Link>
  );
}
export default RunwayCard;
