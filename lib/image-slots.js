import { SERVICES } from "./renofix-data";

// Section image slots. Each is a single, replaceable image with a target ratio.
export const IMAGE_SLOTS = [
  {
    key: "hero",
    label: "Homepage hero background",
    ratio: "16 / 9",
    hint: "Wide landscape. Recommended 1920×1080 or larger.",
  },
  ...SERVICES.map((s) => ({
    key: `service:${s.slug}`,
    label: `${s.name} — page banner`,
    ratio: "16 / 9",
    hint: "Wide landscape. Recommended 1920×1080.",
  })),
];

export const GALLERY_RATIO = "4 / 3";
