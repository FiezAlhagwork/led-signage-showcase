import logo from "@/assets/alnoor_icon.webp";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "@/context/useLanguage";
import { footerQuickLinks } from "@/data/footerData";
import { contactData } from "@/data/contactData";
import type { FooterLinkItem } from "@/types";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const localizedPath = useLocalizedPath();
  const footerT = t.footer;

  const renderLink = (item: FooterLinkItem) => {
    const className =
      "hover:text-primary transition-colors flex items-center gap-2";
    const content = (
      <>
        <ChevronRight className="w-3 h-3 text-primary shrink-0" />
        <span>{footerT[item.labelKey]}</span>
      </>
    );

    /* "/#about" بيصير "/ar/#about" — البادئة بتنضاف قبل علامة الـhash */
    const [path, hash] = item.to.split("#");
    const localized = localizedPath(path === "/" ? "/" : path.replace(/\/$/, ""));
    const to = hash ? `${localized}#${hash}` : localized;

    return (
      <li key={item.to}>
        {item.kind === "hash" ? (
          <HashLink smooth to={to} className={className}>
            {content}
          </HashLink>
        ) : (
          <Link to={to} className={className}>
            {content}
          </Link>
        )}
      </li>
    );
  };

  return (
    <footer className="relative bg-surface-dark text-white pt-24 pb-12 overflow-hidden border-t border-white/5 w-full max-w-full">
      {/* الشريط المائل كان #f7f7f7 (شبه أبيض) — الشي الفاتح الوحيد بالموقع
          وكان بيطلع ناشز فوق القاعدة البنفسجية، فصار بلون الهوية */}
      <div className="absolute top-0 left-0 w-full h-16 bg-accent transform -skew-y-2 origin-top-left pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/10 pb-12 mb-12 gap-6">
          <div className="flex items-center gap-3.5">
            <div>
              {/* w-auto مقصود: الشعار مربّع، وعرض ثابت كان بيمطّه */}
              <img
                src={logo}
                alt={t.a11y.logo}
                className="h-10 w-auto object-contain"
              />
              <span className="block text-[11px] text-white/50 mt-1">
                {footerT.brandSubtitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-white/70"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide border-l-4 border-primary pl-3">
              {footerT.quickLinksTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-white/70 text-sm">
              <ul className="space-y-3">
                {footerQuickLinks.slice(0, 3).map(renderLink)}
              </ul>

              <ul className="space-y-3">
                {footerQuickLinks.slice(3).map(renderLink)}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide border-l-4 border-primary pl-3">
              {footerT.contactInfoTitle}
            </h3>

            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span className="wrap-break-word">{footerT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <div className="flex flex-col" dir="ltr">
                  <span>{contactData.phone}</span>
                  <span>{contactData.phoneSecondary}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="break-all" dir="ltr">
                  {contactData.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center text-xs text-white/50 text-center gap-2">
          <p>© 2026. {footerT.rights}</p>
          <p>{footerT.developer}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
