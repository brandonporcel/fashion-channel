"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import { Runway } from "@/types/runway.types";
import { fetchRunways } from "@/services/runway.service";
import RunwayCard from "@/components/runway-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function RunwaysList() {
  const [runways, setRunways] = useState<Runway[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRunways = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchRunways();
        setRunways(data);
      } catch (err: any) {
        setError("Hubo un error al obtener los desfiles de moda");
        console.error("Error fetching runways:", err);
      } finally {
        setLoading(false);
      }
    };

    getRunways();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error ocurred</div>;
  }

  return (
    <main className="mx-auto pt-10 py-4 sm:px-8 md:px-16 lg:px-60 xl:px-80 flex flex-col">
      <Header title="All Runways" subtitle="" />

      <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
        {runways.map((runway) => (
          <RunwayCard key={runway.id} runway={runway} />
        ))}
        {runways.length === 0 && (
          <p className="text-gray-500">No runways found</p>
        )}
      </div>

      <footer className="w-full pt-10 py-4">
        <Button asChild variant={"outline"} className="w-full">
          <Link href={"runways/add"}>Add new Runway</Link>
        </Button>
        <Button asChild className="w-full mt-2">
          <Link href={"/"}>Go home</Link>
        </Button>
      </footer>
    </main>
  );
}

export default RunwaysList;
