"use server";
import { revalidatePath } from "next/cache";

export async function createRunway(formData: FormData) {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL + "/api/runways";
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      console.log("response", response);
      const errorMessage = await response.text();
      console.error("Error creating runway:", errorMessage);
      throw new Error(`API error: ${response.status} - ${errorMessage}`);
    }

    revalidatePath("/runways");
    return { success: true };
  } catch (error) {
    console.error("Error creating runway:", error);
    return { error: "Failed to create runway" };
  }
}
