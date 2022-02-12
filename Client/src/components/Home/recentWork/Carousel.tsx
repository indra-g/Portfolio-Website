import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Keyboard } from "swiper";
import CarouselItem from "./CarousalItem";

import "swiper/css";
import "./Carousel.css";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <>
      <Swiper
        speed={1000}
        navigation={{ hideOnClick: true }}
        scrollbar={{
          hide: true,
          draggable: true,
          snapOnRelease: true,
        }}
        keyboard={true}
        modules={[Scrollbar, Keyboard, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
