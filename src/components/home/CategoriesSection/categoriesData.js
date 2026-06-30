import womenCategory from '../../../assets/images/categories/women.jpg'
import menCategory from '../../../assets/images/categories/men.jpg'
import blouseCategory from '../../../assets/images/categories/blouse.jpg'
import bagCategory from '../../../assets/images/categories/bag.jpg'
import socksCategory from '../../../assets/images/categories/socks.jpg'
import tshirtCategory from '../../../assets/images/categories/tshirt.jpg'





const categories = [
  {
    id: 1,
    title: "زنانه",
    image: womenCategory,
    link: "/products?gender=women",
  },
  {
    id: 2,
    title: "مردانه",
    image: menCategory,
    link: "/products?gender=men",
  },
  {
    id: 3,
    title: "کیف",
    image: bagCategory,
    link: "/products?category=bag",
  },
  {
    id: 4,
    title: "جوراب",
    image: socksCategory,
    link: "/products?category=socks",
  },
  {
    id: 5,
    title: "تیشرت",
    image: tshirtCategory,
    link: "/products?category=tshirt",
  },
  {
    id: 6,
    title: "شومیز",
    image: blouseCategory,
    link: "/products?category=blouse",
  },
];

export default categories;