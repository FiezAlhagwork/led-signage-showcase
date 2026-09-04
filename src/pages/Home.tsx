import AboutSection from "@/components/home/AboutSection";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";

import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ScrollTop from "@/components/ui/ScrollTop";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Projects />
      <Services />
      <WhyChooseUs />
      <ScrollTop />
    </div>
  );
};

export default Home;
