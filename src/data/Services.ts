import img1 from "../assets/pexels-wendywei-13260086.jpg";
import img2 from "../assets/pexels-arts-1685109.jpg";
import img3 from "../assets/pexels-jakubzerdzicki-31357903.jpg";
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