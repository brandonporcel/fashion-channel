import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RunwayImage } from "@/types/runway.types";
import { getRunway } from "@/services/runway.service";
import getYouTubeVideoId from "@/utils/yt";

type Props = {
  params: Promise<{ slug: string }>;
};

async function RunwayDetail({ params }: Props) {
  const { slug } = await params;
  const runway = await getRunway(slug);

  if (!runway) return <div>Runway not found</div>;

  const { description, link, brand, collectionType, year, images } = runway;

  if (!brand || !images) return null;

  return (
    <>
      <main className="mx-auto pt-10 py-4 sm:px-8 md:px-16 lg:px-60 xl:px-80 flex flex-col gap-12 items-center">
        <Header
          title={brand.name}
          subtitle={collectionType.replaceAll("_", " ") + " " + year}
        />

        {description && (
          <section className="w-full md:w-8/12 text-justify">
            {description}
          </section>
        )}

        <VideoSection link={link} />

        <CollectionImages images={images} />
      </main>
      <footer className="mx-auto pt-10 py-4 sm:px-8 md:px-16 lg:px-60 xl:px-80">
        <Button asChild variant={"outline"} className="w-full mb-4">
          <Link href={"add"}>Add new Runway</Link>
        </Button>
        <Button asChild variant={"ghost"} className="w-full">
          <Link href={"/"}>Go home</Link>
        </Button>
      </footer>
    </>
  );
}

function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center space-y-2">
      <h1 className="font-bold font-serif text-6xl sm:text-7xl">{title}</h1>
      <h2 className="text-xl font-serif font-light uppercase tracking-wide">
        {subtitle}
      </h2>
    </div>
  );
}

function VideoSection({ link }: { link: string }) {
  const src = `https://www.youtube.com/embed/${getYouTubeVideoId(link)}`;

  return (
    <section className="w-full aspect-video">
      <iframe
        className="w-full h-full rounded-md"
        src={src}
        title="Runway Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </section>
  );
}

function CollectionImages({ images }: { images: RunwayImage[] }) {
  return (
    <section className="w-full">
      <h3 className="text-xl font-semibold mb-4">Some pics</h3>
      <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
        {images.map((image) => (
          <div
            key={image.id}
            className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-60 relative aspect-[2/3] rounded-md overflow-hidden cursor-pointer hover:opacity-90"
          >
            <Image
              src={image.url}
              alt="Runway Image"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RunwayDetail;
