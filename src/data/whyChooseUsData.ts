export interface WhyChooseUsItem {
    id: string;
    icon: string;
    isHighlighted?: boolean;
  }
  
  export const whyChooseUsData: WhyChooseUsItem[] = [
    { id: "1", icon: "👨‍🏫" },
    { id: "2", icon: "🚀" },
    { id: "3", icon: "🎯", isHighlighted: true },
    { id: "4", icon: "🕒" }
  ];