import img3 from "@/assets/pexels-psco-137071.webp";
import img1 from "@/assets/Стоковое-фото-Large-format-printing-machine-in-operation_-Industry-_-Adobe-Stock.webp";
import img2 from "@/assets/WhatsApp-Image-2025-04-19-at-21.30.50.webp";
import machineImageSrc from "@/assets/f90ba951d393bfac8ca118850d36fbd5187989f086a0f46718bca9af8cf6f53b.webp";
import vinylRollsImageSrc from "@/assets/4998a328d122ee9b15d03ddd68d8e009.webp";
import machineImageSrck from "@/assets/pexels-pixabay-236748.webp";
import type { DigitalPrintingSlide } from "@/types";

/** كل شريحة مربوطة بنصّها عبر contentKey (مو بترتيب المصفوفة) */
export const digitalPrintingSlides: DigitalPrintingSlide[] = [
  {
    id: 1,
    image: img1,
    secondaryImage: machineImageSrc,
    contentKey: "slide1",
  },
  {
    id: 2,
    image: img2,
    secondaryImage: vinylRollsImageSrc,
    contentKey: "slide2",
  },
  {
    id: 3,
    image: img3,
    secondaryImage: machineImageSrck,
    contentKey: "slide3",
  },
];
