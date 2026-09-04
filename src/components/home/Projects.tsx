import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { featuredProjectsData } from "@/data/featuredProjectsData";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "./ProjectCard";
import ImageLightbox from "@/components/ui/ImageLightbox";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer from "@/components/animation/StaggerContainer";
import StaggerItem from "@/components/animation/StaggerItem";

const Projects = () => {
  const { t, isRtl: isAr } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjectsData.map((project) => {
            const title = t.projectsGrid[project.titleKey];
            const category = t.projectsGrid[project.categoryKey];

            return (
              <StaggerItem key={project.id} direction="up" distance={40}>
                <ProjectCard
                  image={project.image}
                  title={title}
                  category={category}
                  isAr={isAr}
                  onClick={() => setSelectedImage(project.image)}
                />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
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
