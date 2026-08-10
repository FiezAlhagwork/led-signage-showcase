import img1 from "../assets/car2.jpg";
import img4 from "../assets/about2.jpg";
import img3 from "../assets/pro5.jpg";

export interface SignItem {
  id: number;
  image: string;
}

export const signSlidesData: SignItem[] = [
  {
    id: 1,
    image: img1,
  },
  {
    id: 3,
    image: img4,
  },
  {
    id: 4,
    image: img3,
  },
];
