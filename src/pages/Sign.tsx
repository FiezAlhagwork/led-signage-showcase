import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useLanguage } from "../context/LanguageContext";

import { signSlidesData } from "../data/signData";
import SectionHeader from "../components/ui/SectionHeader";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";

// متغير عالمي لضمان عمل الأنيميشن مرة واحدة فقط في الجلسة للصفحة
let hasAnimatedSign = false;

const Sign: React.FC = () => {
  const { language, t } = useLanguage();
  const isAr = language === "AR";

  const shouldAnimate = !hasAnimatedSign;

  // حل المشكلة: إجبار الصفحة على البدء من الأعلى عند تحميل المكون
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [activeImage, setActiveImage] = useState<string | null>(null);

  const [leftBtnEl, setLeftBtnEl] = useState<HTMLButtonElement | null>(null);
  const [rightBtnEl, setRightBtnEl] = useState<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const slidesContent = [
    t.signSection?.slides?.wayfinding,
    t.signSection?.slides?.aluminum,
    t.signSection?.slides?.totem,
    t.signSection?.slides?.illuminated,
  ];

  return (
    <main className="w-full min-h-screen bg-[#161317] py-20 px-2 md:px-6 flex flex-col justify-center overflow-hidden relative" dir={isAr ? "rtl" : "ltr"}>

      {/* عنوان القسم */}
      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => { hasAnimatedSign = true; }}
      >
        <SectionHeader 
          badge={t.signSection?.hero?.badge} 
          title={t.signSection?.hero?.title} 
          description={t.services?.sectionDesc} 
          centered={true}
        />
      </motion.div>

      {/* حاوية السلايدر مع أنيميشن تدريجي */}
      <motion.div 
        initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-[1700px] mx-auto px-2 relative"
      >
        <Swiper
          key={language} 
          modules={[EffectCreative, Autoplay, Pagination, Navigation]}
          grabCursor={true}
          allowTouchMove={true}
          observer={true} 
          observeParents={true} 
          effect={"creative"}
          speed={900}
          creativeEffect={{
            limitProgress: 2,
            prev: {
              translate: ["-100%", 0, -500],
              opacity: 0,
            },
            next: {
              translate: ["100%", 0, 0],
              opacity: 1,
            },
          }}
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: rightBtnEl,
            nextEl: leftBtnEl,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full py-4"
        >
          {signSlidesData.map((item, index) => {
            const currentSlide = slidesContent[index];

            return (
              <SwiperSlide key={item.id} className="flex justify-center cursor-grab active:cursor-grabbing">
                <div className="relative w-full bg-[#1e1b22] border border-white/5 rounded-3xl p-4 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 overflow-hidden min-h-[500px] md:min-h-[580px]">
                  
                  <div className="group w-full lg:w-[46%] bg-[#26222b]/90 backdrop-blur-md p-5 md:p-12 rounded-2xl shadow-xl z-10 text-white space-y-4 md:space-y-5 border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-[#FF6600]/40">
                    <h2 className={`text-xl md:text-4xl font-extrabold tracking-tight leading-snug text-white group-hover:text-[#FF6600] ${isAr ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`}>
                      {currentSlide?.title}
                    </h2>
                    <p className={`text-white/85 text-xs md:text-lg leading-relaxed font-normal ${isAr ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`}>
                      {currentSlide?.description}
                    </p>
                  </div>

                  {/* تم تصغير الارتفاع في الموبايل من 320px إلى 220px */}
                  <div 
                    onClick={() => setActiveImage(item.image)}
                    className="w-full lg:w-[50%] h-[220px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl relative cursor-pointer group/img border border-white/5"
                    title={t.signSection?.controls?.zoomTitle}
                  >
                    <img 
                      src={item.image} 
                      alt="Tabela visual" 
                      className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="bg-[#FF6600] text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                        <span>🔍</span> {t.signSection?.hero?.zoomText}
                      </span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* زر اليسار */}
        <button
          ref={(node) => setLeftBtnEl(node)}
          aria-label={t.signSection?.controls?.next}
          className="absolute top-[60%] lg:top-1/2 -translate-y-1/2 left-2 md:left-4 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#161317]/85 border border-[#FF6600]/40 backdrop-blur-md flex items-center justify-center hover:bg-[#FF6600] hover:scale-110 transition-all duration-300 group shadow-lg cursor-pointer"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-[#FF6600] group-hover:text-white transition-colors">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* زر اليمين */}
        <button
          ref={(node) => setRightBtnEl(node)}
          aria-label={t.signSection?.controls?.prev}
          className="absolute top-[60%] lg:top-1/2 -translate-y-1/2 right-2 md:right-4 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#161317]/85 border border-[#FF6600]/40 backdrop-blur-md flex items-center justify-center hover:bg-[#FF6600] hover:scale-110 transition-all duration-300 group shadow-lg cursor-pointer"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-[#FF6600] group-hover:text-white transition-colors">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </motion.div>

      {/* نافذة تكبير الصورة (Modal) مع أنيميشن ظهور */}
      {activeImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 md:-right-4 bg-[#FF6600] text-white hover:bg-[#e05b00] w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-colors z-50 cursor-pointer"
              title={t.signSection?.controls?.close}
            >
              ✕
            </button>
            <img 
              src={activeImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </motion.div>
      )}

    </main>
  );
};

export default Sign;