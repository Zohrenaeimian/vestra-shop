import HomeTopSection from "../../components/home/HomeTopSection/HomeTopSection";
import DiscountProducts from "../../components/home/DiscountProducts/DiscountProducts";
import GenderBanners from "../../components/home/GenderBanners/GenderBanners";
import NewestProducts from "../../components/home/NewestProducts/NewestProducts";
import BestSellerProducts from "../../components/home/BestSellerProducts/BestSellerProducts";
import BrandsSection from "../../components/home/BrandsSection/BrandsSection";
import WhyUs from "../../components/home/WhyUs/WhyUs";
import Newsletter from "../../components/home/Newsletter/Newsletter";

function Home() {
  return (
    <div className="space-y-10 text-foreground dark:text-cream md:space-y-12">
      <HomeTopSection />
      <DiscountProducts />
      <GenderBanners />
      <NewestProducts />
      <BestSellerProducts />
      <BrandsSection />
      <WhyUs />
      <Newsletter />
    </div>
  );
}

export default Home;
