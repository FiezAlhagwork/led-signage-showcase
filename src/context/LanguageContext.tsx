import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Language, LanguageProviderProps } from "@/types";
import {
  LanguageContext,
  LANG_STORAGE_KEY,
  isLanguageSegment,
  segmentToLanguage,
  languageToSegment,
} from "./useLanguage";

// استيراد ملفات الترجمة مرّة واحدة فقط هنا
import enTranslations from "@/locales/en.json";
import erTranslations from "@/locales/er.json";

const translations = {
  EN: enTranslations,
  AR: erTranslations,
};

/**
 * اللغة مشتقّة من الرابط، مو من حالة داخلية:
 * /ar/sign عربي و /en/sign إنجليزي. هيك كل لغة إلها رابط مستقل
 * يقدر جوجل يفهرسه، والزر بيبدّل الرابط بدل ما يبدّل حالة مخفية.
 */
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const segment = pathname.split("/")[1] ?? "";
  const language: Language = isLanguageSegment(segment)
    ? segmentToLanguage(segment)
    : "AR";

  const setLanguage = (lang: Language) => {
    localStorage.setItem(LANG_STORAGE_KEY, lang);

    /* نفس الصفحة بالبادئة التانية: /ar/box-letters ← → /en/box-letters */
    const rest = isLanguageSegment(segment)
      ? pathname.slice(segment.length + 1)
      : pathname;

    navigate(`/${languageToSegment(lang)}${rest === "/" ? "" : rest}`);
  };

  const t = translations[language];

  /*
   * الاتجاه مثبّت على ltr بالقصد: تبديل اللغة بيبدّل النص بس، وترتيب الأقسام
   * ومواضعها بتضل هي هي بالاتجاهين. عرض النص العربي بينضبط باتجاه الفقرة
   * (unicode-bidi: plaintext بـindex.css) مو باتجاه الصفحة.
   */
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.dir = "ltr";
    htmlElement.lang = languageToSegment(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
