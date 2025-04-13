import { z } from "zod";

export const runwaySchema = z.object({
  brandId: z.string({
    required_error: "Brand is required",
  }),
  collectionType: z.string({
    required_error: "Collection is required",
  }),
  year: z.number({
    required_error: "Year is required",
  }),
  youtubeLink: z.string().url("Please enter a valid YouTube URL"),
  designerId: z.string({
    required_error: "Designer is required",
  }),
  description: z.string().optional(),
  images: z
    .instanceof(File, { message: "Please upload valid image files" })
    .array()
    .min(1, "Please upload at least one image"),
});

export type RunwayFormData = z.infer<typeof runwaySchema>;
