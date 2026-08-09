import img3 from "../assets/pexels-theshuttervision-9660933.jpg";
import img2 from "../assets/pexels-thngocbich-2362392.jpg";
import img1 from "../assets/pexels-leander-239926047-14282834.jpg";
import img6 from "../assets/pexels-sevenstormphotography-946312.jpg";
import img5 from "../assets/pexels-introspectivedsgn-9538611.jpg";
import img4 from "../assets/pexels-tima-miroshnichenko-5560196.jpg";
import type en from "../locales/en.json";

export type ProjectsGridKey = keyof typeof en.projectsGrid;

export interface Project {
  id: string;
  titleKey: ProjectsGridKey;
  categoryKey: ProjectsGridKey;
  image: string;
  path: string;
}

export const featuredProjectsData: Project[] = [
  {
    id: "1",
    titleKey: "card1Title",
    categoryKey: "badgeBoxLetters",
    image: img1 ,
    path: "/projects/restaurant-sign",
  },
  {
    id: "2",
    titleKey: "card2Title",
    categoryKey: "badgeSigns",
    image: img2,
    path: "/projects/coffee-shop",
  },
  {
    id: "3",
    titleKey: "card3Title",
    categoryKey: "badgeBoxLetters",
    image: img3,
    path: "/projects/pharmacy-sign",
  },
  {
    id: "4",
    titleKey: "card4Title",
    categoryKey: "badgePrinting",
    image: img4,
    path: "/projects/clothing-store",
  },
  {
    id: "5",
    titleKey: "card5Title",
    categoryKey: "badgeSigns",
    image: img5,
    path: "/projects/hotel-entrance",
  },
  {
    id: "6",
    titleKey: "card6Title",
    categoryKey: "badgeBoxLetters",
    image: img6,
    path: "/projects/corporate-office",
  },
];