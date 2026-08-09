import logo from "../../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const isAr = language === "AR";
  const footerT = t.footer;

  return (
    <footer
      className="relative bg-[#252525] text-white pt-24 pb-12 overflow-hidden border-t border-white/5 w-full max-w-full"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* الخط المائل العلوي */}
      <div className="absolute top-0 left-0 w-full h-16 bg-[#f7f7f7] transform -skew-y-2 origin-top-left pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-full">
        {/* القسم العلوي والشعار */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/10 pb-12 mb-12 gap-6">
          <div className="flex items-center gap-3.5">
            <div>
              <img src={logo} alt="logo " className="h-6 w-18" />
              <span className="block text-[11px] text-white/50 mt-1">
                {footerT.brandSubtitle}
              </span>
            </div>
          </div>

          {/* السوشيال ميديا */}
          <div className="flex items-center gap-3 text-white/70"></div>
        </div>

        {/* الروابط ومعلومات التواصل */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide border-l-4 border-[#FF6B00] pl-3">
              {footerT.quickLinksTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-white/70 text-sm">
              <ul className="space-y-3">
                <li>
                  <HashLink
                    smooth
                    to="/#home"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {isAr ? (
                      <FaChevronLeft className="text-xs text-primary shrink-0" />
                    ) : (
                      <FaChevronRight className="text-xs text-primary shrink-0" />
                    )}
                    <span>{footerT.home}</span>
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#about"
                    className="hover:text-[#FF6B00] transition-colors flex items-center gap-2"
                  >
                    {isAr ? (
                      <FaChevronLeft className="text-xs text-[#FF6B00] flex-shrink-0" />
                    ) : (
                      <FaChevronRight className="text-xs text-[#FF6B00] flex-shrink-0" />
                    )}
                    <span>{footerT.about}</span>
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#projects"
                    className="hover:text-[#FF6B00] transition-colors flex items-center gap-2"
                  >
                    {isAr ? (
                      <FaChevronLeft className="text-xs text-[#FF6B00] flex-shrink-0" />
                    ) : (
                      <FaChevronRight className="text-xs text-[#FF6B00] flex-shrink-0" />
                    )}
                    <span>{footerT.projects}</span>
                  </HashLink>
                </li>
              </ul>

              <ul className="space-y-3">
                <li>
                  <HashLink
                    smooth
                    to="/#services"
                    className="hover:text-[#FF6B00] transition-colors flex items-center gap-2"
                  >
                    {isAr ? (
                      <FaChevronLeft className="text-xs text-[#FF6B00] flex-shrink-0" />
                    ) : (
                      <FaChevronRight className="text-xs text-[#FF6B00] flex-shrink-0" />
                    )}
                    <span>{footerT.services}</span>
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#features"
                    className="hover:text-[#FF6B00] transition-colors flex items-center gap-2"
                  >
                    {isAr ? (
                      <FaChevronLeft className="text-xs text-[#FF6B00] flex-shrink-0" />
                    ) : (
                      <FaChevronRight className="text-xs text-[#FF6B00] flex-shrink-0" />
                    )}
                    <span>{footerT.whyChooseUs}</span>
                  </HashLink>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#FF6B00] transition-colors flex items-center gap-2"
                  >
                    {isAr ? (
                      <FaChevronLeft className="text-xs text-[#FF6B00] flex-shrink-0" />
                    ) : (
                      <FaChevronRight className="text-xs text-[#FF6B00] flex-shrink-0" />
                    )}
                    <span>{footerT.contact}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide border-l-4 border-[#FF6B00] pl-3">
              {footerT.contactInfoTitle}
            </h3>

            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="break-words">{footerT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FF6B00] flex-shrink-0" />
                <div className="flex flex-col" dir="ltr">
                  <span>{footerT.phone1}</span>
                  <span>{footerT.phone2}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#FF6B00] flex-shrink-0" />
                <span className="break-all" dir="ltr">
                  {footerT.email}
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
