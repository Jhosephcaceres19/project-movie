import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { TvSer } from "./TvSer";
import { Link } from "react-router-dom";

export const TvSeriesList = ({ tv }) => {
  return (
    <div className="w-[1600px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
      >
        {tv.map(({ id, title, backdrop_path, name }) => (
          <SwiperSlide key={id} className="mx-5">
            <Link to={`/serie/${id}`}>
              <br />
              <TvSer
                id={id}
                backdrop_path={backdrop_path}
                title={title ? title : name}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
