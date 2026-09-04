import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { useLanguage, useLocalizedPath } from "@/context/useLanguage";
import SectionHeader from "@/components/ui/SectionHeader";
import { aboutSectionData } from "@/data/aboutSectionData";
import FadeIn from "@/components/animation/FadeIn";

const AboutSection = () => {
  const { t } = useLanguage();
  const localizedPath = useLocalizedPath();

  const aboutT = t.about;

  return (
    <section
      id="about"
      className="relative w-full py-24 bg-[#141414] text-white overflow-hidden border-y border-white/5"    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-100 h-100 bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <FadeIn direction="up" distance={50} viewportAmount={0.3} duration={0.6} className="w-full">
              <SectionHeader
                badge={aboutT.tag}
                title={aboutT.title}
                description={aboutT.description}
                centered={true}
              />
            </FadeIn>

            <FadeIn
              direction="up"
              distance={50}
              viewportAmount={0.3}
              duration={0.6}
              delay={0.2}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10"
            >
              {aboutSectionData.highlights.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-surface border border-white/15"
                >
                  <span className="text-sm font-medium text-white/90">
                    {aboutT[item.featureKey]}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </FadeIn>

            <FadeIn direction="up" distance={50} viewportAmount={0.3} duration={0.6} delay={0.4}>
              <Link
                to={localizedPath(aboutSectionData.ctaPath)}
                className="px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/60 inline-flex items-center gap-2"
              >
                {aboutT.learnMore}
              </Link>
            </FadeIn>
          </div>

          <FadeIn
            scale={0.8}
            viewportAmount={0.3}
            duration={0.8}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-2 bg-linear-to-r from-primary/40 to-transparent rounded-2xl blur-2xl opacity-40 pointer-events-none" />
            <div className="relative w-full h-70 lg:h-120 rounded-2xl overflow-hidden bg-surface border border-white/15 shadow-2xl">
              <img
                src={aboutSectionData.image}
                alt={t.a11y.aboutImage}
                loading="lazy"
                decoding="async"
                className="absolute right-1 w-full h-full object-cover transition-transform duration-700 ease-out  "
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
