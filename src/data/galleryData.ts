import type { GalleryItem } from "@/types";

import img1 from "@/assets/almethaq.webp";
import img2 from "@/assets/pro2.webp";
import img3 from "@/assets/pro3.webp";
import img4 from "@/assets/km1.webp";
import img5 from "@/assets/about2.webp";
import img6 from "@/assets/km2.webp";
import img7 from "@/assets/pro7.webp";
import img8 from "@/assets/about5.webp";
import img9 from "@/assets/photo_2026-08-10_12-23-39.webp";
import img10 from "@/assets/km5.webp";
import img11 from "@/assets/pro10.webp";
import img12 from "@/assets/pro11.webp";
import img13 from "@/assets/pro12.webp";

/**
 * صور معرض الأعمال.
 *
 * لإضافة صورة: حطّها بـsrc/assets، استوردها فوق، وضيف مدخل هون.
 * ما في داعي تلمس ملفات الترجمة — نص الـalt بيجي من التصنيف.
 * التصنيفات المتاحة: badgeBoxLetters · badgeSigns · badgePrinting
 *
 * ملاحظة: صور المخزون (pexels / Adobe Stock) المستعملة كخلفيات بصفحة
 * الطباعة الرقمية مستثناة عن قصد — هي مو من تنفيذ الشركة.
 */
export const galleryItems: GalleryItem[] = [
  { id: "1", image: img1, categoryKey: "badgeBoxLetters" },
  { id: "2", image: img2, categoryKey: "badgePrinting" },
  { id: "3", image: img3, categoryKey: "badgePrinting" },
  { id: "4", image: img4, categoryKey: "badgeSigns" },
  { id: "5", image: img5, categoryKey: "badgeSigns" },
  { id: "6", image: img6, categoryKey: "badgePrinting" },
  { id: "7", image: img7, categoryKey: "badgeSigns" },
  { id: "8", image: img8, categoryKey: "badgeSigns" },
  { id: "9", image: img9, categoryKey: "badgeBoxLetters" },
  { id: "10", image: img10, categoryKey: "badgePrinting" },
  { id: "10", image: img11, categoryKey: "badgePrinting" },
  { id: "10", image: img12, categoryKey: "badgePrinting" },
  { id: "10", image: img13, categoryKey: "badgePrinting" }
];
