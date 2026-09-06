import { useNavigate } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "@/context/useLanguage";
import { aboutPageData } from "@/data/aboutPageData";
import FadeIn from "@/components/animation/FadeIn";
import CounterItem from "@/components/ui/CounterItem";

const About = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const localizedPath = useLocalizedPath();

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
    >
      <div className="w-full max-w-337.5 mx-auto space-y-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
            direction="right"
            distance={30}
            duration={0.6}
            viewportAmount={0}
            className="lg:col-span-7 lg:order-1 h-70 md:h-105 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative"
          >
            <img
              src={aboutPageData.mainImage}
              alt={t.a11y.aboutImage}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
          </FadeIn>

          <FadeIn
            direction="right"
            distance={50}
            duration={0.7}
            viewportAmount={0}
            className="lg:col-span-5 lg:order-2 space-y-4 text-natural"
          >
            <span className="text-primary font-semibold text-xs md:text-sm tracking-wide uppercase block">
              {badgeText}
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {titleText}
            </h1>
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
          className="w-full bg-primary rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none"></div>
          <h3
            className="text-xl md:text-3xl font-extrabold text-white tracking-tight z-10 text-natural"
          >
            {bannerTitle}
          </h3>
          <button
            onClick={() => navigate(localizedPath("/communication"))}
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
