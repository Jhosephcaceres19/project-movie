import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
import { Navbar } from "./view/navbar/Navbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ServiceApp from "./services/ServiceApp";

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesnow, setMoviesnow] = useState([]);
  const [all, setAll] = useState([]);

  useEffect(() => {
    const allMovies = async () => {
      try {
        const allMovies = await ServiceApp.viewAll();
        setMovies(allMovies);
        const allMoviesNow = await ServiceApp.viewAllNow();
        setMoviesnow(allMoviesNow);
        const all = await ServiceApp.latest();
        setAll(all);
      } catch (error) {
        console.error("la peticion fallo", error);
      }
    };
    allMovies();
  }, []);
  return (
    <>
      <div className="app-main">
        <Navbar />
        <div className="api-app">
          <div className="w-[1600px] ">
            PRUEBA:
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
            >
              {movies.map(({ id, title, backdrop_path }) => (
                <SwiperSlide key={id} className="mx-5">
                  <br />
                  <div className="movie-slide text-center mb-10 relative group">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                      alt={title}
                      className=" img"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-200 ease-in-out">
                      <h3 className="text-white text-2xl font-bold">{title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            TODO:
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
            >
              {all.map(({ id, title, name, backdrop_path }) => (
                <SwiperSlide key={id} className="mx-5">
                  <br />
                  <div className="movie-slide text-center mb-10 relative group">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                      alt={title ? title : name}
                      className="img"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <h3 className="text-white text-2xl font-bold">
                        {title ? title : name}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            POPULAR:
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
            >
              {movies.map(({ id, title, backdrop_path }) => (
                <SwiperSlide key={id} className="mx-5">
                  <br />
                  <div className="movie-slide text-center mb-10 relative group">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                      alt={title}
                      className="img"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <h3 className="text-white text-2xl font-bold">{title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            RANKING DE AHORA:
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
            >
              {moviesnow.map(({ id, title, backdrop_path }) => (
                <SwiperSlide key={id} className="mx-5">
                  <br />
                  <div className="movie-slide text-center mb-10 relative group">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                      alt={title}
                      className="img"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <h3 className="text-white text-2xl font-bold">{title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
