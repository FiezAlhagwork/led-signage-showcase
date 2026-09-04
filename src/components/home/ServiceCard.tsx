import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "@/components/ui/Card";
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
  return (
    <Card className="bg-black/40 rounded-3xl">
      <div className="relative h-80 w-full overflow-hidden bg-zinc-900">
        <img
          src={image}
          alt={title}
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

        <Link
          to={path || ""}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm pt-2 group-hover:translate-x-1 transition-transform"
        >
          <span>{learnMoreText}</span>
          {isAr ? (
            <ArrowLeft className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;
