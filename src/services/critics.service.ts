import { Critic } from "@/types/critic.types";

export async function fetchCritics(): Promise<Critic[]> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/critics`;
  return fetch(url, { cache: "no-store" }).then((res) => res.json());
}
