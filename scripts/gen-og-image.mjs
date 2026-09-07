/**
 * توليد public/og-image.jpg — صورة معاينة المشاركة (واتساب/فيسبوك/تويتر).
 *
 * صورة مشروع 1200×630 ← تدرّج داكن من الأسفل ← الشعار فوقه.
 * بلا نص مرسوم عن قصد: رسم العربي داخل SVG عبر sharp بيعتمد على خطوط النظام
 * وبيكسر تشكيل الحروف. العنوان والوصف بيجوا من وسوم og: وواتساب بيعرضهن تحت الصورة.
 *
 *   npm run seo:og      (أعِد تشغيله لو تغيّر الشعار أو الصورة الأساسية)
 */
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;

const SOURCE_IMAGE = "src/assets/pro5.webp";
const LOGO_IMAGE = "src/assets/alnoor_icon.webp";
const OUTPUT = "public/og-image.jpg";

/**
 * تدرّج داكن بالنصف السفلي حتى يبان الشعار مهما كانت الصورة فاتحة.
 * اللون لازم يطابق --color-dark-bg بـsrc/index.css.
 */
const gradient = Buffer.from(
  `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
     <defs>
       <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
         <stop offset="35%" stop-color="#16112E" stop-opacity="0"/>
         <stop offset="100%" stop-color="#16112E" stop-opacity="0.92"/>
       </linearGradient>
     </defs>
     <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#fade)"/>
   </svg>`,
);

/* الشعار مربّع، فالمقاس بينضبط بالارتفاع — بالعرض كان بيصير بلوك 300×300 */
const logo = await sharp(LOGO_IMAGE)
  .resize({ height: 130, withoutEnlargement: true })
  .png()
  .toBuffer();

const logoMeta = await sharp(logo).metadata();

const info = await sharp(SOURCE_IMAGE)
  .resize({ width: WIDTH, height: HEIGHT, fit: "cover", position: "centre" })
  .composite([
    { input: gradient, top: 0, left: 0 },
    { input: logo, top: HEIGHT - logoMeta.height - 60, left: 60 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(OUTPUT);

console.log(
  `${OUTPUT} — ${info.width}x${info.height} · ${Math.round(info.size / 1024)}KB`,
);
