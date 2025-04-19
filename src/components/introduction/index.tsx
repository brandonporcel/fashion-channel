import { Dot, Github } from "lucide-react";
import { StylerIcon } from "@/assets/icons";
import Link from "next/link";

export default function Introduction() {
  return (
    <section className="w-full bg-blue-500 text-white">
      <div className="border-b border-white/30">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          <nav className="flex gap-4 text-sm font-semibold">
            <a href="#runways" className="hover:text-yellow-400">
              Runways
            </a>
            <Dot />
            <a href="#designers" className="hover:text-yellow-400">
              Designers
            </a>
            <Dot />
            <a href="#" className="hover:text-yellow-400">
              Brands
            </a>
            <Dot />
            <Link href="/critics" className="hover:text-yellow-400">
              Critics
            </Link>
            <Dot />
            <Link href="/unfound" className="hover:text-yellow-400">
              Unfound runywas
            </Link>
            <Dot />
          </nav>

          <div className="flex gap-4">
            <a
              href="https://github.com/brandonporcel/fashion-channel"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="cursor-pointer hover:text-yellow-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center text-center py-16 px-6 md:px-12">
        <div className="flex items-center gap-4 mb-6">
          <StylerIcon
            className="h-24 w-24 fill-yellow-400 cursor-pointer"
            aria-label="Styler Icon"
          />

          <h2 className="text-3xl font-bold leading-tight hover:text-yellow-400 cursor-pointer">
            Backstage & full show
          </h2>
        </div>

        <div className="text-base leading-relaxed text-white max-w-3xl">
          <p className="mb-4">
            Explore listings of fashion designers, iconic brands, and runway
            shows. A space to discover, contribute, and share the most exciting
            moments in fashion — all in one place.
          </p>
        </div>
      </div>
    </section>
  );
}
