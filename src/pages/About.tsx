import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { aboutData, type CounterItemData } from "../data/aboutData";

// متغيرات عالمية لضمان عمل الأنيميشن والعد مرة واحدة فقط في الجلسة حتى يتم تحديث الصفحة (Refresh)
let hasAnimatedCounters = false;
let hasAnimatedAboutMain = false;
let hasAnimatedBanner = false;

const CounterItem: React.FC<{ item: CounterItemData; title: string; shouldAnimate: boolean }> = ({ item, title, shouldAnimate }) => {
  const [count, setCount] = useState(hasAnimatedCounters ? item.end : 0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(!shouldAnimate);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (!shouldAnimate || hasAnimatedCounters) {
      setCount(item.end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasStarted(true);
          setHasRun(true);
          hasAnimatedCounters = true;
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasRun, shouldAnimate, item.end]);

  useEffect(() => {
    if (!hasStarted || (hasAnimatedCounters && count === item.end)) return;

    let start = 0;
    const duration = 2000;
    const increment = item.end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= item.end) {
        setCount(item.end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, item.end]);

  return (
    <motion.div 
      ref={ref} 
      initial={shouldAnimate ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#1e1a20]/80 border border-white/10 rounded-2xl p-6 text-center shadow-xl flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300"
    >
      <div className="text-3xl md:text-4xl font-extrabold text-[#FF6600] mb-2">
        {count}{item.suffix}
      </div>
      <div className="text-white/80 text-xs md:text-sm font-medium">
        {title}
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const isAr = language === "AR";

  const shouldAnimateCounters = !hasAnimatedCounters;
  const shouldAnimateAbout = !hasAnimatedAboutMain;
  const shouldAnimateBanner = !hasAnimatedBanner;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const aboutText = t?.aboutru || {};
  const counterTitles = aboutText.counters || {};

  const badgeText = aboutText.slides?.slide1?.badge || "";
  const titleText = aboutText.slides?.slide1?.title || "";
  const desc1Text = aboutText.slides?.slide1?.description || "";
  const desc2Text = aboutText.slides?.slide3?.description || "";
  
  const bannerTitle = aboutText.banner?.title || "";
  const bannerBtn = aboutText.banner?.button || "";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <main className="w-full min-h-screen bg-[#161317] pt-24 pb-16 px-4 md:px-12 flex flex-col justify-between select-none" dir={isAr ? "rtl" : "ltr"}>
      <div className="w-full max-w-[1350px] mx-auto space-y-16">

        {/* 1. قسم العدادات */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={shouldAnimateCounters ? containerVariants : {}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          onViewportEnter={() => { hasAnimatedCounters = true; }}
        >
          {aboutData.counters.map((counter) => (
            <CounterItem 
              key={counter.id} 
              item={counter} 
              title={counterTitles[counter.titleKey as keyof typeof counterTitles] || ""}
              shouldAnimate={shouldAnimateCounters}
            />
          ))}
        </motion.div>

        {/* 2. قسم معلومات عنا */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1c181d]/50 border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl`}>
          
          <motion.div 
            initial={shouldAnimateAbout ? { opacity: 0, x: isAr ? -30 : 30 } : { opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onViewportEnter={() => { hasAnimatedAboutMain = true; }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-7 h-[280px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group ${isAr ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <img 
              src={aboutData.mainImage} 
              alt="Venus Reklam About Us" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </motion.div>

          <motion.div 
            initial={shouldAnimateAbout ? { opacity: 0, x: 50 } : { opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`lg:col-span-5 space-y-4 ${isAr ? 'lg:order-1 text-right' : 'lg:order-2 text-left'}`}
          >
            <span className="text-[#FF6600] font-semibold text-xs md:text-sm tracking-wide uppercase block">
              {badgeText}
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {titleText}
            </h2>
            <p className="text-white/80 text-xs md:text-sm leading-relaxed">
              {desc1Text}
            </p>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed">
              {desc2Text}
            </p>
          </motion.div>
        </div>

        {/* 3. البانر البرتقالي */}
        <motion.div 
          initial={shouldAnimateBanner ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => { hasAnimatedBanner = true; }}
          transition={{ duration: 0.6 }}
          className={`w-full bg-[#FF6600] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden ${isAr ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          <h3 className={`text-xl md:text-3xl font-extrabold text-white tracking-tight z-10 ${isAr ? 'text-right' : 'text-left'}`}>
            {bannerTitle}
          </h3>
          <button 
            onClick={() => navigate("/communication")}
            className="bg-[#161317] hover:bg-black text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-xl shadow-lg border border-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer z-10 whitespace-nowrap"
          >
            {bannerBtn}
          </button>
        </motion.div>

      </div>
    </main>
  );
};

export default About;