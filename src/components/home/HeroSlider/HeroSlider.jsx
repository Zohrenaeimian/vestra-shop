import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import sliderData from "./sliderData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HeroSlider() {
  return (
    <section>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="hero-slider overflow-hidden rounded-2xl md:rounded-3xl"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link to={slide.link} className="block">
              <div className="overflow-hidden rounded-2xl md:rounded-3xl">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-[clamp(150px,38vw,200px)] w-full object-cover object-center sm:h-[220px] md:h-[320px] lg:h-[400px]"
                  loading="lazy"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;
