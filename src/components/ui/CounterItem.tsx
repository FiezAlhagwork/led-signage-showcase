import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import FadeIn from "@/components/animation/FadeIn";
import type { CounterItemProps } from "@/types";

const COUNT_DURATION_MS = 2000;

/** بطاقة عداد متحرك (count-up) تبلش تعد أول ما تدخل الشاشة — مستخدمة بصفحة About. */
const CounterItem = ({ item, title }: CounterItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  /** كشف الدخول للشاشة من framer-motion بدل IntersectionObserver يدوي — نفس المكتبة المستعملة بالأنيميشن */
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId = 0;
    const startTime = performance.now();

    /* حلقة requestAnimationFrame محسوبة على الوقت المنقضي: مربوطة بإطارات الشاشة،
       ما بتدرفت، وبتتوقّف لحالها لما التبويب يروح للخلفية. */
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / COUNT_DURATION_MS, 1);
      setCount(Math.round(progress * item.end));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, item.end]);

  return (
    <FadeIn direction="up" distance={40} duration={0.6} viewportAmount={0}>
      <div
        ref={ref}
        className="bg-surface-elevated/80 border border-white/10 rounded-2xl p-6 text-center shadow-xl flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300"
      >
        <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
          {count}
          {item.suffix}
        </div>
        <div className="text-white/80 text-xs md:text-sm font-medium">
          {title}
        </div>
      </div>
    </FadeIn>
  );
};

export default CounterItem;
