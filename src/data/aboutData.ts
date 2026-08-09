import aboutMainImage from "../assets/pexels-karola-g2-6224.jpg";

export interface CounterItemData {
  id: string;
  end: number;
  suffix: string;
  titleKey: string;
}

export interface ReferenceItem {
  id: string;
  key: string;
}

export interface AboutData {
  mainImage: string;
  counters: CounterItemData[];
  references: ReferenceItem[];
}

export const  aboutData = {
  mainImage: aboutMainImage,
  counters: [
    { id: "1", end: 500, suffix: "k+", titleKey: "happyClients" },
    { id: "2", end: 1200, suffix: "+", titleKey: "completedProjects" },
    { id: "3", end: 5, suffix: "", titleKey: "starRating" },
    { id: "4", end: 20, suffix: "+", titleKey: "expertTeam" },
  ],

};