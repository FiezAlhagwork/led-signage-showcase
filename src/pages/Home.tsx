import AboutSection from "@/components/home/AboutSection";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";

import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Projects />
      <Services />
      <WhyChooseUs />
    </main>
  );
};

export default Home;
