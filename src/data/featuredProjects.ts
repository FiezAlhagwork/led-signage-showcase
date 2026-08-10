import type en from "../locales/en.json";

import img1 from "../assets/pro5.jpg";
import img2 from "../assets/pro2.jpg";
import img3 from "../assets/pro3.jpg";
import img4 from "../assets/pro4.jpg";
import img5 from "../assets/about2.jpg";
import img6 from "../assets/pro7.jpg";

export type ProjectsGridKey = keyof typeof en.projectsGrid;

export interface Project {
  id: string;
  titleKey: ProjectsGridKey;
  categoryKey: ProjectsGridKey;
  image: string;
}

export const featuredProjectsData: Project[] = [
  {
    id: "1",
    titleKey: "card1Title",
    categoryKey: "badgeBoxLetters",
    image: img1,
  },
  {
    id: "2",
    titleKey: "card2Title",
    categoryKey: "badgePrinting",
    image: img2,
  },
  {
    id: "3",
    titleKey: "card3Title",
    categoryKey: "badgePrinting",
    image: img3,
  },
  {
    id: "4",
    titleKey: "card4Title",
    categoryKey: "badgeSigns",
    image: img4,
  },
  {
    id: "5",
    titleKey: "card5Title",
    categoryKey: "badgeSigns",
    image: img5,
  },
  {
    id: "6",
    titleKey: "card6Title",
    categoryKey: "badgePrinting",
    image: img6,
  },
];
