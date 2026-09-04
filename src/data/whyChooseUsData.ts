import { Clock, ShieldCheck, TrendingUp, Layers } from "lucide-react";
import type { WhyChooseUsItem } from "@/types";


export const whyChooseUsCards: WhyChooseUsItem[] = [
  { id: "1", icon: Clock, cardKey: "card1" },
  { id: "2", icon: ShieldCheck, cardKey: "card2" },
  {
    id: "4",
    icon: TrendingUp,
    cardKey: "card4",
    featured: true,
    spanClass: "lg:row-span-2",
  },
  { id: "3", icon: Layers, cardKey: "card3", spanClass: "lg:col-span-2" },
];
