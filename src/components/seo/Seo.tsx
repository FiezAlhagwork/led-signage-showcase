import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  useLanguage,
  isLanguageSegment,
  languageToSegment,
} from "@/context/useLanguage";
import { SITE_URL, OG_IMAGE_PATH, seoRoutes } from "@/data/seoData";
import { setMeta, setLink, setAlternateLinks } from "./documentMeta";

/**
 * بيضبط عنوان الصفحة ووسوم الوصف والمشاركة والروابط البديلة
 * حسب المسار واللغة الحالية. ما بيرندر أي شي — بيعدّل <head> بس.
 */
const Seo = () => {
  const { pathname } = useLocation();
  const { t, language, isRtl } = useLanguage();

  useEffect(() => {
    const segment = pathname.split("/")[1] ?? "";
    /* المسار بلا بادئة اللغة — هو المفتاح اللي بتخزنه seoRoutes */
    const basePath = isLanguageSegment(segment)
      ? pathname.slice(segment.length + 1) || "/"
      : pathname;

    const route = seoRoutes.find((item) => item.path === basePath);
    const page = route ? t.seo.pages[route.pageKey] : t.seo.pages.notFound;

    const siteName = t.seo.siteName;
    const fullTitle = `${page.title} | ${siteName}`;
    const currentSegment = languageToSegment(language);
    const canonicalUrl = `${SITE_URL}/${currentSegment}${
      basePath === "/" ? "" : basePath
    }`;

    document.title = fullTitle;

    setMeta("name", "description", page.description);
    setLink("canonical", canonicalUrl);

    /* مسار غير معروف = صفحة 404: ممنوع تنفهرس، بس خلي الزاحف يتبع روابطها */
    setMeta("name", "robots", route ? "index, follow" : "noindex, follow");

    /* نسختا اللغة لنفس الصفحة — بينحطّوا بس لصفحة معروفة */
    setAlternateLinks(
      route
        ? [
            { hreflang: "ar", href: `${SITE_URL}/ar${basePath === "/" ? "" : basePath}` },
            { hreflang: "en", href: `${SITE_URL}/en${basePath === "/" ? "" : basePath}` },
            {
              hreflang: "x-default",
              href: `${SITE_URL}/ar${basePath === "/" ? "" : basePath}`,
            },
          ]
        : [],
    );

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:site_name", siteName);
    setMeta("property", "og:image", `${SITE_URL}${OG_IMAGE_PATH}`);
    setMeta("property", "og:locale", isRtl ? "ar_SY" : "en_US");
    setMeta("property", "og:type", basePath === "/" ? "website" : "article");

    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", page.description);
    setMeta("name", "twitter:image", `${SITE_URL}${OG_IMAGE_PATH}`);
  }, [pathname, t, language, isRtl]);

  return null;
};

export default Seo;
