import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../ProductCard/ProductCard";

function ProductSlider({ products, lightNav = false }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={2}
      spaceBetween={12}
      className={lightNav ? "discount-slider" : ""}
      breakpoints={{
        0: {
          slidesPerView: 1.5,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductSlider;
