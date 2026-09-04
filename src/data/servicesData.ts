import img1 from "@/assets/photo_2026-08-10_12-23-39.webp";
import img2 from "@/assets/pro.webp";
import img3 from "@/assets/pro2.webp";
import type { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "1",
    titleKey: "boxLettersTitle",
    descKey: "boxLettersDesc",
    image: img1,
    path: "/box-letters",
  },
  {
    id: "2",
    titleKey: "signTitle",
    descKey: "signDesc",
    image: img2,
    path: "/sign",
  },
  {
    id: "3",
    titleKey: "digitalPrintingTitle",
    descKey: "digitalPrintingDesc",
    image: img3,
    // path: "/digital-printing",
  },
];
