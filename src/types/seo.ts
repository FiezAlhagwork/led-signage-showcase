import type en from "@/locales/en.json";

/** مفاتيح صفحات الـSEO — مقيّدة بملف الترجمة */
export type SeoPageKey = keyof typeof en.seo.pages;

export interface SeoRoute {
  path: string;
  pageKey: SeoPageKey;
  /** أولوية الصفحة داخل sitemap.xml (0.0 – 1.0) */
  priority: string;
  /**
   * صفحة غير مربوطة بأي رابط بالموقع (مخفية عن التنقّل عن قصد).
   * بتضل تشتغل ولها عنوان ووصف، بس ما بتدخل sitemap.xml.
   */
  unlisted?: boolean;
}
