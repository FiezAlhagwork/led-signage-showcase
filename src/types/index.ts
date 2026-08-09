export type Language = "EN" | "AR";

export interface BoxLetterProduct {
  id: string;
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