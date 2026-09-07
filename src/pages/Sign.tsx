import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCreative,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";

import { signSlidesData } from "@/data/signData";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/animation/FadeIn";
import ImageLightbox from "@/components/ui/ImageLightbox";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Sign = () => {
  const { t } = useLanguage();

  const [activeImage, setActiveImage] = useState<string | null>(null);

  const [leftBtnEl, setLeftBtnEl] = useState<HTMLButtonElement | null>(null);
  const [rightBtnEl, setRightBtnEl] = useState<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);


  return (
    <main className="w-full min-h-screen bg-surface-dark py-20 px-2 md:px-6 flex flex-col justify-center overflow-hidden relative">
      {/* عنوان القسم */}
      <FadeIn trigger="mount" direction="down" distance={20} duration={0.6}>
        <SectionHeader
          as="h1"
          badge={t.signSection.hero.badge}
          title={t.signSection.hero.title}
          description={t.services.sectionDesc}
          centered={true}
        />
      </FadeIn>

      {/* حاوية السلايدر مع أنيميشن تدريجي */}
      <FadeIn
        trigger="mount"
        scale={0.95}
        duration={0.7}
        delay={0.2}
        className="w-full max-w-[1700px] mx-auto px-2 relative"
      >
        <Swiper
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
            prevEl: leftBtnEl,
            nextEl: rightBtnEl,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full py-4"
        >
          {signSlidesData.map((item) => {
            const currentSlide = t.signSection.slides[item.contentKey];

            return (
              <SwiperSlide
                key={item.id}
                className="flex justify-center cursor-grab active:cursor-grabbing"
              >
                <div className="relative w-full bg-surface border border-white/5 rounded-3xl p-4 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 overflow-hidden min-h-125 md:min-h-145">
                  <div className="w-full lg:w-[46%] bg-surface-elevated/90 backdrop-blur-md p-5 md:p-12 rounded-2xl shadow-xl z-10 text-white space-y-4 md:space-y-5 border border-white/10">
                    <h2
                      className="text-xl md:text-4xl font-extrabold tracking-tight leading-snug text-white"
                    >
                      {currentSlide?.title}
                    </h2>
                    <p
                      className={`text-white/85 text-xs md:text-lg leading-relaxed font-normal `}
                    >
                      {currentSlide?.description}
                    </p>
                  </div>

                  <div
                    onClick={() => setActiveImage(item.image)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveImage(item.image);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className="w-full lg:w-[50%] h-55 md:h-120 rounded-2xl overflow-hidden shadow-2xl relative cursor-pointer group/img border border-white/5"
                    title={t.signSection.controls.zoomTitle}
                  >
                    <img
                      src={item.image}
                      alt={t.a11y.signImage}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="bg-primary text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                        <span></span> {t.signSection.hero.zoomText}
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
          aria-label={t.signSection.controls.prev}
          className="absolute top-[60%] lg:top-1/2 -translate-y-1/2 left-2 md:left-4 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-dark/85 border border-primary/40 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group shadow-lg cursor-pointer"
        >
          <ChevronLeft
            size={15}
            strokeWidth={2.5}
            className="text-primary group-hover:text-white transition-colors"
          />
        </button>

        {/* زر اليمين */}
        <button
          ref={(node) => setRightBtnEl(node)}
          aria-label={t.signSection.controls.next}
          className="absolute top-[60%] lg:top-1/2 -translate-y-1/2 right-2 md:right-4 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-dark/85 border border-primary/40 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group shadow-lg cursor-pointer"
        >
          <ChevronRight
            size={15}
            strokeWidth={2.5}
            className="text-primary group-hover:text-white transition-colors"
          />
        </button>
      </FadeIn>

      <ImageLightbox
        image={activeImage}
        onClose={() => setActiveImage(null)}
        alt={t.a11y.zoomedImage}
        closeLabel={t.signSection.controls.close}
      />
    </main>
  );
};

export default Sign;
