import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import sliderData from "./sliderData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HeroSlider() {
  return (
    <section>
      <Swiper
        modules={[
          Autoplay,
          Pagination,
          Navigation,
        ]}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="rounded-3xl"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link to={slide.link}>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={slide.image}
                  alt=""
                  className="
                    h-[260px]
                    w-full
                    object-cover
                    md:h-[360px]
                    lg:h-[430px]
                  "
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