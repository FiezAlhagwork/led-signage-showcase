import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

/** أنواع المكوّنات المشتركة بين أكتر من قسم (components/ui) */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  /**
   * لما ينمرّر، المكوّن بيرندر <Link> بنفس الستايل بدل <button>.
   * ضروري لأن زر جوا رابط (<a><button>) HTML غير صالح وبيربك قارئات الشاشة.
   */
  to?: string;
}

export interface CardProps {
  children: ReactNode;
  /** خلفية البطاقة والزوايا وأي فروقات خاصة بالصفحة (مثلاً: "bg-black/40 rounded-3xl") */
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  /** لما ينمرّر، البطاقة كلها بتصير رابط */
  to?: string;
  /**
   * تأثيرات المرور بتشتغل بس لما تكون البطاقة قابلة للضغط فعلاً (`to` أو `onClick`).
   * بطاقة ساكنة بتضل ساكنة — حتى ما يوهم التأثير المستخدم إنها بتفتح شي.
   */
}

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  /**
   * وسم العنوان. الافتراضي h2 لأن أغلب الاستعمالات أقسام داخل الصفحة الرئيسية.
   * الصفحات اللي هالعنوان هو عنوانها الرئيسي بتمرّر "h1" — لازم واحد بكل صفحة.
   */
  as?: "h1" | "h2";

  // ألوان اختيارية
  titleColor?: string;
  descriptionColor?: string;
  badgeColor?: string;
  badgeBorderColor?: string;
  badgeBgColor?: string;
}

export interface ImageLightboxProps {
  /** الصورة المكبَّرة الحالية — null يعني المودال مقفول */
  image: string | null;
  onClose: () => void;
  /** إلزاميان حتى ما ينحبس نص إنجليزي كقيمة افتراضية جوا المكوّن */
  alt: string;
  closeLabel: string;

  /*
   * التنقّل بين الصور — اختياري بالكامل.
   * بدونه المودال بيشتغل متل قبل تماماً (صفحات المشاريع وSign والطباعة الرقمية).
   */
  onNext?: () => void;
  onPrev?: () => void;
  nextLabel?: string;
  prevLabel?: string;
  /** نص العدّاد تحت الصورة، مثلاً "3 / 12" */
  counter?: string;
  /** بالعربي السهم اليسار بصرياً = الصورة التالية */
  isRtl?: boolean;
}

export interface PaginationDotsProps {
  count: number;
  activeIndex: number;
  orientation?: "horizontal" | "vertical";
}
