export interface Designer {
  id: string;
  name: string;
  lastName: string;
  slug: string;
  popularity: number;
  validated: boolean;
  thumbnailUrl: string;
  description?: string;
}
