import type { PaginationDotsProps } from "@/types";

/** نقاط تنقّل موحّدة لكاروسيل — تدعم اتجاه عمودي أو أفقي. */
const PaginationDots = ({
  count,
  activeIndex,
  orientation = "horizontal",
}: PaginationDotsProps) => {
  const isVertical = orientation === "vertical";

  return (
    <div className={isVertical ? "flex flex-col gap-2.5" : "flex gap-1.5"}>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className={`rounded-full transition-all duration-300 ${
            isVertical
              ? `w-2 ${activeIndex === idx ? "h-6 bg-primary" : "h-2 bg-white/20"}`
              : `h-1.5 ${activeIndex === idx ? "w-5 bg-primary" : "w-1.5 bg-white/20"}`
          }`}
        />
      ))}
    </div>
  );
};

export default PaginationDots;
