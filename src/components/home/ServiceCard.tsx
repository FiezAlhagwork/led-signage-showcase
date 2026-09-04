import { ArrowLeft, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import { useLocalizedPath } from "@/context/useLanguage";
import type { ServiceCardProps } from "@/types";

/** بطاقة خدمة واحدة بشبكة "خدماتنا" — صورة + عنوان + وصف + رابط "اقرأ المزيد". */
const ServiceCard = ({
  image,
  title,
  description,
  learnMoreText,
  path,
  isAr,
}: ServiceCardProps) => {
  const localizedPath = useLocalizedPath();

  /*
   * البطاقة كلها هي الرابط، مو بس سطر "اقرأ المزيد" — هيك تأثير المرور صادق
   * وهدف الضغط أكبر. خدمة بلا مسار (مخفية عن قصد) بتنعرض ساكنة بلا رابط.
   */
  return (
    <Card
      to={path ? localizedPath(path) : undefined}
      className="bg-black/40 rounded-3xl"
    >
      <div className="relative h-80 w-full overflow-hidden bg-zinc-900">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="p-8 flex flex-col grow justify-between space-y-4">
        <div>
          <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">{description}</p>
        </div>

        <span
          className={`inline-flex items-center gap-2 font-semibold text-sm pt-2 ${
            path
              ? "text-primary transition-transform duration-300 group-hover:translate-x-1"
              : "text-primary/50"
          }`}
        >
          {learnMoreText}
          {path &&
            (isAr ? (
              <ArrowLeft className="w-4 h-4" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            ))}
        </span>
      </div>
    </Card>
  );
};

export default ServiceCard;
