import type en from "@/locales/en.json";

/** مفاتيح نصوص شبكة الخدمات — مقيّدة بملف الترجمة */
export type ServicesGridKey = keyof typeof en.servicesGrid;

export interface ServiceItem {
  id: string;
  titleKey: ServicesGridKey;
  descKey: ServicesGridKey;
  image: string;
  path?: string;
}

export interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  learnMoreText: string;
  path?: string;
  isAr: boolean;
}
