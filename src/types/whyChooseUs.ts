import type { LucideIcon } from "lucide-react";
import type en from "@/locales/en.json";

/** مفاتيح بطاقات القسم — مشتقّة من ملف الترجمة (card1 … card4) */
export type WhyChooseUsCardKey = Extract<
  keyof typeof en.whyChooseUs,
  `card${number}`
>;

export interface WhyChooseUsItem {
  id: string;
  icon: LucideIcon;
  cardKey: WhyChooseUsCardKey;
  /** البطاقة المميّزة الكبيرة */
  featured?: boolean;
  /** كلاس امتداد الشبكة — بينحط على StaggerItem لأنه الابن المباشر للـgrid */
  spanClass?: string;
}

export interface WhyChooseUsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  /** فقرة إضافية اختيارية (البطاقة المميّزة الكبيرة فقط) */
  subDescription?: string;
  /** البطاقة المميّزة الكبيرة (أيقونة/عنوان أكبر، padding أوسع، دائرة توهّج خلفية) */
  featured?: boolean;
}
