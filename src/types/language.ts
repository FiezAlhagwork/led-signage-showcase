import type { ReactNode } from "react";
import type enTranslations from "@/locales/en.json";

export type Language = "EN" | "AR";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRtl: boolean;
  t: typeof enTranslations;
}

export interface LanguageProviderProps {
  children: ReactNode;
}
