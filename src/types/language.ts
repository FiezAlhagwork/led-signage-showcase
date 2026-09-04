import type { ReactNode } from "react";
import type enTranslations from "@/locales/en.json";

export type Language = "EN" | "AR";

/** مقطع اللغة كما بيظهر بالرابط: /ar/sign و /en/sign */
export type LanguageSegment = "ar" | "en";

export interface LanguageContextType {
  language: Language;
  /** بيبدّل اللغة عبر تغيير بادئة الرابط مع الحفاظ على الصفحة الحالية */
  setLanguage: (lang: Language) => void;
  isRtl: boolean;
  t: typeof enTranslations;
}

export interface LanguageProviderProps {
  children: ReactNode;
}
