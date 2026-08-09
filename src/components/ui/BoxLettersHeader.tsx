import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";



function BoxLettersHeader() {
  const navigate = useNavigate();
  const { language ,setLanguage } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 bg-[#0F0C1B]/90 backdrop-blur-md border-b border-slate-800/60">
      <button
        type="button"
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-slate-200 hover:text-white text-sm font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{language === "AR" ? "العودة للرئيسية" : "Back to Home"}</span>
      </button>

      <div className="flex items-center gap-1 bg-slate-900/80 border border-slate-700/80 rounded-full p-1">
        <button
          type="button"
          onClick={() => setLanguage("EN")}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
            language === "EN"
              ? "bg-orange-500 text-white"
              : "text-slate-300 hover:text-white"
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLanguage("AR")}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
            language === "AR"
              ? "bg-orange-500 text-white"
              : "text-slate-300 hover:text-white"
          }`}
        >
          AR
        </button>
      </div>
    </div>
  );
} 

export default BoxLettersHeader