import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/useLanguage";
import Button from "@/components/ui/Button";
import type { FieldChangeEvent } from "@/types";
import { contactData } from "@/data/contactData";
import SectionHeader from "@/components/ui/SectionHeader";
import FormField from "@/components/ui/FormField";
import ContactInfoRow from "@/components/ui/ContactInfoRow";
import FadeIn from "@/components/animation/FadeIn";
import { contactInfoRows } from "@/data/contactInfoData";
import { ArrowUpRight } from "lucide-react";

const Communication = () => {
  const { t, isRtl: isAr } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: FieldChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const text = t.contact.whatsappTemplate
      .replace("{name}", formData.fullName)
      .replace("{phone}", formData.phone)
      .replace("{project}", formData.projectType)
      .replace("{message}", formData.message);

    window.open(
      `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <main
      id="contact"
      className="relative w-full py-24 text-white overflow-hidden bg-dark-bg font-(family-name:--font-main)"
      dir="ltr"
    >
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn
          trigger="mount"
          direction="down"
          distance={20}
          duration={0.6}
          dir={isAr ? "rtl" : "ltr"}
        >
          <SectionHeader
            as="h1"
            badge={t.contact.tag}
            title={t.contact.title}
            description={t.contact.description}
            centered={true}
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <FadeIn
            trigger="mount"
            direction={isAr ? "right" : "left"}
            distance={30}
            duration={0.6}
            delay={0.2}
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
                <FormField
                  label={t.contact.fullName}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.placeholderName}
                  isAr={isAr}
                />

                <FormField
                  label={t.contact.phone}
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.placeholderPhone}
                  isAr={isAr}
                />
              </div>

              <FormField
                label={t.contact.projectType}
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                placeholder={t.contact.placeholderProject}
                isAr={isAr}
              />

              <FormField
                as="textarea"
                label={t.contact.message}
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t.contact.placeholderMessage}
                isAr={isAr}
              />

              <Button
                type="submit"
                variant="primary"
                className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-2xl font-bold shadow-lg shadow-primary/20 transition-all cursor-pointer"
              >
                {t.contact.sendBtn} ✉
              </Button>
            </form>
          </FadeIn>

          <FadeIn
            trigger="mount"
            direction={isAr ? "left" : "right"}
            distance={30}
            duration={0.6}
            delay={0.3}
            className="lg:col-span-5 space-y-6 px-2"
            dir={isAr ? "rtl" : "ltr"}
          >
            {contactInfoRows.map((row) => (
              <ContactInfoRow
                key={row.id}
                icon={row.icon}
                href={row.href?.(contactData)}
                label={t.contact[row.labelKey]}
                value={
                  row.valueKey
                    ? t.contact[row.valueKey]
                    : row.valueField
                      ? contactData[row.valueField]
                      : ""
                }
                isAr={isAr}
              />
            ))}

            <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl h-48 relative mt-2">
              <iframe
                title={t.a11y.mapTitle}
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
                className="absolute top-2 left-2 bg-black/70 hover:bg-primary text-white text-[10px] px-2.5 py-1 rounded-lg backdrop-blur-md transition-all border border-white/10 flex items-center gap-1"
              >
                <span>{t.contact.mapBtn}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
};

export default Communication;
