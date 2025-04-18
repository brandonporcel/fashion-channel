import RunwayCard from "@/components/runway-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = Promise<{
  params: {
    slug: string;
  };
}>;

const runways = [
  {
    id: 1,
    image:
      "https://assets.vogue.com/photos/66f84ce3b7a248afbd81786b/master/w_1280,c_limit/_OBY0008.jpg",
  },
];

async function RunwayDetail(props: { params: Props }) {
  const {
    params: { slug },
  } = await props.params;

  return (
    <>
      <main className="mx-auto pt-10 py-4 sm:px-8 md:px-16 lg:px-60 xl:px-80 flex flex-col gap-12 items-center">
        <Header title="McQueen" subtitle="Fall 2025 Ready-To-Wear" />

        <section className="w-full md:w-8/12 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quae
          obcaecati magni veritatis molestias sapiente ipsum delectus voluptate
          quo officia ratione eligendi praesentium hic sequi aliquam, quas odio
          sint rerum!
        </section>

        <VideoSection src="https://www.youtube.com/embed/S4oKJ8WoMiI" />

        <CollectionSection runways={runways} />
      </main>
      <footer className="mx-auto pt-10 py-4 sm:px-8 md:px-16 lg:px-60 xl:px-80 flex flex-col gap-12 items-center">
        <Button asChild variant={"outline"} className="w-full">
          <Link href={"add"}>Add new Runway</Link>
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

function VideoSection({ src }: { src: string }) {
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

function CollectionSection({
  runways,
}: {
  runways: { id: number; image: string }[];
}) {
  return (
    <section className="w-full">
      <h3 className="text-xl font-semibold mb-4">Collection</h3>
      <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
        {runways.map((runway) => (
          <RunwayCard key={runway.id} id={runway.id} image={runway.image} />
        ))}
      </div>
    </section>
  );
}

export default RunwayDetail;
