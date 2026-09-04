/**
 * توليد public/sitemap.xml و public/robots.txt من src/data/seoData.ts.
 *
 * السكربت بيستورد ملف البيانات نفسه اللي بيستعمله التطبيق (Node بيشيل الأنواع
 * لحاله) — فما في مكانين لنفس قائمة المسارات ولا للدومين، وما بيصير تعارض.
 *
 *   npm run seo:files      (وبينشغّل تلقائياً قبل كل build)
 */
import fs from "node:fs/promises";
import path from "node:path";

const { SITE_URL, seoRoutes } = await import("../src/data/seoData.ts");

const PUBLIC_DIR = path.join(process.cwd(), "public");

if (SITE_URL.endsWith("/")) {
  console.error("SITE_URL لازم يكون بلا شرطة مائلة بالآخر — صلّحه بـsrc/data/seoData.ts");
  process.exit(1);
}

/** الصفحات المخفية عن التنقّل ما بتدخل الـsitemap */
const listedRoutes = seoRoutes.filter((route) => !route.unlisted);
const today = new Date().toISOString().slice(0, 10);

const LANGUAGES = ["ar", "en"];

/** رابط الصفحة بلغة معيّنة: "/" ← /ar ، و"/sign" ← /ar/sign */
const urlFor = (lang, path) => `${SITE_URL}/${lang}${path === "/" ? "" : path}`;

/*
 * كل صفحة بتنكتب مرّة لكل لغة، وكل مدخل بيعلن نسخته المقابلة عبر xhtml:link.
 * هي القناة الأساسية لإخبار جوجل بالنسخ اللغوية — بتشتغل بلا JavaScript
 * على عكس وسوم الـhead، وهاد مهم لأن الموقع بيترسم بالمتصفّح.
 */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${listedRoutes
  .flatMap((route) =>
    LANGUAGES.map(
      (lang) => `  <url>
    <loc>${urlFor(lang, route.path)}</loc>
${LANGUAGES.map(
  (alt) =>
    `    <xhtml:link rel="alternate" hreflang="${alt}" href="${urlFor(alt, route.path)}"/>`,
).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor("ar", route.path)}"/>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    ),
  )
  .join("\n")}
</urlset>
`;

const robots = `# ${SITE_URL}
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

await fs.mkdir(PUBLIC_DIR, { recursive: true });
await fs.writeFile(path.join(PUBLIC_DIR, "sitemap.xml"), sitemap, "utf8");
await fs.writeFile(path.join(PUBLIC_DIR, "robots.txt"), robots, "utf8");

console.log(
  `sitemap.xml — ${listedRoutes.length * LANGUAGES.length} رابط (${listedRoutes.length} مسار × ${LANGUAGES.length} لغة)`,
);
listedRoutes.forEach((r) =>
  console.log(`   ${LANGUAGES.map((l) => urlFor(l, r.path)).join("  ·  ")}`),
);
if (listedRoutes.length !== seoRoutes.length) {
  const hidden = seoRoutes.filter((r) => r.unlisted).map((r) => r.path);
  console.log(`مستثنى (unlisted): ${hidden.join(", ")}`);
}
console.log("robots.txt — تمّ");
