import { UnfoundRunway } from "@/types/unfound.types";

export async function fetchUnfoundRunways(): Promise<UnfoundRunway[]> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/unfound-runways`;
  return fetch(url, { cache: "no-store" }).then((res) => res.json());
}
