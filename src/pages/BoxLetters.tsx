/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, Sun, Moon, ImageOff } from "lucide-react";

import { boxLetterProducts } from "@/data/boxLettersData";
import { useLanguage } from "@/context/useLanguage";
import type { BoxLetterProduct } from "@/types";

const BoxLettersShowcase = () => {
  const { t } = useLanguage();
  const total = boxLetterProducts.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIlluminated, setIsIlluminated] = useState(
    boxLetterProducts[0].defaultIlluminated,
  );
  const [imageFailed, setImageFailed] = useState(false);

  const isScrollingRef = useRef(false);

  const currentProduct: BoxLetterProduct = boxLetterProducts[currentIndex];

  const productText = t.boxLetters[currentProduct.id];

  useEffect(() => {
    setIsIlluminated(boxLetterProducts[currentIndex].defaultIlluminated);
    setImageFailed(false);
  }, [currentIndex]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrollingRef.current) return;

      if (e.deltaY > 0) {
        setCurrentIndex((prev) => (prev + 1) % total);
      } else if (e.deltaY < 0) {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
      }

      isScrollingRef.current = true;
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [total]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section
      id="box-letters-showcase"
      className="relative w-full h-screen bg-dark-bg text-white overflow-hidden select-none"
    >
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT CANVAS: Product Image & Interactive Illumination Toggle */}
        <div className="relative h-full flex items-center justify-center overflow-hidden bg-slate-950 border-r border-slate-800/60 select-none">
          <div
            className={`absolute inset-0 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.15)_0%,transparent_70%)] ${
              isIlluminated ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="relative z-10 w-full max-w-lg h-80 sm:h-96 flex items-center justify-center p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center justify-center"
              >
                <button
                  type="button"
                  onClick={() => setIsIlluminated(!isIlluminated)}
                  className="relative group cursor-pointer bg-transparent border-0 p-0 focus:outline-none"
                  aria-label={isIlluminated ? t.turnOffLights : t.turnOnLights}
                  title={isIlluminated ? t.turnOffLights : t.turnOnLights}
                >
                  {imageFailed ? (
                    <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 text-slate-500">
                      <ImageOff className="w-10 h-10" />
                      <span className="text-xs text-center px-4">
                        {isIlluminated
                          ? currentProduct.images.on
                          : currentProduct.images.off}
                      </span>
                    </div>
                  ) : (
                    /*
                     * الصورتان (مطفي/مضيء) محمَّلتان معاً ودايماً بالـDOM، والتبديل بينهن
                     * مجرد تلاشٍ بالـopacity — فما في أي تحميل صورة لحظة الضغط على الزر.
                     */
                    <div className="relative z-10 w-64 h-64 sm:w-96 sm:h-96">
                      <img
                        src={currentProduct.images.off}
                        alt={productText.title}
                        onError={() => setImageFailed(true)}
                        className={`absolute inset-0 w-full h-full object-contain drop-shadow-xl brightness-95 transition-opacity duration-500 ease-in-out ${
                          isIlluminated ? "opacity-0" : "opacity-100"
                        }`}
                      />
                      <img
                        src={currentProduct.images.on}
                        alt=""
                        onError={() => setImageFailed(true)}
                        className={`absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_35px_rgba(251,146,60,0.4)] brightness-110 transition-opacity duration-500 ease-in-out ${
                          isIlluminated ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsIlluminated(!isIlluminated)}
                  className="absolute -bottom-2 -right-2 sm:bottom-0 sm:right-0 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-white text-slate-900 shadow-lg border border-slate-200 hover:scale-105 transition-transform"
                  aria-label={isIlluminated ? t.turnOffLights : t.turnOnLights}
                  title={isIlluminated ? t.turnOffLights : t.turnOnLights}
                >
                  {isIlluminated ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5 text-orange-500" />
                  )}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-6 left-6 z-20 flex flex-col items-center gap-2 bg-slate-950/80 backdrop-blur-md p-2 rounded-2xl border border-slate-800 shadow-xl">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              aria-label={t.prevSlide}
              title={t.prevSlide}
            >
              <ChevronUp className="w-6 h-6" />
            </button>

            <span className="text-xs font-mono text-orange-400 font-semibold my-0.5 px-1">
              {`${String(currentIndex + 1).padStart(2, "0")}/${String(total).padStart(2, "0")}`}
            </span>

            <button
              onClick={handleNext}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              aria-label={t.nextSlide}
              title={t.nextSlide}
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative h-full flex items-center justify-center p-8 sm:p-12 lg:p-16 bg-[#0F0C1B]">
          <div className="max-w-xl w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 80 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  {productText.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
                  {productText.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxLettersShowcase;
