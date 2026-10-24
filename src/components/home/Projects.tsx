import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";
import { featuredProjectsData } from "@/data/featuredProjectsData";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "./ProjectCard";
import ImageLightbox from "@/components/ui/ImageLightbox";
import FadeIn from "@/components/animation/FadeIn";

const INITIAL_PROJECT_COUNT = 6;

const Projects = () => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const visibleProjects = isExpanded
    ? featuredProjectsData
    : featuredProjectsData.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <section
      id="projects"
      className="relative w-full py-24 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="up" distance={20} viewportAmount={0.2} duration={0.5}>
          <SectionHeader
            badge={t.featuredProjects.tag}
            title={t.featuredProjects.title}
            description={t.featuredProjects.description}
            centered={true}
          />
        </FadeIn>

        <div
          id="featured-projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={t.projectsGrid[project.titleKey]}
              category={t.projectsGrid[project.categoryKey]}
              onClick={() => setSelectedImage(project.image)}
            />
          ))}
        </div>

        {featuredProjectsData.length > INITIAL_PROJECT_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              aria-expanded={isExpanded}
              aria-controls="featured-projects-grid"
              aria-label={
                isExpanded
                  ? t.featuredProjects.viewLess
                  : t.featuredProjects.viewAll
              }
              onClick={() => setIsExpanded((expanded) => !expanded)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-primary hover:bg-primary"
            >
              {isExpanded
                ? t.featuredProjects.viewLess
                : t.featuredProjects.viewAll}
              <ChevronDown
                aria-hidden="true"
                className={`h-5 w-5 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>

      <ImageLightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        alt={t.a11y.zoomedImage}
        closeLabel={t.a11y.close}
      />
    </section>
  );
};

export default Projects;
