import img1 from "@/assets/about5.webp";
import type { AboutSectionData } from "@/types";

/** كل ميزة مربوطة بنصّها عبر featureKey (مو بترتيب المصفوفة) */
export const aboutSectionData: AboutSectionData = {
  image: img1,
  ctaPath: "/about-us",
  highlights: [
    { id: "1", featureKey: "feature1" },
    { id: "2", featureKey: "feature2" },
    { id: "3", featureKey: "feature3" },
    { id: "4", featureKey: "feature4" },
  ],
};
