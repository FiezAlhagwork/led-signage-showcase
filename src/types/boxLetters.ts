import type en from "@/locales/en.json";

/** مفاتيح منتجات الحروف البارزة — مقيّدة بملف الترجمة */
export type BoxLetterKey = keyof typeof en.boxLetters;

export interface BoxLetterProduct {
  id: BoxLetterKey;
  material: string;
  lightingType: string;
  mountingType: string;
  thickness: string;
  images: {
    off: string;
    on: string;
  };
  defaultIlluminated: boolean;

  specs: {
    materialGrade: string;
    ledType: string;
    ipRating: string;
    warranty: string;
  };
}
