import { useLanguage } from "@/context/useLanguage";
import SectionHeader from "@/components/ui/SectionHeader";
import WhyChooseUsCard from "./WhyChooseUsCard";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer from "@/components/animation/StaggerContainer";
import StaggerItem from "@/components/animation/StaggerItem";
import { whyChooseUsCards } from "@/data/whyChooseUsData";

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const section = t.whyChooseUs;

  return (
    <section
      id="features"
      className="relative w-full py-24 bg-dark-bg text-white overflow-hidden font-(family-name:--font-main)"
    >
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn
          direction="right"
          distance={50}
          viewportAmount={0.2}
          duration={0.7}
          className="mb-14"
        >
          <SectionHeader
            badge={section.badge}
            title={section.title}
            description={section.sectionDescription}
            centered={true}
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {whyChooseUsCards.map((item) => {
            const card = section[item.cardKey];

            return (
              <StaggerItem key={item.id} className={item.spanClass}>
                <WhyChooseUsCard
                  icon={item.icon}
                  title={card.title}
                  description={card.description}
                  subDescription={
                    "subDescription" in card ? card.subDescription : undefined
                  }
                  featured={item.featured}
                />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChooseUs;
