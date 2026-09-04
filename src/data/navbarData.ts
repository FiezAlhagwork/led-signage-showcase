import type { NavLinkItem } from "@/types";

export const navLinks: NavLinkItem[] = [
  { path: "/", labelKey: "home" },
  { path: "/box-letters", labelKey: "boxLetters" },
  { path: "/sign", labelKey: "sign" },
  { path: "/digital-printing", labelKey: "digitalPrinting", hidden: true },
  { path: "/about-us", labelKey: "aboutUs" },
  { path: "/communication", labelKey: "communication" },
];
