import { motion } from "framer-motion";
import type { StaggerContainerProps } from "@/types";

/** يلف مجموعة StaggerItem ويشغّلهن بالتتابع أول ما القسم يدخل الشاشة (مرة وحدة). */
const StaggerContainer = ({
  children,
  staggerChildren = 0.15,
  delayChildren = 0.3,
  viewportAmount = 0.1,
  className,
}: StaggerContainerProps) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren, delayChildren },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
