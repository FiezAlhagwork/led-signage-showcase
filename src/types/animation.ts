import type { MouseEventHandler, ReactNode } from "react";

/** الجهة اللي العنصر "قادم منها" (متل تسمية animate.css: fadeInUp/fadeInDown/...) */
export type FadeDirection = "up" | "down" | "left" | "right" | "none";

export interface FadeInProps {
  children: ReactNode;
  direction?: FadeDirection;
  /** مسافة الإزاحة بالبكسل (تُتجاهل إذا direction="none") */
  distance?: number;
  /** تصغير مبدئي اختياري (مثلاً 0.8 يعني يبلش صغير ويكبر لحجمه الطبيعي) */
  scale?: number;
  duration?: number;
  delay?: number;
  /** "mount": يشتغل فور ظهور العنصر. "inView": يشتغل أول ما يدخل الشاشة بالسكرول */
  trigger?: "mount" | "inView";
  /** نسبة ظهور العنصر المطلوبة لتشغيل الأنيميشن (فقط مع trigger="inView") */
  viewportAmount?: number;
  className?: string;
  dir?: "ltr" | "rtl";
}

export interface StaggerContainerProps {
  children: ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  viewportAmount?: number;
  className?: string;
}

export interface StaggerItemProps {
  children: ReactNode;
  direction?: FadeDirection;
  distance?: number;
  duration?: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
