import { useState, useEffect } from "react";
import type { Language, LanguageProviderProps } from "@/types";
import { LanguageContext } from "./useLanguage";

// استيراد ملفات الترجمة مرّة واحدة فقط هنا
import enTranslations from "@/locales/en.json";
import erTranslations from "@/locales/er.json";

const translations = {
  EN: enTranslations,
  AR: erTranslations,
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem("lang");
    return savedLang === "AR" || savedLang === "EN" ? savedLang : "EN";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  const isRtl = language === "AR";

  // جلب الترجمة المناسبة تلقائياً حسب اللغة الحالية
  const t = translations[language];

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.dir = isRtl ? "rtl" : "ltr";
    htmlElement.lang = language.toLowerCase();
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
