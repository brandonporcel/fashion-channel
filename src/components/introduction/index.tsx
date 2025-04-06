import { StylerIcon } from "@/assets/icons";
import { Dot, Github } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Introduction() {
  return (
    <section className="w-full bg-blue-500 text-white">
      <div className="border-b border-white/30">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          <nav className="flex gap-4 text-sm font-semibold">
            <a href="#" className="hover:text-yellow-400">
              Designers
            </a>
            <Dot />
            <a href="#" className="hover:text-yellow-400">
              Runways
            </a>
            <Dot />
            <a href="#" className="hover:text-yellow-400">
              Brands
            </a>
            <Dot />
            <a href="#" className="hover:text-yellow-400">
              Critics
            </a>
            <Dot />
            <a href="#" className="hover:text-yellow-400">
              Unfound runywas
            </a>
            <Dot />
            <a href="#" className="hover:text-yellow-400">
              Quotes
            </a>
          </nav>
          <div className="flex gap-4">
            <Github className="cursor-pointer hover:text-yellow-400" />
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

      <div className="bg-pink-500 text-white py-8">
        <div className="flex w-full items-center space-x-1 max-w-screen-lg mx-auto">
          <Input
            placeholder="Search a designer or runway..."
            type="text"
            className="placeholder:text-white"
          ></Input>
          <Button className="cursor-pointer">Search</Button>
        </div>
      </div>
    </section>
  );
}
