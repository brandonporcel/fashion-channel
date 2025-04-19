import { CollectionType } from "@/data/collection.data";
import { Brand } from "./brand.types";
import { Designer } from "./designer.types";

export interface Runway {
  id: number;
  date: string;
  link: string;
  slug: string;
  description: string;
  collectionType: CollectionType;
  brandId: string;
  popularity: number;
  year: number;
  brand: Brand;
  designer: Designer;
  images: RunwayImage[];
}

export interface RunwayImage {
  id: string;
  url: string;
  publicId: string;
  format: string;
  width: number;
  height: number;
}
