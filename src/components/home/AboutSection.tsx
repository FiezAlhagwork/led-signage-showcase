import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";
import { aboutData } from "../../data/about";
import { motion } from "framer-motion";

let hasAnimatedAboutSection = false;

const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isAr = language === "AR";

  const aboutT = t.about || {};
  const highlightsList = [
    aboutT.feature1,
    aboutT.feature2,
    aboutT.feature3,
    aboutT.feature4,
  ];

  const shouldAnimate = !hasAnimatedAboutSection;

  return (
    <section
      id="about"
      className="relative w-full py-24 bg-[#141414] text-white overflow-hidden border-y border-white/5"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-100 h-100 bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* الأنيميشن يعمل عند الوصول للقسم مرة واحدة فقط */}
            <motion.div
              initial={
                shouldAnimate ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              onViewportEnter={() => {
                hasAnimatedAboutSection = true;
              }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <SectionHeader
                badge={aboutT.tag}
                title={aboutT.title}
                description={aboutT.description}
                centered={true}
              />
            </motion.div>

            <motion.div
              initial={
                shouldAnimate ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: shouldAnimate ? 0.2 : 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10"
            >
              {aboutData.highlights.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#18181b] border border-white/15 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FF6B00] hover:bg-[#222222] hover:shadow-xl hover:shadow-[#FF6B00]/15 group cursor-pointer"
                >
                  <span className="text-sm font-medium text-white/90 transition-colors duration-300 group-hover:text-white">
                    {highlightsList[idx]}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#FF6B00] group-hover:text-white">
                    ✓
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={
                shouldAnimate ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: shouldAnimate ? 0.4 : 0 }}
            >
              <Link to={aboutData.ctaPath}>
                <button className="px-8 py-4 rounded-full bg-primary hover:bg-[#e05e00] text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/60 flex items-center gap-2">
                  <span>{aboutT.learnMore}</span>
                </button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={
              shouldAnimate
                ? { opacity: 0, scale: 0.8 }
                : { opacity: 1, scale: 1 }
            }
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-2 bg-linear-to-r from-primary/40 to-transparent rounded-2xl blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative w-full h-100 lg:h-120 rounded-2xl overflow-hidden bg-[#18181b] border border-white/15 shadow-2xl transition-all duration-500 group-hover:border-primary">
              <img
                src={aboutData.image}
                alt="About Us"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
