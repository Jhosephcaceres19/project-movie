import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { MovieLi } from "./MovieLi";
import { Link } from "react-router-dom";

export const MovieList = ({movie}) => {
  return (
    <div className="w-[350px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1700px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={2}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
      >
        {movie.map(({ id, title, backdrop_path }) => (
          <SwiperSlide key={id} className="mx-5">
            <Link to={`/pelicula/${id}`}>
              <br />
              <MovieLi id={id} backdrop_path={backdrop_path} title={title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
