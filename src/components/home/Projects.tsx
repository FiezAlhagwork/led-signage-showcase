import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { featuredProjectsData } from "../../data/featuredProjects";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion"; 

// متغير عام لضمان تشغيل أنيميشن المشاريع مرة واحدة فقط في الجلسة ولن يتكرر عند العودة
let hasAnimatedProjects = false;

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "AR";
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const shouldAnimate = !hasAnimatedProjects;

  // إعدادات حاوية المشاريع لظهور الصور بتتابع
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // الفارق الزمني بين كل صورة والثانية
        delayChildren: 0.3,    // تأخير بسيط بعد ظهور العنوان
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="relative w-full py-24 text-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* العنوان يظهر أولاً */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          onViewportEnter={() => { if(shouldAnimate) hasAnimatedProjects = true; }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader 
            badge={t.featuredProjects.tag}
            title={t.featuredProjects.title}
            description={t.featuredProjects.description}
            centered={true}
          />
        </motion.div>

        {/* الصور تظهر بتتابع أنيق */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={shouldAnimate ? containerVariants : {}}
          initial={shouldAnimate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredProjectsData.map((project) => {
            const title = t.projectsGrid[project.titleKey];
            const category = t.projectsGrid[project.categoryKey];

            return (
              <motion.div
                key={project.id}
                variants={shouldAnimate ? itemVariants : {}} // إذا انتهى الأنيميشن لا يعيد تطبيقه
                onClick={() => setSelectedImage(project.image)}
                className="group relative bg-black/40 rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FF6B00] hover:shadow-2xl hover:shadow-[#FF6B00]/15 flex flex-col cursor-pointer"
              >
                <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-10" />
                  
                  <span className={`absolute top-4 ${isArabic ? 'right-4' : 'left-4'} px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-[#FF6B00]`}>
                    {category}
                  </span>
                </div>

                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[#FF6B00]">
                    {title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] transition-all duration-300 group-hover:bg-[#FF6B00] group-hover:text-white group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
            <button className="absolute -top-10 right-0 text-white bg-[#FF6B00] hover:bg-[#e75502] rounded-full p-2 font-bold transition-all cursor-pointer z-50" onClick={() => setSelectedImage(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <img src={selectedImage} alt="Expanded Project" className="max-h-[85vh] max-w-full object-contain rounded-xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;