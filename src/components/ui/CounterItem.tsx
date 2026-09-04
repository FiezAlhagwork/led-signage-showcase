import { useState, useEffect, useRef } from "react";
import FadeIn from "@/components/animation/FadeIn";
import type { CounterItemProps } from "@/types";

/** بطاقة عداد متحرك (count-up) تبلش تعد أول ما تدخل الشاشة — مستخدمة بصفحة About. */
const CounterItem = ({ item, title }: CounterItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000;
    const increment = item.end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= item.end) {
        setCount(item.end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, item.end]);

  return (
    <FadeIn direction="up" distance={40} duration={0.6} viewportAmount={0}>
      <div
        ref={ref}
        className="bg-[#1e1a20]/80 border border-white/10 rounded-2xl p-6 text-center shadow-xl flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300"
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
