"use client";
import Link from "next/link";
import RunwayCard from "../runway-card";
import { fetchTopRunways } from "@/services/runway.service";
import { Runway } from "@/types/runway";
import { useEffect, useState } from "react";

function TopRunways() {
  const [runways, setRunways] = useState<Runway[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRunways = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchTopRunways();
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
    return <div>hubo un error</div>;
  }

  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-4">Top Runways</h2>
        <Link href={"runways"} className="hover:underline">
          See all
        </Link>
      </div>
      <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
        {runways.map((runway) => (
          <RunwayCard
            key={runway.id}
            id={runway.id}
            image={
              "https://assets.vogue.com/photos/67ccafcab701e1e3822f577b/master/w_1920,c_limit/00002-alexander-mcqueen-fall-2025-ready-to-wear-credit-gorunway.jpg"
            }
          />
        ))}
        {runways.length === 0 && (
          <p className="text-gray-500">No runways found</p>
        )}
      </div>
    </section>
  );
}

export default TopRunways;
