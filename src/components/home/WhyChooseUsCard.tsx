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
        featured
          ? "h-full p-8 md:p-10 rounded-3xl bg-surface border border-white/10 shadow-xl backdrop-blur-md flex flex-col justify-between relative overflow-hidden text-right"
          : "h-full p-8 rounded-3xl bg-surface border border-white/10 shadow-xl backdrop-blur-md flex flex-col justify-between text-right"
      }
    >
      {featured && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
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
