import Shoe1 from "../assets/Home/shoe1.svg";
import Shoe2 from "../assets/Home/shoe2.png";
import Shoe3 from "../assets/Home/shoe3.png";
import Shoe4 from "../assets/Home/shoe4.png";
import Shoe5 from "../assets/Home/shoe5.png";
import idOne from "../assets/Products/id-1.jpg";
import idTwo from "../assets/Products/id-1.2.jpg";
import idThree from "../assets/Products/id-1.3.jpg";
import idFour from "../assets/Products/id-1.4.jpg";

export const images = {
  Shoe1,
  Shoe2,
  Shoe3,
  Shoe4,
  Shoe5,
  idOne,
  idTwo,
  idThree,
  idFour,
};

export const ProductDrop = [
  {
    id: 1,
    type: "new",
    image: Shoe1,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: "125",
  },
  {
    id: 2,
    type: "featured",
    image: Shoe5,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: "150",
  },
  {
    id: 3,
    type: "upcoming",
    image: Shoe3,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: "110",
  },
  {
    id: 4,
    type: "special",
    image: Shoe4,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: "80",
  },
];

export const ProductImages = [
  { id: 1, image: idOne },
  { id: 2, image: idTwo },
  { id: 3, image: idThree },
  { id: 4, image: idFour },
];

export const Colors = [
  { id: "gray", color: "bg-gray-700" },
  { id: "green", color: "bg-green-700" },
];

export const Sizes = [
  { id: "normal", size: "40" },
  { id: "large", size: "41" },
  { id: "extra-large", size: "42" },
  { id: "extra-extra-large", size: "43" },
];
