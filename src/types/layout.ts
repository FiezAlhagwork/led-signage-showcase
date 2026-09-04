import type en from "@/locales/en.json";

export type NavLabelKey = keyof typeof en.nav;
export type FooterLabelKey = keyof typeof en.footer;

export interface NavLinkItem {
  path: string;
  labelKey: NavLabelKey;
  /** مخفي مؤقتاً من القائمة بدون حذف المسار من التطبيق */
  hidden?: boolean;
}

export interface FooterLinkItem {
  /** hash: قسم داخل الصفحة الرئيسية · route: صفحة مستقلة */
  kind: "hash" | "route";
  to: string;
  labelKey: FooterLabelKey;
}
