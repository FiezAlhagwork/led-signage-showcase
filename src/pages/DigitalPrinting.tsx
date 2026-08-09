import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { digitalPrintingSlides } from "../data/digitalPrintingData";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

let hasAnimatedDigitalPrinting = false;

const DigitalPrinting: React.FC = () => {
  const { language, t } = useLanguage();
  const isAr = language === "AR";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const isScrolling = useRef(false);
  const touchStartY = useRef<number | null>(null);
  const shouldAnimate = !hasAnimatedDigitalPrinting;

  const slidesContent = [
    t.digitalPrinting?.slides?.slide1,
    t.digitalPrinting?.slides?.slide2,
    t.digitalPrinting?.slides?.slide3,
  ];

  const currentSlideData = digitalPrintingSlides[currentIndex];
  const currentContent = slidesContent[currentIndex];

  const handleNext = () => {
    if (currentIndex < digitalPrintingSlides.length - 1) {
      hasAnimatedDigitalPrinting = true;
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      hasAnimatedDigitalPrinting = true;
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (isScrolling.current) return;

    hasAnimatedDigitalPrinting = true;

    if (e.deltaY > 0) {
      if (currentIndex < digitalPrintingSlides.length - 1) {
        isScrolling.current = true;
        setCurrentIndex((prev) => prev + 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 600);
      }
    } else {
      if (currentIndex > 0) {
        isScrolling.current = true;
        setCurrentIndex((prev) => prev - 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 600);
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY.current - touchEndY;

    if (Math.abs(diffY) > 50) {
      if (diffY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartY.current = null;
  };

  const isReversed = currentIndex % 2 !== 0;

  return (
    <main
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full h-screen bg-[#161317] pt-16 md:pt-20 pb-4 px-4 md:px-12 flex flex-col justify-center overflow-hidden relative select-none"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-337.5 mx-auto relative flex flex-col justify-center h-full my-auto">
        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            hasAnimatedDigitalPrinting = true;
          }}
        >
          <motion.div
            key={currentIndex}
            initial={
              shouldAnimate && !hasAnimatedDigitalPrinting
                ? { opacity: 0 }
                : { opacity: 1 }
            }
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`w-full flex flex-col ${
              isReversed ? "lg:flex-col-reverse" : "lg:flex-col"
            } justify-center gap-3 md:gap-6`}
          >
            <motion.div
              initial={
                shouldAnimate && !hasAnimatedDigitalPrinting
                  ? { opacity: 0, y: -20 }
                  : { opacity: 1, y: 0 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full max-w-4xl space-y-1.5 md:space-y-2"
            >
              <span className="text-[#FF6600] font-semibold text-[11px] md:text-sm block tracking-wide">
                {currentContent?.badge}
              </span>
              <h2 className="text-lg md:text-3xl font-extrabold tracking-tight text-white leading-snug md:leading-tight">
                {currentContent?.title}
              </h2>
              <p className="text-white/85 text-[11px] md:text-sm leading-relaxed max-w-3xl">
                {currentContent?.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4 items-center w-full">
              <motion.div
                initial={
                  shouldAnimate && !hasAnimatedDigitalPrinting
                    ? { opacity: 0, scale: 0.97 }
                    : { opacity: 1, scale: 1 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-8 h-47.5 md:h-87.5 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
                onClick={() => setActiveImage(currentSlideData.image)}
              >
                <img
                  src={currentSlideData.image}
                  alt="Digital Printing Visual"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute bottom-3 right-3 bg-[#161317]/90 backdrop-blur-md border border-[#FF6600]/40 px-3 py-1 rounded-xl shadow-xl flex items-center gap-2 z-10">
                  <div className="w-6 h-6 rounded-full bg-[#FF6600] flex items-center justify-center text-white font-bold text-[9px]">
                    VR
                  </div>
                  <span className="text-white text-xs font-semibold tracking-wider">
                    Venus Reklam
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={
                  shouldAnimate && !hasAnimatedDigitalPrinting
                    ? { opacity: 0, y: 30 }
                    : { opacity: 1, y: 0 }
                }
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.5 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className={`relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e1a20]/60 backdrop-blur-sm group cursor-pointer ${
                  currentIndex === 2
                    ? "lg:col-span-4 h-47.5 md:h-87.5 p-0"
                    : "lg:col-span-4 h-37.5 md:h-72.5 p-3 flex items-center justify-center"
                }`}
                onClick={() =>
                  setActiveImage(currentSlideData.secondaryImage)
                }
              >
                <img
                  src={currentSlideData.secondaryImage}
                  alt="Secondary Graphic Detail"
                  className={`transition-transform duration-500 filter drop-shadow-xl ${
                    currentIndex === 2
                      ? "w-full h-full object-cover group-hover:scale-105"
                      : "max-h-full max-w-full object-contain group-hover:scale-105"
                  }`}
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute -right-7.5 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-20">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6600] border border-white/20 text-white flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:hover:bg-white/10 cursor-pointer disabled:cursor-not-allowed`}
          >
            <ChevronUp className="w-5 h-5" />
          </button>

          <div className="flex flex-col gap-2.5">
            {digitalPrintingSlides.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "h-6 bg-[#FF6600]" : "h-2 bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === digitalPrintingSlides.length - 1}
            className={`w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6600] border border-white/20 text-white flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:hover:bg-white/10 cursor-pointer disabled:cursor-not-allowed`}
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        <div className="flex lg:hidden justify-between items-center mt-4 px-2 z-20">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {isAr ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          <div className="flex gap-1.5">
            {digitalPrintingSlides.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-5 bg-[#FF6600]" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === digitalPrintingSlides.length - 1}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {isAr ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full flex items-center justify-center">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 bg-[#FF6600] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold z-50 cursor-pointer"
            >
              ✕
            </button>
            <img
              src={activeImage}
              alt="Zoomed"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default DigitalPrinting;