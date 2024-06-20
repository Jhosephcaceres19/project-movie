import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { time } from "console";
import { title } from "process";
import { MovieLi } from "./MovieLi";

export const MovieList = ({movie}) => {
  return (
    <div className="w-[1600px]">
      <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={5}
      navigation
      pagination={{clickable:true}}
      >
        {movie.map(({id, title, backdrop_path}) =>(
          <SwiperSlide key={id} className="mx-5">
            <br />
            <MovieLi id={id} backdrop_path={backdrop_path} title={title}/>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};
