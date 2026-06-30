import HeroSlider from "../../components/home/HeroSlider/HeroSlider";
import CategoriesSection from "../../components/home/CategoriesSection/CategoriesSection";
import NewestProducts from "../../components/home/NewestProducts/NewestProducts";
import DiscountProducts from "../../components/home/DiscountProducts/DiscountProducts";
import WomenCollection from "../../components/home/WomenCollection/WomenCollection";
import MenCollection from "../../components/home/MenCollection/MenCollection";
import BestSellerProducts from "../../components/home/BestSellerProducts/BestSellerProducts";
import WhyUs from "../../components/home/WhyUs/WhyUs";
import Newsletter from "../../components/home/Newsletter/Newsletter";

function Home() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8">
      <HeroSlider />

      <CategoriesSection />

      <NewestProducts />

      <DiscountProducts />

      <WomenCollection />

      <MenCollection />

      <BestSellerProducts />


      <WhyUs />

      <Newsletter />
    </div>
  );
}

export default Home;