import type en from "@/locales/en.json";

/** مفاتيح نصوص شرائح صفحة اللوحات — مقيّدة بملف الترجمة */
export type SignSlideKey = keyof typeof en.signSection.slides;

export interface SignItem {
  id: number;
  image: string;
  /** مفتاح النص المرتبط بهالصورة — بديل الربط بترتيب المصفوفة */
  contentKey: SignSlideKey;
}
