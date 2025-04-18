"use server";

export async function getBrands() {
  return await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/brands").then(
    (res) => res.json()
  );
}

export async function createBrand(name: string) {
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/brands";
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  return res.json();
}
