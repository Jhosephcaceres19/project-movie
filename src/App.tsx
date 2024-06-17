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
  const [all , setAll] = useState([]);

  useEffect(() => {
    const allMovies = async()=>{
      try{
        const allMovies =await ServiceApp.viewAll();
        setMovies(allMovies);
        const allMoviesNow = await ServiceApp.viewAllNow();
        setMoviesnow(allMoviesNow);
        const all = await ServiceApp.latest();
        setAll(all);
      }catch(error){
        console.error('la peticion fallo', error);
      }
    }
    allMovies();
  }, []);
  return (
    <>
      <div className="app-main">
        <Navbar />
        <div className="api-app">
          <div className="w-[1400px]">
          
          TODO:
          <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              zoom
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {all.map(({ id, title,name, backdrop_path }) => (
                <SwiperSlide key={id}>
                  <div className="movie-slide text-center">
                    <h3>Título: {title ? title:name}</h3>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                      alt={title ? title:name}
                      
                      className="border-solid border-2 border-white mx-auto rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            POPULAR:
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
            >
              {movies.map(({ id, title, backdrop_path }) => (
                <SwiperSlide key={id}>
                  <div className="movie-slide text-center">
                    <h3>Título: {title}</h3>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                      alt={title}
                      className="border-solid border-2 border-white mx-auto rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <br />
            RANKING DE AHORA:
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
            >
              {moviesnow.map(({ id, title, backdrop_path }) => (
                <SwiperSlide key={id}>
                  <div className="movie-slide text-center">
                    <h3>Título: {title}</h3>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                      alt={title}
                      className="border-solid border-2 border-white mx-auto rounded-lg"
                    />
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
