import  img1  from "../assets/pexels-lolimjoshingyou-12397609.jpg";
import  img4  from"../assets/pexels-introspectivedsgn-4061549.jpg";
import  img3  from"../assets/pexels-chetanvlad-18088490.jpg";
import  img2  from"../assets/pexels-biravencrow-33166275.jpg"

export interface SignItem {

  id: number;
  image: string;

}

export const signSlidesData: SignItem[] = [
  {
    id: 1,
    image: img1 ,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img4,
  },
  {
    id:4,
    image:img3,
  },
  


];