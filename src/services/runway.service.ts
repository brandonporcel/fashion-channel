import { Runway } from "@/types/runway";

export async function fetchTopRunways(): Promise<Runway[]> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/runways?limit=5&sort=popularity`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API error: ${res.status} - ${errorText}`);
  }

  return res.json();
}
