import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { featuredProjectsData } from "../../data/featuredProjects";
import SectionHeader from "../ui/SectionHeader";
import { motion, type Variants } from "framer-motion";

let hasAnimatedProjects = false;

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "AR";
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const shouldAnimate = !hasAnimatedProjects;

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="relative w-full py-24 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          onViewportEnter={() => {
            if (shouldAnimate) hasAnimatedProjects = true;
          }}
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={shouldAnimate ? containerVariants : undefined}
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
                variants={shouldAnimate ? itemVariants : undefined}
                onClick={() => setSelectedImage(project.image)}
                className="group relative bg-black/40 rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/15 flex flex-col cursor-pointer"
              >
                <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <span
                    className={`absolute top-4 ${
                      isArabic ? "right-4" : "left-4"
                    } px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-primary`}
                  >
                    {category}
                  </span>
                </div>

                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
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
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              className="absolute -top-10 right-0 text-white bg-primary hover:bg-[#e75502] rounded-full p-2 font-bold transition-all cursor-pointer z-50"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Expanded Project"
              className="max-h-[85vh] max-w-full object-contain rounded-xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
