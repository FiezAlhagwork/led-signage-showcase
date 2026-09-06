import { motion, type Transition } from "framer-motion";
import type { FadeInProps } from "@/types";
import { getOffset } from "./offset";

const FadeIn = ({
  children,
  direction = "none",
  distance = 30,
  scale,
  duration = 0.6,
  delay = 0,
  trigger = "inView",
  viewportAmount = 0.2,
  className,
}: FadeInProps) => {
  const hidden = {
    opacity: 0,
    ...getOffset(direction, distance),
    ...(scale !== undefined ? { scale } : {}),
  };

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scale !== undefined ? { scale: 1 } : {}),
  };

  const transition: Transition = { duration, delay, ease: "easeOut" };

  if (trigger === "mount") {
    return (
      <motion.div
        initial={hidden}
        animate={visible}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: viewportAmount }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
