import { createContext, useContext } from "react";
import type { Language, LanguageContextType, LanguageSegment } from "@/types";

/*
 * كائن الـcontext والخطّافات بملف مستقل عن الـProvider عن قصد:
 * لو تصدّروا من نفس ملف المكوّن، Fast Refresh بينكسر وقت التطوير
 * (قاعدة react-refresh/only-export-components).
 */

export const LANGUAGE_SEGMENTS: LanguageSegment[] = ["ar", "en"];

export const isLanguageSegment = (value: string): value is LanguageSegment =>
  (LANGUAGE_SEGMENTS as string[]).includes(value);

export const segmentToLanguage = (segment: LanguageSegment): Language =>
  segment === "en" ? "EN" : "AR";

export const languageToSegment = (language: Language): LanguageSegment =>
  language === "EN" ? "en" : "ar";

export const LANG_STORAGE_KEY = "lang";

/** بيقرأ تفضيل اللغة المحفوظ — يُستعمل بس لتحويل الجذر "/" لبادئة مناسبة */
export const readStoredLanguage = (): Language | null => {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  return saved === "AR" || saved === "EN" ? saved : null;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

/**
 * بيحوّل مسار بلا بادئة (مثل "/sign" الموجود بملفات data)
 * لمسار كامل بلغة الصفحة الحالية (مثل "/ar/sign").
 *
 * ملفات `data/` بتضل تخزّن المسار بلا بادئة — البادئة بتنضاف وقت الرندر بس.
 */
export const useLocalizedPath = () => {
  const { language } = useLanguage();
  const segment = languageToSegment(language);

  return (path: string) => `/${segment}${path === "/" ? "" : path}`;
};
