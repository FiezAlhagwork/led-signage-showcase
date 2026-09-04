import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ImageLightboxProps } from "@/types";

/** مودال موحّد لتكبير صورة، يحل محل التطبيقات الثلاثة المكرّرة (Sign/DigitalPrinting/Projects). */
const ImageLightbox = ({
  image,
  onClose,
  alt,
  closeLabel,
}: ImageLightboxProps) => {
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
            <img
              src={image}
              alt={alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
