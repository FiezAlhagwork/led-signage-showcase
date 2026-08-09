import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import Button from "../ui/Button";
import { motion } from "framer-motion";

// استيراد مكتبة Swiper والمكونات الخاصة بها
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { slideImages } from "../../data";

// متغير خارجي يحفظ حالة هل تم تشغيل الأنيميشن أم لا في هذه الجلسة
let hasAnimated = false;

const Hero = () => {
  const { language, t } = useLanguage(); 

  // إذا تم تشغيل الأنيميشن مسبقاً، نجعل القيم تبدو وكأنها ظهرت بالكامل (بدون حركة)
  const shouldAnimate = !hasAnimated;

  // بمجرد أن يتم عرض المكون لأول مرة، نغير القيمة لكي لا تتكرر عند العودة
  React.useEffect(() => {
    hasAnimated = true;
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* الخلفية */}
      <motion.div 
        initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
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
          {slideImages.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full flex items-center justify-center bg-black">
              <img
                src={image}
                alt={`Noor Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[150px] pointer-events-none z-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none z-20" />

      {/* المحتوى النصي */}
      <div className="container mx-auto px-6 relative z-30 text-center font-[family-name:var(--font-main)]">
        
        {/* التاج العلوي */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block px-8 py-2.5 rounded-full bg-white/5 border border-white/10 font-medium tracking-wider uppercase text-primary mb-6 select-none">
            {t.hero.welcome}
          </span>
        </motion.div>

        {/* العنوان الرئيسي */}
        <motion.h1 
          initial={shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto mb-6"
        >
          {t.hero.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
            {t.hero.titleHighlight}
          </span>
        </motion.h1>

        {/* الوصف */}
        <motion.p 
          initial={shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-base md:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* الأزرار (تم حذف زر معرض الأعمال/اكتشف أعمالنا والإبقاء على التواصل أو أزرار أخرى) */}
        <motion.div 
          initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-40"
        >
          <Link to="/communication" className="w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full">
              {t.hero.btnContact}
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;