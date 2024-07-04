import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { TvSer } from "./TvSer";
import { Link } from "react-router-dom";
import React from "react";
import { tvlist } from "../interfaces/tvinterface";

export const TvSeriesList: React.FC<tvlist> = ({ tv }) => {
  return (
    <div className="w-[350px] sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1700px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={2}
        slidesPerView={4}
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
