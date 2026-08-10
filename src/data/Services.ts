import img1 from "../assets/photo_2026-08-10_12-23-39.jpg";
import img2 from "../assets/pro.jpg";
import img3 from "../assets/pro2.jpg";
import type en from "../locales/en.json";

export type ServicesGridKey = keyof typeof en.servicesGrid;

export interface ServiceItem {
  id: string;
  titleKey: ServicesGridKey;
  descKey: ServicesGridKey;
  image: string;
  path: string;
}

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
    path: "/digital-printing",
  },
];