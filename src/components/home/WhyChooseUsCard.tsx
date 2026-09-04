import type { WhyChooseUsCardProps } from "@/types";

/**
 * بطاقة واحدة بشبكة "لماذا تختارنا" — أيقونة + عنوان + وصف، بمقاسين (عادي/مميّز).
 * الكلاسات هون منسوخة حرفياً من الكود الأصلي قبل الفصل، بدون أي تغيير بالستايل.
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
          ? "h-full group p-8 md:p-10 rounded-3xl bg-surface border border-white/10 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 flex flex-col justify-between relative overflow-hidden text-right cursor-pointer"
          : "h-full group p-8 rounded-3xl bg-surface border border-white/10 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 flex flex-col justify-between text-right cursor-pointer"
      }
    >
      {featured && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-primary/15" />
      )}

      <div
        className={
          featured
            ? "relative z-10 transition-transform duration-500 group-hover:translate-x-1"
            : "transition-transform duration-500 group-hover:translate-x-1"
        }
      >
        <div
          className={
            featured
              ? "w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-8 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white"
              : "w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white"
          }
        >
          <Icon className="w-7 h-7 transition-colors duration-300" />
        </div>

        <h3
          className={
            featured
              ? "text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-primary"
              : "text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-primary"
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
