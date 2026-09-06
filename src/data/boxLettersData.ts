import type { BoxLetterProduct } from "@/types";

import image1Off from "@/assets/image1-dark.webp";
import image1On from "@/assets/image1-light.webp";
import image2Off from "@/assets/image2-dark.webp";
import image2On from "@/assets/image2-light.webp";
import image3Off from "@/assets/image3-dark.webp";
import image3On from "@/assets/image3-light.webp";
import image4Off from "@/assets/image4-dark.webp";
import image4On from "@/assets/image4-light.webp";
import image5Off from "@/assets/image5-dark.webp";
import image5On from "@/assets/image5-light.webp";
import image6Off from "@/assets/image6-dark.webp";
import image6On from "@/assets/image6-light.webp";
import image8Off from "@/assets/image8-dark.webp";
import image8On from "@/assets/image8-light.webp";
import image9Off from "@/assets/image9-dark.webp";
import image9On from "@/assets/image9-light.webp";
import image14Off from "@/assets/image14-dark.webp";
import image14On from "@/assets/image14-light.webp";
import image15Off from "@/assets/image15-dark.webp";
import image15On from "@/assets/image15-light.webp";
import image16Off from "@/assets/image16-dark.webp";
import image16On from "@/assets/image16-light.webp";
import image17Off from "@/assets/image17-dark.webp";
import image17On from "@/assets/image17-light.webp";

export const boxLetterProducts: BoxLetterProduct[] = [
  {
    id: "product-01",
    material: "Opal White Cast Acrylic (30mm) + Aluminum",
    lightingType: "Internal Front & Side Diffusion LED",
    mountingType: "Flush Wall Mount / Stud Mount",
    thickness: "30mm - 80mm",
    images: { off: image1Off, on: image1On },
    defaultIlluminated: true,
    specs: {
      materialGrade: "PMMA Cast Acrylic Class A",
      ledType: "IP67 Waterproof 12V DC",
      ipRating: "IP67 Outdoor Rated",
      warranty: "5 Years Manufacturer Guarantee",
    },
  },
  {
    id: "product-02",
    material: "Painted Anodized Aluminum 2.0mm",
    lightingType: "Optional Halo Backlit / Non-Illuminated",
    mountingType: "Standoff Pins / Spacer Rail",
    thickness: "50mm - 120mm",
    images: { off: image2Off, on: image2On },
    defaultIlluminated: true,
    specs: {
      materialGrade: "Alloy 6063 T5 Architectural",
      ledType: "Optional Osram Warm/Cool White",
      ipRating: "IP68 Certified",
      warranty: "5 Years Warranty",
    },
  },
  {
    id: "product-03",
    material: "Opal Acrylic + Extruded Aluminum Rail",
    lightingType: "Linear Dynamic LED Strip / DMX Controlled",
    mountingType: "Integrated Channel Mount",
    thickness: "40mm",
    images: { off: image3Off, on: image3On },
    defaultIlluminated: true,
    specs: {
      materialGrade: "High Impact Opal PMMA",
      ledType: "COB High-CRI 90+ Dynamic",
      ipRating: "IP67 Sealed",
      warranty: "3 Years Warranty",
    },
  },
  {
    id: "product-04",
    material: "Stainless Steel / Brass / Corten / Aluminum",
    lightingType: "Halo Backlit / Front Cutout Acrylic Glow",
    mountingType: "Threaded Rear Pins / Standoffs",
    thickness: "20mm - 100mm",
    images: { off: image4Off, on: image4On },
    defaultIlluminated: false,
    specs: {
      materialGrade: "AISI 304 / 316 Marine Grade Steel",
      ledType: "Osram Backlit LED Circuit",
      ipRating: "IP68 Weatherproof",
      warranty: "10 Years Structural Anti-Corrosion Warranty",
    },
  },
  {
    id: "product-05",
    material: "316 Stainless Steel Rim + Cast Opal Acrylic",
    lightingType: "Dual Front + Backlit LED Halo System",
    mountingType: "Architectural Substructure Rail",
    thickness: "60mm",
    images: { off: image5Off, on: image5On },
    defaultIlluminated: true,
    specs: {
      materialGrade: "Industrial Grade Hybrid Composite",
      ledType: "Korean Chip LED 12V High Output",
      ipRating: "IP67 Sealed",
      warranty: "5 Years Full Replacement Guarantee",
    },
  },
  {
    id: "product-06",
    material: "Brushed Stainless Steel 1.5mm",
    lightingType: "Front-Lit Uniform LED Glow",
    mountingType: "Recessed Wall Channel",
    thickness: "45mm",
    images: { off: image6Off, on: image6On },
    defaultIlluminated: true,
    specs: {
      materialGrade: "SUS304 Brushed Finish",
      ledType: "Neutral White 6500K",
      ipRating: "IP66 Rated",
      warranty: "4 Years Warranty",
    },
  },
  {
    id: "product-08",
    material: "Clear Acrylic + Bronze Trim",
    lightingType: "Edge-Lit LED Panel",
    mountingType: "Standoff Pins",
    thickness: "35mm",
    images: { off: image8Off, on: image8On },
    defaultIlluminated: true,
    specs: {
      materialGrade: "Extruded Clear Acrylic",
      ledType: "RGB Addressable LED",
      ipRating: "IP65 Rated",
      warranty: "3 Years Warranty",
    },
  },
  {
    id: "product-09",
    material: "Copper Plated Cutout Letters",
    lightingType: "Halo Backlit",
    mountingType: "Rear Standoff Mount",
    thickness: "30mm",
    images: { off: image9Off, on: image9On },
    defaultIlluminated: true,
    specs: {
      materialGrade: "Copper Alloy C110",
      ledType: "Warm White 3000K",
      ipRating: "IP67 Sealed",
      warranty: "6 Years Warranty",
    },
  },
  {
    id: "product-14",
    material: "Corten Steel Weathered Finish",
    lightingType: "Front Cutout Acrylic Glow",
    mountingType: "Threaded Rear Pins",
    thickness: "22mm",
    images: { off: image14Off, on: image14On },
    defaultIlluminated: false,
    specs: {
      materialGrade: "Corten A Weathering Steel",
      ledType: "N/A",
      ipRating: "IP68 Weatherproof",
      warranty: "10 Years Warranty",
    },
  },
  {
    id: "product-15",
    material: "Rose Gold PVD Stainless Steel",
    lightingType: "Backlit LED Halo System",
    mountingType: "Architectural Substructure Rail",
    thickness: "58mm",
    images: { off: image15Off, on: image15On },
    defaultIlluminated: true,
    specs: {
      materialGrade: "Industrial Hybrid Composite",
      ledType: "Korean Chip 12V",
      ipRating: "IP67 Sealed",
      warranty: "5 Years Warranty",
    },
  },
  {
    id: "product-16",
    material: "Opal White Cast Acrylic + Aluminum",
    lightingType: "Side Diffusion LED",
    mountingType: "Flush Wall Mount",
    thickness: "32mm",
    images: { off: image16Off, on: image16On },
    defaultIlluminated: true,
    specs: {
      materialGrade: "PMMA Cast Acrylic Class A",
      ledType: "IP67 Waterproof 12V DC",
      ipRating: "IP67 Outdoor Rated",
      warranty: "5 Years Warranty",
    },
  },
  {
    id: "product-17",
    material: "Titanium Coated Aluminum",
    lightingType: "Optional Halo Backlit",
    mountingType: "Standoff Pins",
    thickness: "48mm",
    images: { off: image17Off, on: image17On },
    defaultIlluminated: true,
    specs: {
      materialGrade: "Alloy 6063 T5",
      ledType: "Warm/Cool White",
      ipRating: "IP68 Certified",
      warranty: "5 Years Warranty",
    },
  },
];
