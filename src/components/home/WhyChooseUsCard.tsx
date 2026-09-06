import type { WhyChooseUsCardProps } from "@/types";

/**
 * بطاقة واحدة بشبكة "لماذا تختارنا" — أيقونة + عنوان + وصف، بمقاسين (عادي/مميّز).
 * بطاقة عرض ساكنة: ما بتفتح ولا بتوصّل لمكان، فبلا تأثيرات مرور ولا مؤشّر ضغط.
 */
const WhyChooseUsCard = ({
  icon: Icon,
  title,
  description,
  subDescription,
  featured = false,
}: WhyChooseUsCardProps) => {
  return (
    <div
      className={
        /* بلا backdrop-blur: خلفية البطاقة (bg-surface) معتمة تماماً فالفلتر
           كان يتحسب على GPU وما بيبيّن منه ولا بكسل */
        featured
          ? "h-full p-8 md:p-10 rounded-3xl bg-surface border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden text-right"
          : "h-full p-8 rounded-3xl bg-surface border border-white/10 shadow-xl flex flex-col justify-between text-right"
      }
    >
      {featured && (
        <div className="glow absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 pointer-events-none [--glow-color:rgba(255,107,0,0.06)]" />
      )}

      <div className={featured ? "relative z-10" : undefined}>
        <div
          className={
            featured
              ? "w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-8 shadow-md"
              : "w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 shadow-sm"
          }
        >
          <Icon className="w-7 h-7" />
        </div>

        <h3
          className={
            featured
              ? "text-2xl md:text-3xl font-bold text-white mb-4"
              : "text-xl font-bold text-white mb-3"
          }
        >
          {title}
        </h3>

        <p
          className={
            featured
              ? "text-sm text-white/80 leading-relaxed mb-4"
              : "text-sm text-white/70 leading-relaxed"
          }
        >
          {description}
        </p>

        {featured && subDescription && (
          <p className="text-xs text-white/70 leading-relaxed">
            {subDescription}
          </p>
        )}
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
