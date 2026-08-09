import type { BoxLetterProduct } from "../types";

import image1Off from "../assets/image1-dark.png";
import image1On from "../assets/image1-light.png";
import image2Off from "../assets/image2-dark.png";
import image2On from "../assets/image2-light.png";
import image3Off from "../assets/image3-dark.png";
import image3On from "../assets/image3-light.png";
import image4Off from "../assets/image4-dark.png";
import image4On from "../assets/image4-light.png";
import image5Off from "../assets/image5-dark.png";
import image5On from "../assets/image5-light.png";

export const boxLetterProducts: BoxLetterProduct[] = [
  {
    id: "white-acrylic",
    material: "Opal White Cast Acrylic (30mm) + Aluminum",
    lightingType: "Internal Front & Side Diffusion LED",
    mountingType: "Flush Wall Mount / Stud Mount",
    thickness: "30mm - 80mm",
    images: {
      off: image1Off,
      on: image1On,
    },
    defaultIlluminated: true,
    specs: {
      materialGrade: "PMMA Cast Acrylic Class A",
      ledType: "IP67 Waterproof 12V DC",
      ipRating: "IP67 Outdoor Rated",
      warranty: "5 Years Manufacturer Guarantee",
    },
  },
  {
    id: "aluminum-box",
    material: "Painted Anodized Aluminum 2.0mm",
    lightingType: "Optional Halo Backlit / Non-Illuminated",
    mountingType: "Standoff Pins / Spacer Rail",
    thickness: "50mm - 120mm",
    images: {
      off: image2Off,
      on: image2On,
    },
    defaultIlluminated: true,
    specs: {
      materialGrade: "Alloy 6063 T5 Architectural",
      ledType: "Optional Osram Warm/Cool White",
      ipRating: "IP68 Certified",
      warranty: "5 Years Warranty",
    },
  },
  {
    id: "illuminated-led-strips",
    material: "Opal Acrylic + Extruded Aluminum Rail",
    lightingType: "Linear Dynamic LED Strip / DMX Controlled",
    mountingType: "Integrated Channel Mount",
    thickness: "40mm",
    images: {
      off: image3Off,
      on: image3On,
    },
    defaultIlluminated: true,
    specs: {
      materialGrade: "High Impact Opal PMMA",
      ledType: "COB High-CRI 90+ Dynamic",
      ipRating: "IP67 Sealed",
      warranty: "3 Years Warranty",
    },
  },
  {
    id: "cutout-box-letters",
    material: "Stainless Steel / Brass / Corten / Aluminum",
    lightingType: "Halo Backlit / Front Cutout Acrylic Glow",
    mountingType: "Threaded Rear Pins / Standoffs",
    thickness: "20mm - 100mm",
    images: {
      off: image4Off,
      on: image4On,
    },
    defaultIlluminated: false,
    specs: {
      materialGrade: "AISI 304 / 316 Marine Grade Steel",
      ledType: "Osram Backlit LED Circuit",
      ipRating: "IP68 Weatherproof",
      warranty: "10 Years Structural Anti-Corrosion Warranty",
    },
  },
  {
    id: "illuminated-metal-acrylic",
    material: "316 Stainless Steel Rim + Cast Opal Acrylic",
    lightingType: "Dual Front + Backlit LED Halo System",
    mountingType: "Architectural Substructure Rail",
    thickness: "60mm",
    images: {
      off: image5Off,
      on: image5On,
    },
    defaultIlluminated: true,
    specs: {
      materialGrade: "Industrial Grade Hybrid Composite",
      ledType: "Korean Chip LED 12V High Output",
      ipRating: "IP67 Sealed",
      warranty: "5 Years Full Replacement Guarantee",
    },
  },
];