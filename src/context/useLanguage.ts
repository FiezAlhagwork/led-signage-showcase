import { createContext, useContext } from "react";
import type { LanguageContextType } from "@/types";

/*
 * كائن الـcontext والخطّاف بملف مستقل عن الـProvider عن قصد:
 * لو تصدّروا من نفس ملف المكوّن، Fast Refresh بينكسر وقت التطوير
 * (قاعدة react-refresh/only-export-components).
 */
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
