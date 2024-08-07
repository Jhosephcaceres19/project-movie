import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { MovieLi } from "./MovieLi";
import { Link } from "react-router-dom";
import type{ MovieListProps } from "../interfaces/Movies";

export const MovieList: React.FC<MovieListProps> = ({movie}) => {
  return (
    <div className="flex w-[350px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[1250px] 2xl:w-[1500px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={1}
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
