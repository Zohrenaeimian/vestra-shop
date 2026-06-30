import shippingImg from "../../../assets/images/hero/shipping.png";
import bagsImg from "../../../assets/images/hero/bags.png";
import menImg from "../../../assets/images/hero/men.png";
import womenImg from "../../../assets/images/hero/women.png";

const sliderData = [
  {
    id: 1,
    image: shippingImg,
    link: "/products",
  },

  {
    id: 2,
    image: womenImg,
    link: "/products?gender=women",
  },

  {
    id: 3,
    image: menImg,
    link: "/products?gender=men",
  },

  {
    id: 4,
    image: bagsImg,
    link: "/products?category=bags",
  },
];

export default sliderData;
