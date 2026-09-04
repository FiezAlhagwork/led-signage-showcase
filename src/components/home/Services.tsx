import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/data/servicesData";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "./ServiceCard";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer from "@/components/animation/StaggerContainer";
import StaggerItem from "@/components/animation/StaggerItem";

const Services = () => {
  const { t, isRtl: isAr } = useLanguage();

  return (
    <section
      id="services"
      className="relative w-full py-24 text-white overflow-hidden bg-dark-bg"
    >
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="left" distance={50} viewportAmount={0.2} duration={0.7}>
          <SectionHeader
            badge={t.services.tag}
            title={t.services.sectionTitle}
            description={t.services.sectionDesc}
            centered={true}
          />
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          delayChildren={0.4}
        >
          {servicesData.map((service) => {
            const title = t.servicesGrid[service.titleKey];
            const description = t.servicesGrid[service.descKey];
            const learnMoreText = t.servicesGrid.learnMore;

            return (
              <StaggerItem key={service.id}>
                <ServiceCard
                  image={service.image}
                  title={title}
                  description={description}
                  learnMoreText={learnMoreText}
                  path={service.path}
                  isAr={isAr}
                />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;
