import { useEffect, useState } from "react";
import { Navbar } from "../view/navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TvService from "./services/TvService";

export const TvSeries = () => {
  const [series, setSeries] = useState([]);
  const [familytv, setFamilytv] = useState([]);
  const [kids, setKids] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [crime, setCrime] = useState([]);

  useEffect(() => {
    const tvpopular = async () => {
      try {
        const tv = await TvService.viewSeriesPopular();
        const family = await TvService.genresfamily("10751");
        const kids = await TvService.genreskids("10762");
        const animation = await TvService.genresanimation("16");
        const crime = await TvService.genrescrime("80");
        setSeries(tv);
        setFamilytv(family);
        setKids(kids);
        setAnimation(animation);
        setCrime(crime);
      } catch (error) {
        console.error("la peticion fallo", error);
      }
    };
    tvpopular();
  }, []);
  return (
    <div className="app-main">
      <Navbar />
      <div className="api-app">
        <div className="w-[1600px]">
          SERIES DE TV:
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
          >
            {series.map(({ id, name, backdrop_path }) => (
              <SwiperSlide key={id} className="mx-5">
                <br />
                <div className="movie-slide text-center mb-10 relative group">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt={name}
                    className="img"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h3 className="text-white text-2xl font-bold">{name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          SERIES PARA VER EN FAMILIA:
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
          >
            {familytv.map(({ id, name, backdrop_path }) => (
              <SwiperSlide key={id} className="mx-5">
                <br />
                <div className="movie-slide text-center mb-10 relative group">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt={name}
                    className="img"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h3 className="text-white text-2xl font-bold">{name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          SERIES DE CRIMEN:
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
          >
            {crime.map(({ id, name, backdrop_path }) => (
              <SwiperSlide key={id} className="mx-5">
                <br />
                <div className="movie-slide text-center mb-10 relative group">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt={name}
                    className="img"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h3 className="text-white text-2xl font-bold">{name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          SERIES PARA NINOS:
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
          >
            {kids.map(({ id, name, backdrop_path }) => (
              <SwiperSlide key={id} className="mx-5">
                <br />
                <div className="movie-slide text-center mb-10 relative group">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt={name}
                    className="img"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h3 className="text-white text-2xl font-bold">{name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          SERIES DE ANIMACION:
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
          >
            {animation.map(({ id, name, backdrop_path }) => (
              <SwiperSlide key={id} className="mx-5">
                <br />
                <div className="movie-slide text-center mb-10 relative group">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt={name}
                    className="img"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h3 className="text-white text-2xl font-bold">{name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
