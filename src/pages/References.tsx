import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/ui/Button";
import { contactData } from "../data/contactData";
import SectionHeader from "../components/ui/SectionHeader";
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  ArrowUpRight,
} from "lucide-react";

let hasAnimatedContact = false;

const ContactUs: React.FC = () => {
  const { t, language } = useLanguage();
  const isAr = language === "AR";

  const shouldAnimate = !hasAnimatedContact;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Name: ${formData.fullName}%0APhone: ${formData.phone}%0AProject: ${formData.projectType}%0AMessage: ${formData.message}`;

    window.open(
      `https://wa.me/${contactData.whatsappNumber}?text=${text}`,
      "_blank",
    );
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 text-white overflow-hidden bg-[#0a0a0a] font-[family-name:var(--font-main)]"
      dir="ltr"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={
            shouldAnimate ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onAnimationComplete={() => {
            hasAnimatedContact = true;
          }}
          dir={isAr ? "rtl" : "ltr"}
        >
          <SectionHeader
            badge={t.contact.tag}
            title={t.contact.title}
            description={t.contact.description}
            centered={true}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={
              shouldAnimate
                ? { opacity: 0, x: isAr ? 30 : -30 }
                : { opacity: 1, x: 0 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-black/40 border border-white/10 shadow-2xl backdrop-blur-md"
            dir={isAr ? "rtl" : "ltr"}
          >
            <div
              className={`text-center mb-8 ${
                isAr ? "text-right" : "text-left"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">
                {t.contact.formTitle}
              </h3>

              <p className="text-sm text-white/60">{t.contact.description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block text-xs font-semibold text-white/70 mb-2 ${
                      isAr ? "text-right" : "text-left"
                    }`}
                  >
                    {t.contact.fullName}
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.placeholderName}
                    className={`w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e75502] transition-all ${
                      isAr ? "text-right" : "text-left"
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-xs font-semibold text-white/70 mb-2 ${
                      isAr ? "text-right" : "text-left"
                    }`}
                  >
                    {t.contact.phone}
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.placeholderPhone}
                    className={`w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e75502] transition-all ${
                      isAr ? "text-right" : "text-left"
                    }`}
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-xs font-semibold text-white/70 mb-2 ${
                    isAr ? "text-right" : "text-left"
                  }`}
                >
                  {t.contact.projectType}
                </label>

                <input
                  type="text"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  placeholder={t.contact.placeholderProject}
                  className={`w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e75502] transition-all ${
                    isAr ? "text-right" : "text-left"
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block text-xs font-semibold text-white/70 mb-2 ${
                    isAr ? "text-right" : "text-left"
                  }`}
                >
                  {t.contact.message}
                </label>

                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.placeholderMessage}
                  className={`w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e75502] transition-all ${
                    isAr ? "text-right" : "text-left"
                  }`}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full bg-[#e75502] hover:bg-[#d04a00] text-white py-3.5 rounded-2xl font-bold shadow-lg shadow-[#e75502]/20 transition-all cursor-pointer"
              >
                {t.contact.sendBtn} ✉
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={
              shouldAnimate
                ? { opacity: 0, x: isAr ? -30 : 30 }
                : { opacity: 1, x: 0 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-6 px-2"
            dir={isAr ? "rtl" : "ltr"}
          >
            <a
              href={contactData.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 shadow-md flex items-center justify-center text-[#e75502] shrink-0 transition-all duration-300 group-hover:bg-[#e75502] group-hover:text-white group-hover:scale-110">
                <MapPin className="w-5 h-5" />
              </div>

              <div className={`grow mx-4 ${isAr ? "text-right" : "text-left"}`}>
                <h4 className="text-sm font-bold text-[#e75502] mb-0.5">
                  {t.contact.addressLabel}
                </h4>

                <p className="text-white/80 text-xs">{t.contact.addressText}</p>
              </div>
            </a>

            <a
              href={`tel:${contactData.phone}`}
              className="flex items-center justify-between py-2 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 shadow-md flex items-center justify-center text-[#e75502] shrink-0 transition-all duration-300 group-hover:bg-[#e75502] group-hover:text-white group-hover:scale-110">
                <Phone className="w-5 h-5" />
              </div>

              <div className={`grow mx-4 ${isAr ? "text-right" : "text-left"}`}>
                <h4 className="text-sm font-bold text-[#e75502] mb-0.5">
                  {t.contact.phoneLabel}
                </h4>

                <p className="text-white/80 text-xs">{contactData.phone}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${contactData.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 shadow-md flex items-center justify-center text-[#e75502] shrink-0 transition-all duration-300 group-hover:bg-[#e75502] group-hover:text-white group-hover:scale-110">
                <MessageSquare className="w-5 h-5" />
              </div>

              <div className={`grow mx-4 ${isAr ? "text-right" : "text-left"}`}>
                <h4 className="text-sm font-bold text-[#e75502] mb-0.5">
                  {t.contact.whatsappLabel}
                </h4>

                <p className="text-white/80 text-xs">{t.contact.whatsappBtn}</p>
              </div>
            </a>

            <div className="flex items-center justify-between py-2 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 shadow-md flex items-center justify-center text-[#e75502] shrink-0 transition-all duration-300 group-hover:bg-[#e75502] group-hover:text-white group-hover:scale-110">
                <Clock className="w-5 h-5" />
              </div>

              <div className={`grow mx-4 ${isAr ? "text-right" : "text-left"}`}>
                <h4 className="text-sm font-bold text-[#e75502] mb-0.5">
                  {t.contact.hoursLabel}
                </h4>

                <p className="text-white/80 text-xs">{t.contact.hoursText}</p>
              </div>
            </div>

            <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl h-48 relative mt-2">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.81627974202166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6d32f7a9!2sVictoria%20St%2C%20West%20Melbourne%20VIC%203003%2C%20Australia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />

              <a
                href={contactData.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 left-2 bg-black/70 hover:bg-[#e75502] text-white text-[10px] px-2.5 py-1 rounded-lg backdrop-blur-md transition-all border border-white/10 flex items-center gap-1"
              >
                <span>{t.contact.mapBtn}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
