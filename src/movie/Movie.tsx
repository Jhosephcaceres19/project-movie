import { useEffect, useState } from 'react';
import { Navbar } from '../view/navbar/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper/modules';
import MovieService from './services/MovieService';
export const Movie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const movietop = async () => {
      try {
        const movies = await MovieService.viewMoviePopular();
        setMovies(movies);
      } catch (error) {
        console.error('La petición falló', error);
      }
    };
    movietop();
  }, []);


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
            {movies.map(({ id, title, poster_path }) => (
              <SwiperSlide key={id}>
                <div className='text-center'>
                  Titulo: {title}
                  <img
                    src={`http://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
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
