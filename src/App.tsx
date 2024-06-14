import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
import { Navbar } from "./view/navbar/Navbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f3ab1eb0e744146be3466d76cdf2def4"
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log({ data });
        setMovies(data.results);
      })
      .catch(() => {
        console.error("la petición falló");
      });
  }, []);

  return (
    <>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
