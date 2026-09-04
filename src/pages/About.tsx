import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { aboutPageData } from "@/data/aboutPageData";
import FadeIn from "@/components/animation/FadeIn";
import CounterItem from "@/components/ui/CounterItem";

const About = () => {
  const { t, isRtl: isAr } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const aboutT = t.aboutru;
  const counterTitles = aboutT.counters;

  const badgeText = aboutT.slides.slide1.badge;
  const titleText = aboutT.slides.slide1.title;
  const desc1Text = aboutT.slides.slide1.description;
  const desc2Text = aboutT.slides.slide3.description;

  const bannerTitle = aboutT.banner.title;
  const bannerBtn = aboutT.banner.button;

  return (
    <main
      className="w-full min-h-screen bg-surface-dark pt-24 pb-16 px-4 md:px-12 flex flex-col justify-between select-none"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-337.5 mx-auto space-y-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {aboutPageData.counters.map((counter) => (
            <CounterItem
              key={counter.id}
              item={counter}
              title={counterTitles[counter.titleKey]}
            />
          ))}
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1c181d]/50 border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl`}
        >
          <FadeIn
            direction={isAr ? "left" : "right"}
            distance={30}
            duration={0.6}
            viewportAmount={0}
            className={`lg:col-span-7 h-70 md:h-105 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group ${isAr ? "lg:order-2" : "lg:order-1"}`}
          >
            <img
              src={aboutPageData.mainImage}
              alt={t.a11y.aboutImage}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
          </FadeIn>

          <FadeIn
            direction="right"
            distance={50}
            duration={0.7}
            viewportAmount={0}
            className={`lg:col-span-5 space-y-4 ${isAr ? "lg:order-1 text-right" : "lg:order-2 text-left"}`}
          >
            <span className="text-primary font-semibold text-xs md:text-sm tracking-wide uppercase block">
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
          </FadeIn>
        </div>

        <FadeIn
          direction="up"
          distance={30}
          duration={0.6}
          viewportAmount={0}
          className={`w-full bg-primary rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden ${isAr ? "md:flex-row-reverse" : ""}`}
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none"></div>
          <h3
            className={`text-xl md:text-3xl font-extrabold text-white tracking-tight z-10 ${isAr ? "text-right" : "text-left"}`}
          >
            {bannerTitle}
          </h3>
          <button
            onClick={() => navigate("/communication")}
            className="bg-surface-dark hover:bg-black text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-xl shadow-lg border border-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer z-10 whitespace-nowrap"
          >
            {bannerBtn}
          </button>
        </FadeIn>
      </div>
    </main>
  );
};

export default About;
