import type en from "@/locales/en.json";

/** مفاتيح عدّادات صفحة "من نحن" — مقيّدة بملف الترجمة */
export type AboutCounterKey = keyof typeof en.aboutru.counters;

/** مفاتيح مزايا قسم "من نحن" بالصفحة الرئيسية (feature1 … feature4) */
export type AboutFeatureKey = Extract<keyof typeof en.about, `feature${number}`>;

export interface AboutSectionHighlight {
  id: string;
  /** مفتاح نص الميزة — بديل الربط بترتيب المصفوفة */
  featureKey: AboutFeatureKey;
}

export interface AboutSectionData {
  image: string;
  ctaPath: string;
  highlights: AboutSectionHighlight[];
}

export interface CounterItemData {
  id: string;
  end: number;
  suffix: string;
  titleKey: AboutCounterKey;
}

export interface AboutData {
  mainImage: string;
  counters: CounterItemData[];
}

export interface CounterItemProps {
  item: CounterItemData;
  title: string;
}
