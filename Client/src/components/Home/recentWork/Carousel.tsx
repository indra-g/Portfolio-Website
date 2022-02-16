import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Keyboard } from "swiper";
import CircularProgress from "@mui/material/CircularProgress";
import CarouselItem from "./CarousalItem";

import "swiper/css";
import "./Carousel.css";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import useHttp from "../../../hooks/useHttp";
import { useEffect } from "react";

const Carousel = () => {
  const { error, isLoading, getdata, data }: any = useHttp();
  useEffect(() => {
    getdata("/api/recentProjects");
  }, [getdata]);

  let content;
  let projects;

  if (error) {
    content = (
      <h1 className="font-roboto font-medium text-2xl">
        Something went wrong
      </h1>
    );
  }
  if (isLoading) {
    content = <CircularProgress />;
  }
  if (data) {
    projects = data.map(
      (project: {
        id: string;
        name: string;
        year: number;
        type: string;
        img: string;
      }) => (
        <SwiperSlide key={project.id}>
          <CarouselItem
            img={project.img}
            name={project.name}
            id={project.id}
            year={project.year}
            type={project.type}
          />
        </SwiperSlide>
      )
    );
  }

  return (
    <>
      {!projects && content}
      {projects && (
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
          {projects}
        </Swiper>
      )}
    </>
  );
};

export default Carousel;
