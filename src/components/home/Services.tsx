import { useLanguage } from "../../context/LanguageContext";
import { servicesData } from "../../data/Services";
import SectionHeader from "../ui/SectionHeader";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
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

const Services = () => {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative w-full py-24 text-white overflow-hidden bg-dark-bg"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeader
            badge={t.services.tag}
            title={t.services.sectionTitle}
            description={t.services.sectionDesc}
            centered={true}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicesData.map((service) => {
            const title = t.servicesGrid[service.titleKey];
            const description = t.servicesGrid[service.descKey];
            const learnMoreText = t.servicesGrid.learnMore;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-black/40 rounded-3xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary flex flex-col"
              >
                <div className="relative h-80 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={service.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                <div className="p-8 flex flex-col grow justify-between space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary">
                      {title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <Link
                    to={service.path || ""}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm pt-2 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{learnMoreText}</span>
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
