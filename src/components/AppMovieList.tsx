import { Navigation, Pagination } from "swiper/modules"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AppMovie } from "./AppMovie";
import { Link } from "react-router-dom";
import { AppMovieListProps} from "../interfaces/Movie";

export const AppMovieList:React.FC<AppMovieListProps> = ({movies}) => {
  return (
    <div className="flex w-[350px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[1250px] 2xl:w-[1500px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={1}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        
      >
        {movies.map(({ id, title, name, backdrop_path }) => (
          <SwiperSlide className="mx-5">
            <div>
              <Link to={`/${id}`}>
                <AppMovie
                  id={id}
                  backdrop_path={backdrop_path}
                  title={title ? title : name}
                  name={name}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
