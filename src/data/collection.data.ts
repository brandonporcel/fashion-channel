export const COLLECTIONS = [
  { id: "SS_RTW", name: "Spring Summer" },
  { id: "FW_RTW", name: "Fall Winter" },
  { id: "FALL_COUTURE", name: "Fall Couture" },
  { id: "SPRING_COUTURE", name: "Spring Couture" },
  { id: "COUTURE", name: "Couture" },
  { id: "CAPSULE", name: "Capsule" },
  { id: "RESORT", name: "Resort" },
  { id: "PRE_FALL", name: "Pre Fall" },
  { id: "COLLABORATION", name: "Collaboration" },
  { id: "BRIDAL", name: "Bridal" },
] as const;

export type CollectionType = (typeof COLLECTIONS)[number]["id"];
