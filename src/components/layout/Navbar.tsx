import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";
import Button from "@/components/ui/Button";
import { useLanguage, useLocalizedPath } from "@/context/useLanguage";
import { navLinks } from "@/data/navbarData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  /** ref مو state: القيمة ما بتنعرض بالواجهة، وكـstate كانت تعيد تركيب مستمع السكرول مع كل حركة */
  const lastScrollY = useRef(0);

  const { language, setLanguage, t } = useLanguage();
  const localizedPath = useLocalizedPath();

  const visibleLinks = navLinks.filter((link) => !link.hidden);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    /*
     * ارتفاع الصفحة محفوظ هون وبينحدّث بس لما يتغيّر فعلاً. قراءة scrollHeight
     * بكل حدث سكرول كانت تفرض إعادة تخطيط متزامنة (forced reflow) وتبطّل صلاحية
     * طبقات الرسم، وهي الصفحة فيها بلورات وتلاشيات — فكان السكرول يتقطّع.
     */
    let docHeight = document.documentElement.scrollHeight;
    let ticking = false;

    const update = () => {
      ticking = false;

      const currentScrollY = window.scrollY;
      const isAtBottom = window.innerHeight + currentScrollY >= docHeight - 10;

      if (currentScrollY < 50 || isAtBottom) {
        setShowNavbar(true);
      } else {
        /* بينخفي وقت النزول لتحت وبيرجع يبان وقت الطلوع لفوق */
        setShowNavbar(currentScrollY < lastScrollY.current);
      }

      setIsScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    /* حساب واحد بالفريم بدل واحد بكل حدث سكرول */
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const resizeObserver = new ResizeObserver(() => {
      docHeight = document.documentElement.scrollHeight;
    });
    resizeObserver.observe(document.documentElement);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full max-w-full overflow-x-hidden z-50 transition-all duration-500 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          /*
           * الـbackdrop-blur محصور بالشاشات الكبيرة عن قصد: على الموبايل الشريط
           * بيقع فوق سلايدر الهيرو، وكل تلاشية كانت تجبر المتصفّح يعيد حساب
           * البلور تحته بكل فريم — أثقل سبب للتقطيع. الخلفية المعتمة بتعطي
           * نفس القراءة بكلفة صفر.
           */
          isScrolled
            ? "bg-black/70 lg:bg-black/15 lg:backdrop-blur-md py-4 border-b border-white/5 shadow-lg"
            : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 max-w-full">
          <div className="shrink-0">
            <NavLink to={localizedPath("/")}>
              <img
                src={logo}
                alt={t.a11y.logo}
                className="h-5 md:h-8  w-auto object-contain"
              />
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-white">
            {visibleLinks.map((link) => (
              <NavLink
                key={link.path}
                to={localizedPath(link.path)}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-[13px] xl:text-[14px] font-semibold transition-all whitespace-nowrap ${isActive ? "text-primary" : "text-white/80 hover:text-primary"}`
                }
              >
                {t.nav[link.labelKey]}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block shrink-0">
            <Button
              size="md"
              variant="secondary"
              onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
            >
              {t.nav.switchTo}
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white p-2 focus:outline-none shrink-0"
            aria-label={t.a11y.openMenu}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed top-0 left-0 border-r h-full w-[75%] sm:w-75 max-w-full bg-dark-bg z-60 flex flex-col p-6 sm:p-8 border-white/10 shadow-2xl transition-transform duration-500 ease-in-out overflow-y-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="self-end text-white bg-white/10 p-2 rounded-full mb-8 hover:bg-white/20 transition-colors"
          aria-label={t.a11y.closeMenu}
        >
          <X className="w-5 h-5" />
        </button>
        <div
          className="flex flex-col gap-5 text-natural"
        >
          {visibleLinks.map((link) => (
            <NavLink
              key={link.path}
              to={localizedPath(link.path)}
              onClick={() => setIsOpen(false)}
              className="text-base sm:text-lg font-bold text-white hover:text-primary transition-colors"
            >
              {t.nav[link.labelKey]}
            </NavLink>
          ))}
        </div>
        <div className="mt-auto pt-6 border-t border-white/10 w-full">
          <Button
          className="w-full"
            size="md"
            variant="secondary"
            onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
          >
            {t.nav.switchTo}
          </Button>{" "}
        </div>
      </div>

      {isOpen && (
        /* الطبقة بتغطي الشاشة كاملة، و backdrop-blur عليها كان يعني إعادة بلور
           للصفحة كلها مع كل تلاشية بالسلايدر اللي ضل شغّال تحتها */
        <div
          className="fixed inset-0 bg-black/80 z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
