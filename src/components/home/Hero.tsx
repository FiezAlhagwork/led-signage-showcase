import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/useLanguage";
import { contactData } from "@/data/contactData";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animation/FadeIn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

import { heroSlides } from "@/data/heroData";

const Hero = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);


  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => {
      const autoplay = swiperRef.current?.autoplay;
      if (!autoplay) return;

      if (entry.isIntersecting) {
        autoplay.start();
      } else {
        autoplay.stop();
      }
    });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <FadeIn
        trigger="mount"
        duration={1.2}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          /* دورة أطول وتلاشية أقصر: بتنزّل نسبة الوقت اللي فيه بكسلات ملء
             الشاشة عم تتغيّر من ~50% لـ~14%، وهي النسبة هي كلفة الرسم الفعلية */
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          className="w-full h-full"
        >
          {heroSlides.map((image, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full flex items-center justify-center bg-dark-bg"
            >
              {/* أول شريحة هي عنصر LCP: تُحمَّل فوراً بأولوية عالية، وباقيهن كسالى */}
              <img
                src={image}
                alt={t.a11y.heroSlide.replace("{n}", String(index + 1))}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </FadeIn>

      {/* الطبقة الوحيدة اللي بتخلي نص الهيرو مقروء فوق الصور — بلون قاعدة
          الموقع بدل الأسود، فالصور بتاخد صبغة الهوية بدل ما تضل معزولة عنها */}
      <div className="absolute inset-0 bg-dark-bg/50 z-10" />



      <div className="container mx-auto px-6 relative z-30 text-center font-(family-name:--font-main)">


        <FadeIn
          trigger="mount"
          direction="up"
          distance={30}
          duration={0.7}
          delay={0.4}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto mb-6">
            {t.hero.title}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-soft">
              {t.hero.titleHighlight}
            </span>
          </h1>
        </FadeIn>

        <FadeIn
          trigger="mount"
          direction="up"
          distance={30}
          duration={0.7}
          delay={0.6}
        >
          <p className="text-base md:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t.hero.description}
          </p>
        </FadeIn>

        <FadeIn
          trigger="mount"
          scale={0.95}
          duration={0.6}
          delay={0.8}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-40"
        >
          {/* الزر بيفتح محادثة واتساب مباشرة بدل صفحة التواصل */}
          <Button
            href={`https://wa.me/${contactData.whatsappNumber}`}
            size="lg"
            variant="primary"
            className="w-full sm:w-auto"
          >
            {t.hero.btnContact}
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
