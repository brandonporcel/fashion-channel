import { Quote } from "@/types/quote.types";

export async function getRandomQuote(): Promise<Quote> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/quotes/random`;
  return await fetch(url, { cache: "no-store" }).then((res) => res.json());
}
