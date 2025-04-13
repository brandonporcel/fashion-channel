"use server";

export async function getDesigners() {
  return await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/designers").then(
    (res) => res.json()
  );
}
