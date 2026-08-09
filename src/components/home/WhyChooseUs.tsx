import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";
import { Clock, ShieldCheck, TrendingUp, Layers } from "lucide-react";
import { motion,type Variants } from "framer-motion";

let hasAnimatedWhyChooseUs = false;

const WhyChooseUs: React.FC = () => {
  const { language, t } = useLanguage();
  const section = t.whyChooseUs;
  const isAr = language === "AR";
  const shouldAnimate = !hasAnimatedWhyChooseUs;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="features"
      className="relative w-full py-24 bg-dark-bg text-white overflow-hidden font-(family-name:--font-main)"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="mb-14"
          initial={
            shouldAnimate ? { opacity: 0, x: 50 } : { opacity: 1, x: 0 }
          }
          whileInView={shouldAnimate ? { opacity: 1, x: 0 } : {}}
          onViewportEnter={() => {
            if (shouldAnimate) hasAnimatedWhyChooseUs = true;
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeader
            badge={section.badge}
            title={section.title}
            description={section.card1.description}
            centered={true}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
          variants={shouldAnimate ? containerVariants : undefined}
          initial={shouldAnimate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            variants={shouldAnimate ? itemVariants : undefined}
            className="group p-8 rounded-3xl bg-[#18181b] border border-white/10 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 flex flex-col justify-between text-right cursor-pointer"
          >
            <div className="transition-transform duration-500 group-hover:translate-x-1">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Clock className="w-7 h-7 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-primary">
                {section.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {section.card1.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={shouldAnimate ? itemVariants : undefined}
            className="group p-8 rounded-3xl bg-[#18181b] border border-white/10 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 flex flex-col justify-between text-right cursor-pointer"
          >
            <div className="transition-transform duration-500 group-hover:translate-x-1">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <ShieldCheck className="w-7 h-7 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-primary">
                {section.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {section.card2.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={shouldAnimate ? itemVariants : undefined}
            className="lg:row-span-2 group p-8 md:p-10 rounded-3xl bg-[#18181b] border border-white/10 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 flex flex-col justify-between relative overflow-hidden text-right cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-primary/15"></div>

            <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-8 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <TrendingUp className="w-7 h-7 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-primary">
                {section.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                {section.card4.description}
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                {section.card4.subDescription}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={shouldAnimate ? itemVariants : undefined}
            className="lg:col-span-2 group p-8 rounded-3xl bg-[#18181b] border border-white/10 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 flex flex-col justify-between text-right cursor-pointer"
          >
            <div className="transition-transform duration-500 group-hover:translate-x-1">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Layers className="w-7 h-7 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-primary">
                {section.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {section.card3.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;