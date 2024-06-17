import { useEffect, useState } from 'react'
import { Navbar } from '../view/navbar/Navbar'
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TvService from './services/TvService';

export const TvSeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(()=>{
    const tvpopular = async() =>{
      try{
        const tv = await TvService.viewSeriesPopular();
        setSeries(tv);
      }catch (error){
        console.error('la peticion fallo',error);
      }
    }
    tvpopular();
  },[])
  return (
    <div className="app-main">
      <Navbar />
      <div className="api-app">
        <div className="w-[1400px]">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
          >
            {series.map(({ id, name, backdrop_path }) => (
              <SwiperSlide>
                <div className='movie-slide text-center'>
                  {name}
                  <img
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt={name}
                    className="border-solid border-2 border-white"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </div>
  );
}
