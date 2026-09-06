import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";
import { galleryItems } from "@/data/galleryData";
import ImageLightbox from "@/components/ui/ImageLightbox";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/animation/FadeIn";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Gallery = () => {
  const { t } = useLanguage();

  /** رقم الصورة المفتوحة بالمودال — null يعني مسكّر */
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [prevBtnEl, setPrevBtnEl] = useState<HTMLButtonElement | null>(null);
  const [nextBtnEl, setNextBtnEl] = useState<HTMLButtonElement | null>(null);

  const total = galleryItems.length;
  const activeItem = activeIndex === null ? null : galleryItems[activeIndex];

  /* التنقّل بيلفّ من آخر صورة لأول وحدة والعكس */
  const showNext = () => setActiveIndex((i) => (i === null ? i : (i + 1) % total));
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? i : (i - 1 + total) % total));

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-surface-dark/85 border border-primary/40 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group shadow-lg cursor-pointer";

  return (
    <main className="w-full min-h-screen bg-surface-dark pt-32 pb-20 overflow-hidden">
      <FadeIn trigger="mount" direction="down" distance={20} duration={0.6}>
        <div className="px-6 md:px-16 lg:px-24">
          <SectionHeader
            as="h1"
            badge={t.gallery.badge}
            title={t.gallery.title}
            description={t.gallery.description}
            centered={true}
          />
        </div>
      </FadeIn>

      <div className="relative w-full max-w-[1700px] mx-auto px-6 md:px-16 lg:px-24">
        <Swiper
          modules={[FreeMode, Mousewheel, Navigation, Pagination]}
          slidesPerView="auto"
          spaceBetween={24}
          freeMode={{ enabled: true, momentumBounce: false }}
          mousewheel={{ forceToAxis: true }}
          grabCursor={true}
          navigation={{ prevEl: prevBtnEl, nextEl: nextBtnEl }}
          pagination={{ clickable: true }}
          className="w-full pt-4 pb-14 swiper-dots-primary"
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="w-72! h-56! md:w-105! md:h-80! lg:w-130! lg:h-90! shrink-0"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative block w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black/40 transition-all duration-300 hover:border-primary hover:-translate-y-1 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={t.projectsGrid[item.categoryKey]}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={(node) => setPrevBtnEl(node)}
          aria-label={t.prevSlide}
          className={`${arrowClass} left-0 md:left-4 lg:left-8`}
        >
          <ChevronLeft
            size={16}
            strokeWidth={2.5}
            className="text-primary group-hover:text-white transition-colors"
          />
        </button>

        <button
          ref={(node) => setNextBtnEl(node)}
          aria-label={t.nextSlide}
          className={`${arrowClass} right-0 md:right-4 lg:right-8`}
        >
          <ChevronRight
            size={16}
            strokeWidth={2.5}
            className="text-primary group-hover:text-white transition-colors"
          />
        </button>
      </div>

      <ImageLightbox
        image={activeItem?.image ?? null}
        onClose={() => setActiveIndex(null)}
        alt={activeItem ? t.projectsGrid[activeItem.categoryKey] : ""}
        closeLabel={t.a11y.close}
        onNext={showNext}
        onPrev={showPrev}
        nextLabel={t.nextSlide}
        prevLabel={t.prevSlide}
        counter={activeIndex === null ? undefined : `${activeIndex + 1} / ${total}`}
      />
    </main>
  );
};

export default Gallery;
