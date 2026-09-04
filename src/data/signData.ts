import img1 from "@/assets/car2.webp";
import img4 from "@/assets/about2.webp";
import img3 from "@/assets/pro5.webp";
import type { SignItem } from "@/types";

/**
 * كل شريحة مربوطة بنصّها عبر contentKey (مو بترتيب المصفوفة).
 * مفتاح "illuminated" موجود بملف الترجمة بس ما إلو صورة لهلق، فما بينعرض.
 */
export const signSlidesData: SignItem[] = [
  { id: 1, image: img1, contentKey: "wayfinding" },
  { id: 3, image: img4, contentKey: "aluminum" },
  { id: 4, image: img3, contentKey: "totem" },
];
