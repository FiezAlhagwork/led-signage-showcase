import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animation/FadeIn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { heroSlides } from "@/data/heroData";

const Hero = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <FadeIn
        trigger="mount"
        duration={1.2}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Swiper
          key={language}
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          {heroSlides.map((image, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full flex items-center justify-center bg-black"
            >
              <img
                src={image}
                alt={t.a11y.heroSlide.replace("{n}", String(index + 1))}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </FadeIn>

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[150px] pointer-events-none z-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none z-20" />

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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-amber-400">
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
          <Link to="/communication" className="w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full">
              {t.hero.btnContact}
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
