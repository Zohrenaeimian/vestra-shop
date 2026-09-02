import HeroSlider from "../HeroSlider/HeroSlider";
import CategoriesSection from "../CategoriesSection/CategoriesSection";

function HomeTopSection() {
  return (
    <section className="space-y-8">
      <HeroSlider />
      <CategoriesSection />
    </section>
  );
}

export default HomeTopSection;
