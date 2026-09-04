import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ScrollTop() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label={t.a11y.scrollTop}
      className={`
        fixed bottom-6 right-6 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full
        bg-primary text-white
        shadow-lg
        transition-all duration-300
        hover:scale-110 hover:bg-primary/50
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }
      `}
    >
      <ArrowUp size={20} strokeWidth={2} />
    </button>
  );
}
