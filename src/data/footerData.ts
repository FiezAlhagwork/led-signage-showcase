import type { FooterLinkItem } from "@/types";

/** روابط الفوتر السريعة — النص بيجي من t.footer[labelKey] */
export const footerQuickLinks: FooterLinkItem[] = [
  { kind: "hash", to: "/#home", labelKey: "home" },
  { kind: "hash", to: "/#about", labelKey: "about" },
  { kind: "hash", to: "/#projects", labelKey: "projects" },
  { kind: "hash", to: "/#services", labelKey: "services" },
  { kind: "hash", to: "/#features", labelKey: "whyChooseUs" },
  { kind: "route", to: "/communication", labelKey: "contact" },
];
