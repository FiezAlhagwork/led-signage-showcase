import aboutMainImage from "@/assets/pro5.webp";
import type { AboutData } from "@/types";

export const aboutPageData: AboutData = {
  mainImage: aboutMainImage,
  counters: [
    { id: "1", end: 500, suffix: "k+", titleKey: "happyClients" },
    { id: "2", end: 1200, suffix: "+", titleKey: "completedProjects" },
    { id: "3", end: 5, suffix: "", titleKey: "starRating" },
    { id: "4", end: 20, suffix: "+", titleKey: "expertTeam" },
  ],
};
