import type en from "@/locales/en.json";

/**
 * تصنيفات المعرض — مشتقّة من مفاتيح الشارات الموجودة أصلاً بشبكة المشاريع،
 * فما بنحتاج مفاتيح ترجمة جديدة لكل صورة تنضاف.
 */
export type GalleryCategoryKey = Extract<
  keyof typeof en.projectsGrid,
  `badge${string}`
>;

export interface GalleryItem {
  id: string;
  image: string;
  /** نص الـalt بيجي من t.projectsGrid[categoryKey] */
  categoryKey: GalleryCategoryKey;
}
