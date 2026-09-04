import type { Project } from "@/types";

import img1 from "@/assets/pro5.webp";
import img2 from "@/assets/pro2.webp";
import img3 from "@/assets/pro3.webp";
import img4 from "@/assets/pro4.webp";
import img5 from "@/assets/about2.webp";
import img6 from "@/assets/car2.webp";

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
