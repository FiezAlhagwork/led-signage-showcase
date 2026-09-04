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
}

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;

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
}

export interface PaginationDotsProps {
  count: number;
  activeIndex: number;
  orientation?: "horizontal" | "vertical";
}
