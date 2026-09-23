import { useLanguage } from "@/context/useLanguage";
import Button from "@/components/ui/Button";
import { contactData } from "@/data/contactData";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactInfoRow from "@/components/ui/ContactInfoRow";
import FadeIn from "@/components/animation/FadeIn";
import { contactInfoRows } from "@/data/contactInfoData";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const Communication = () => {
  const { t } = useLanguage();

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
        >
          <SectionHeader
            as="h1"
            badge={t.contact.tag}
            title={t.contact.title}
            description={t.contact.description}
            centered={true}
          />
        </FadeIn>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* بطاقة الواتساب — بديل الفورم: نقطة تواصل وحدة واضحة */}
          <FadeIn
            trigger="mount"
            direction="up"
            distance={30}
            duration={0.6}
            delay={0.2}
            className="p-8 md:p-10 rounded-3xl bg-surface/60 border border-white/10 shadow-2xl backdrop-blur-md text-center"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
              <MessageCircle className="w-8 h-8" />
            </div>

            <h2 className="text-xl md:text-2xl font-extrabold text-white mb-6">
              {t.contact.whatsappTitle}
            </h2>

            <Button
              href={`https://wa.me/${contactData.whatsappNumber}`}
              size="lg"
              variant="primary"
              className="w-full"
            >
              {t.contact.whatsappCta}
            </Button>
          </FadeIn>

          <FadeIn
            trigger="mount"
            direction="up"
            distance={30}
            duration={0.6}
            delay={0.3}
            className="space-y-4 px-2"
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
              />
            ))}
          </FadeIn>

          <FadeIn
            trigger="mount"
            direction="up"
            distance={30}
            duration={0.6}
            delay={0.4}
          >
            <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl h-64 relative">
              <iframe
                title={t.a11y.mapTitle}
                src={contactData.mapEmbed}
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
                className="absolute top-2 left-2 bg-dark-bg/80 hover:bg-primary text-white text-[10px] px-2.5 py-1 rounded-lg backdrop-blur-md transition-all border border-white/10 flex items-center gap-1"
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
