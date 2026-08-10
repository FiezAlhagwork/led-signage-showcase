/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitcher from "../ui/LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { language, setLanguage } = useLanguage();
  const isAr = language === "AR";

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const navT = (useLanguage() as any).t?.nav || {};

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight - 10;

      if (currentScrollY < 50 || isAtBottom) {
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { name: navT.home || (isAr ? "الرئيسية" : "Home"), path: "/" },
    {
      name: navT.boxLetters || (isAr ? "حروف بارزة" : "Box Letters"),
      path: "/box-letters",
    },
    { name: navT.sign || (isAr ? "لوحات" : "Sign"), path: "/sign" },
    // { name: navT.digitalPrinting || (isAr ? "طباعة رقمية" : "Digital Printing"), path: "/digital-printing" },
    { name: navT.aboutUs || (isAr ? "من نحن" : "About Us"), path: "/about-us" },
    {
      name: navT.communication || (isAr ? "تواصل معنا" : "Contact"),
      path: "/communication",
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full max-w-full overflow-x-hidden z-50 transition-all duration-500 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-black/15 backdrop-blur-md py-4 border-b border-white/5 shadow-lg"
            : "bg-transparent py-6 border-transparent"
        }`}
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 max-w-full">
          {/* 1. اللوجو */}
          <div className="shrink-0">
            <NavLink to="/">
              <img
                src={logo}
                alt="Noor Logo"
                className="h-5 md:h-8  w-auto object-contain"
              />
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-white">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[13px] xl:text-[14px] font-semibold transition-all whitespace-nowrap ${isActive ? "text-primary" : "text-white/80 hover:text-primary"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block shrink-0">
            <Button
              size="md"
              variant="secondary"
              onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
            >
              {language === "AR" ? "English" : "العربية"}
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white p-2 focus:outline-none shrink-0"
            aria-label="Open Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed top-0 ${isAr ? "right-0 border-l" : "left-0 border-r"} h-full w-[75%] sm:w-75 max-w-full bg-dark-bg z-60 flex flex-col p-6 sm:p-8 border-white/10 shadow-2xl transition-transform duration-500 ease-in-out overflow-y-hidden ${
          isOpen
            ? "translate-x-0"
            : isAr
              ? "translate-x-full"
              : "-translate-x-full"
        }`}
        dir={isAr ? "rtl" : "ltr"}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="self-end text-white bg-white/10 p-2 rounded-full mb-8 hover:bg-white/20 transition-colors"
          aria-label="Close Menu"
        >
          ✕
        </button>
        <div
          className={`flex flex-col gap-5 ${isAr ? "text-right" : "text-left"}`}
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-base sm:text-lg font-bold text-white hover:text-primary transition-colors"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="mt-auto pt-6 border-t border-white/10">
          <LanguageSwitcher />
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
