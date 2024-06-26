// MoviesList.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { NewsMovies } from "./NewsMovies";
import { Link } from "react-router-dom";

export const NewsMoviesList = ({ movies }) => {
  return (
    <div className="w-[1600px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
      >
        {movies.map(({ id, title, backdrop_path }) => (
          <SwiperSlide key={id} className="mx-5">
            <Link to={`/news/${id}`}>
              <br />
              <NewsMovies id={id} backdrop_path={backdrop_path} title={title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
