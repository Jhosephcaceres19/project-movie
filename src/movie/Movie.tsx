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
  const [action, setAction] = useState([]);
  const [horror, setHorror] = useState([]);

  useEffect(() => {
    const movietop = async () => {
      try {
        const movies = await MovieService.viewMoviePopular();
        const action = await MovieService.genresaction('28');
        const horror = await MovieService.genrehorror('27');
        setMovies(movies);
        setAction(action);
        setHorror(horror);
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
                <div className="movie-slide text-center mb-10">
                  <h3 className="mb-4">Titulo: {title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt={title}
                    className="img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
          >
            {action.map(({ id, title, backdrop_path }) => (
              <SwiperSlide key={id} className="mx-5">
                <div className="movie-slide text-center mb-10">
                  <h3 className="mb-4">Titulo: {title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt={title}
                    className="img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
          >
            {horror.map(({ id, title, backdrop_path }) => (
              <SwiperSlide key={id} className="mx-5">
                <div className="movie-slide text-center mb-10">
                  <h3 className="mb-4">Titulo: {title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt={title}
                    className="img"
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
