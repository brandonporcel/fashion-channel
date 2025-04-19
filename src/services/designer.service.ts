import { Designer } from "@/types/designer.types";

type FetchDesignersParams = {
  limit?: number;
  sort?: string;
};

export async function fetchDesigners(
  params?: FetchDesignersParams
): Promise<Designer[]> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/designers`;

  const queryObject: Record<string, string> = {};
  if (params?.limit !== undefined) queryObject.limit = params.limit.toString();
  if (params?.sort !== undefined) queryObject.sort = params.sort;

  const queryParams = new URLSearchParams(queryObject);
  const fullUrl = `${url}?${queryParams.toString()}`;

  const res = await fetch(fullUrl, { cache: "no-store" });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API error: ${res.status} - ${errorText}`);
  }

  return res.json();
}
