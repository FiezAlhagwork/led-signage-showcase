/**
 * تحويل صور المشروع إلى WebP.
 *
 * يمشي على src/assets ويحوّل كل png/jpg/jpeg إلى webp بنفس الاسم، ثم يحذف الأصل.
 * آمن للتكرار: أي صورة محوَّلة أصلاً ما بينعاد تحويلها.
 *
 *   npm run images:webp
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ASSETS_DIR = path.join(process.cwd(), "src", "assets");
const SOURCE_EXT = /\.(png|jpe?g)$/i;

/** أعرض حاوية بالموقع 1700px والمودال المكبّر 1152px — 1920 يغطّيهن مع هامش للشاشات عالية الكثافة */
const MAX_WIDTH = 1920;

const WEBP_OPTIONS = {
  quality: 82,
  /** كل صور PNG بالمشروع فيها شفافية — هون بتنحفظ قناة alpha بكامل دقتها */
  alphaQuality: 100,
  effort: 6,
};

const kb = (bytes) => Math.round(bytes / 1024);
const pct = (before, after) => Math.round((1 - after / before) * 100);

const convert = async (fileName) => {
  const sourcePath = path.join(ASSETS_DIR, fileName);
  const targetPath = path.join(ASSETS_DIR, fileName.replace(SOURCE_EXT, ".webp"));

  const before = (await fs.stat(sourcePath)).size;

  const info = await sharp(sourcePath)
    // يطبّق اتجاه EXIF قبل ما تنمسح البيانات الوصفية وقت الكتابة
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp(WEBP_OPTIONS)
    .toFile(targetPath);

  const after = (await fs.stat(targetPath)).size;
  await fs.unlink(sourcePath);

  return { fileName, before, after, width: info.width, height: info.height };
};

const main = async () => {
  const entries = await fs.readdir(ASSETS_DIR);
  const sources = entries.filter((f) => SOURCE_EXT.test(f)).sort();

  if (sources.length === 0) {
    console.log("ما في صور للتحويل — كل شي بصيغة webp أصلاً.");
    return;
  }

  console.log(`تحويل ${sources.length} صورة إلى WebP (حد أقصى ${MAX_WIDTH}px عرضاً)\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  const grew = [];

  for (const fileName of sources) {
    const r = await convert(fileName);
    totalBefore += r.before;
    totalAfter += r.after;
    if (r.after >= r.before) grew.push(r.fileName);

    const size = `${r.width}x${r.height}`.padEnd(11);
    console.log(
      `  ${String(kb(r.before)).padStart(5)}KB → ${String(kb(r.after)).padStart(5)}KB` +
        `  ${String(pct(r.before, r.after) + "%").padStart(5)}  ${size}  ${r.fileName}`,
    );
  }

  console.log(
    `\nالمجموع: ${kb(totalBefore)}KB → ${kb(totalAfter)}KB ` +
      `(توفير ${pct(totalBefore, totalAfter)}% — ${kb(totalBefore - totalAfter)}KB)`,
  );

  if (grew.length > 0) {
    console.log(`\nتنبيه — طلع حجمها أكبر من الأصل:\n  ${grew.join("\n  ")}`);
  }
};

await main();
