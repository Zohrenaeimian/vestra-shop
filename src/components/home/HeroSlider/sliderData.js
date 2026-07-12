import shippingImg from "../../../assets/images/hero/shipping.png";
import bagsImg from "../../../assets/images/hero/bags.png";
import menImg from "../../../assets/images/hero/men.png";
import womenImg from "../../../assets/images/hero/women.png";

const sliderData = [
  {
    id: 1,
    image: shippingImg,
    link: "/products",
    alt:"Free Shipping"
  },

  {
    id: 2,
    image: womenImg,
    link: "/products?gender=women",
    alt:"Women's Collection"
  },

  {
    id: 3,
    image: menImg,
    link: "/products?gender=men",
    alt:"Men's Collection"
  },

  {
    id: 4,
    image: bagsImg,
    link: "/products?category=bag",
    alt:"Bag's Collection"
  },
];

export default sliderData;
