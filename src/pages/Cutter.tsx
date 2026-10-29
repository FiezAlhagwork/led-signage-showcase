import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/useLanguage";
import cutterBackground from "@/assets/cutter background.webp";
import cutterHead from "@/assets/cutter head.webp";
import cutter from "@/assets/cutter.webp";
import cutterUpper from "@/assets/cutter upper 2.webp";
import cut1 from "@/assets/cut1.webp";
import cut2 from "@/assets/cut2.webp";
import cut3 from "@/assets/cut3.webp";
import cut4 from "@/assets/cut4.webp";
import cut5 from "@/assets/cut5.webp";
import cut7 from "@/assets/cut7.webp";
import cut8 from "@/assets/cut8.webp";
import cut9 from "@/assets/cut9.webp";
import cut10 from "@/assets/cut10.webp";
import cut11 from "@/assets/cut11.webp";
import cut12 from "@/assets/cut12.webp";
import cut14 from "@/assets/cut14.webp";
import vinyl from "@/assets/vinyl.webp";

const cutImages = [
  cut1,
  cut12,
  cut3,
  cut14,
  cut5,
  cut10,
  cut7,
  cut8,
  cut9,
  cut11,
  cut2,
  cut4,
];

const Cutter = () => {
  const { language } = useLanguage();
  const buttonAnimation = useAnimation();
  const vinylAnimation = useAnimation();
  const [completedCuts, setCompletedCuts] = useState(0);
  const [isCutting, setIsCutting] = useState(false);

  const handleCut = () => {
    setIsCutting(true);
    void vinylAnimation.start({
      x: [0, -8, 8, -6, 6, 0],
      rotate: [0, -3, 3, -2, 2, 0],
      transition: { duration: 0.55, repeat: 3 },
    });
    void buttonAnimation.start({
      x: [0, -6, 6, -5, 5, 0],
      rotate: [0, -4, 4, -3, 3, 0],
      transition: { duration: 0.45 },
    });
  };

  const handleCutAnimationComplete = () => {
    if (isCutting) {
      setIsCutting(false);
      setCompletedCuts((count) => count + 1);
    }
  };

  const currentCutImage = cutImages[completedCuts];

  return (
    <main className="w-full min-h-screen bg-surface-dark">
      <section
        className="relative mt-35 flex min-h-[100vh] w-full items-center justify-center overflow-hidden border-10 border-white bg-cover bg-center px-4 py-12"
        style={{ backgroundImage: `url("${cutterBackground}")` }}
      >
        <motion.img
          className="absolute left-0 bottom-0 z-0 hidden w-[80vw] max-w-130 -translate-y-1/2 object-contain xl:block"
          src={vinyl}
          alt=""
          aria-hidden="true"
          animate={vinylAnimation}
        />
        <motion.img
          className="absolute right-0 bottom-0 z-0 hidden w-[80vw] max-w-130 -translate-y-1/2 object-contain xl:block"
          src={vinyl}
          alt=""
          aria-hidden="true"
          animate={vinylAnimation}
        />
        <div className="relative z-10 w-full max-w-5xl">
          <div className="relative">
            <img
              className="block h-auto w-full"
              src={cutter}
              alt="Vinyl cutter machine"
            />
            {isCutting && (
              <motion.img
                className="absolute left-0 top-[-50%] z-10 h-[80%] w-full object-contain"
                src={currentCutImage}
                alt="Car wrap being cut"
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0.5, 1],
                  y: ["0", "25%", "50%", "75%", "100%"],
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
                onAnimationComplete={handleCutAnimationComplete}
              />
            )}
            <img
              className="absolute left-0 top-0 z-20 block h-auto w-full"
              src={cutterUpper}
              alt=""
            />
            <motion.img
              className="absolute left-1/2 top-[2%] z-30 w-[40%] min-w-32 max-w-64 -translate-x-1/2"
              src={cutterHead}
              alt=""
              animate={
                isCutting
                  ? { x: ["0", "-130%", "130%", "-130%", "130%", "-130%", "0"] }
                  : { x: "0" }
              }
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
          <div className="mt-4 flex justify-end">
            <motion.button
              className="rounded-xl bg-primary px-6 py-3 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:bg-primary/90 active:scale-95"
              onClick={handleCut}
              type="button"
              animate={buttonAnimation}
              disabled={isCutting || completedCuts === cutImages.length}
            >
              {language === "AR" ? "اقطع" : "Cut"}
            </motion.button>
          </div>
        </div>
      </section>
      {completedCuts > 0 && (
        <motion.section
          className="grid min-h-[80vh] w-full grid-cols-1 items-center justify-items-center gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {cutImages.slice(0, completedCuts).map((image, index) => (
            <motion.img
              key={image}
              className="h-auto w-full max-w-5xl object-contain"
              src={image}
              alt={`Cut design ${index + 1}`}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          ))}
        </motion.section>
      )}
    </main>
  );
};

export default Cutter;
