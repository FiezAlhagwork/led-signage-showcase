import type { SeoRoute } from "@/types";

/**
 * عنوان الموقع الكامل — المصدر الوحيد للدومين بكل المشروع:
 * canonical · og:url · hreflang · sitemap.xml · robots.txt · JSON-LD.
 *
 * لما تجيب الدومين الحقيقي غيّر هالسطر بس، وشغّل `npm run seo:files`
 * لإعادة توليد sitemap.xml و robots.txt. بلا شرطة مائلة بالآخر.
 */
export const SITE_URL = "https://example.com";

/** صورة معاينة المشاركة (واتساب/فيسبوك) — 1200×630 داخل public/ */
export const OG_IMAGE_PATH = "/og-image.jpg";

/** خريطة مسارات الموقع لمفاتيح نصوص الـSEO — يقرأها المكوّن وسكربت الـsitemap معاً */
export const seoRoutes: SeoRoute[] = [
  { path: "/", pageKey: "home", priority: "1.0" },
  { path: "/gallery", pageKey: "gallery", priority: "0.9" },
  { path: "/box-letters", pageKey: "boxLetters", priority: "0.9" },
  { path: "/sign", pageKey: "sign", priority: "0.9" },
  { path: "/communication", pageKey: "contact", priority: "0.8" },
  { path: "/about-us", pageKey: "about", priority: "0.6" },
  {
    path: "/digital-printing",
    pageKey: "digitalPrinting",
    priority: "0.7",
    unlisted: true,
  },
];
