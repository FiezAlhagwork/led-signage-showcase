import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ImageLightboxProps } from "@/types";

/** مودال موحّد لتكبير صورة، يحل محل التطبيقات الثلاثة المكرّرة (Sign/DigitalPrinting/Projects). */
const ImageLightbox = ({
  image,
  onClose,
  alt,
  closeLabel,
  onNext,
  onPrev,
  nextLabel,
  prevLabel,
  counter,
  isRtl = false,
}: ImageLightboxProps) => {
  const isOpen = image !== null;

  /* Esc للإغلاق وأسهم الكيبورد للتنقّل — بيشتغل حتى بدون أزرار ظاهرة */
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      /* بالـRTL اتجاه الأسهم بينعكس حتى يوافق ترتيب الصور على الشاشة */
      if (e.key === "ArrowLeft") {
        (isRtl ? onNext : onPrev)?.();
      } else if (e.key === "ArrowRight") {
        (isRtl ? onPrev : onNext)?.();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, onNext, onPrev, isRtl]);

  const hasNavigation = Boolean(onNext && onPrev);

  /* الزر على يسار الشاشة ينقّل للصورة التالية بالعربي وللسابقة بالإنجليزي */
  const onLeftClick = isRtl ? onNext : onPrev;
  const onRightClick = isRtl ? onPrev : onNext;
  const leftLabel = isRtl ? nextLabel : prevLabel;
  const rightLabel = isRtl ? prevLabel : nextLabel;

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-black/60 hover:bg-primary text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer";

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={onClose}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label={closeLabel}
              title={closeLabel}
              className="absolute -top-12 right-0 md:-right-4 bg-primary hover:bg-primary-hover text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors z-50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {hasNavigation && (
              <>
                <button
                  onClick={onLeftClick}
                  aria-label={leftLabel}
                  title={leftLabel}
                  className={`${arrowClass} left-1 md:-left-14`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={onRightClick}
                  aria-label={rightLabel}
                  title={rightLabel}
                  className={`${arrowClass} right-1 md:-right-14`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <img
              src={image}
              alt={alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {counter && (
              <span
                dir="ltr"
                className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-white/70 text-xs font-mono tracking-wider"
              >
                {counter}
              </span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
