import React from 'react'
import { Swiper , SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const AppMovie = ({id,title,name,backdrop_path}) => {
  return (
    <div className=''>
      <div className="movie-slide text-center mb-10 ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide key={id} className="mx-5">
            <h3 className="mb-4">Titulo: {title ? title : name}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt={title ? title : name}
              className="img"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
