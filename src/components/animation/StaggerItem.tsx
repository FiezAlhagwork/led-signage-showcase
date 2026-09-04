import { motion } from "framer-motion";
import type { StaggerItemProps } from "@/types";
import { getOffset } from "./offset";

/** عنصر واحد جوا StaggerContainer — بيرث حالة hidden/visible من الأب. */
const StaggerItem = ({
  children,
  direction = "up",
  distance = 50,
  duration = 0.6,
  className,
  onClick,
}: StaggerItemProps) => {
  return (
    <motion.div
      className={className}
      onClick={onClick}
      variants={{
        hidden: { opacity: 0, ...getOffset(direction, distance) },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerItem;
