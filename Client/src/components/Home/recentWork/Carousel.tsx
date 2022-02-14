import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Keyboard } from "swiper";
import CarouselItem from "./CarousalItem";

import "swiper/css";
import "./Carousel.css";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/navigation";

const Dummy_RecentProjects = [
  {
    id: "p1",
    name: "Psg Tech Coding Club Website1",
    type: "Website",
    year: 2021,
  },
  {
    id: "p2",
    name: "Psg Tech Coding Club Website2",
    type: "Website",
    year: 2021,
  },
  {
    id: "p3",
    name: "Psg Tech Coding Club Website3",
    type: "Website",
    year: 2021,
  },
  {
    id: "p4",
    name: "Psg Tech Coding Club Website4",
    type: "Website",
    year: 2021,
  },
  {
    id: "p5",
    name: "Psg Tech Coding Club Website5",
    type: "Website",
    year: 2021,
  },
  {
    id: "p6",
    name: "Psg Tech Coding Club Website6",
    type: "Website",
    year: 2021,
  },
  {
    id: "p7",
    name: "Psg Tech Coding Club Website7",
    type: "Website",
    year: 2021,
  },
];

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
        {Dummy_RecentProjects.map((project) => {
          return (
            <SwiperSlide key={project.id}>
              <CarouselItem
                name={project.name}
                id={project.id}
                year={project.year}
                type={project.type}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
