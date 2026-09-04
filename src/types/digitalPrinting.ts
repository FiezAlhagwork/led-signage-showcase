import type en from "@/locales/en.json";

/** مفاتيح نصوص شرائح صفحة الطباعة الرقمية — مقيّدة بملف الترجمة */
export type DigitalPrintingSlideKey = keyof typeof en.digitalPrinting.slides;

export interface DigitalPrintingSlide {
  id: number;
  image: string;
  secondaryImage: string;
  /** مفتاح النص المرتبط بهالشريحة — بديل الربط بترتيب المصفوفة */
  contentKey: DigitalPrintingSlideKey;
}
