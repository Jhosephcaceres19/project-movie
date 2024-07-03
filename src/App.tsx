// src/App.js (o App.tsx)

import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./view/navbar/Navbar";
import ServiceApp from "./services/ServiceApp";
import { AppMovieList } from "./components/AppMovieList";
import { useSearch } from "./view/provider/searchContext";
import { Movie } from "./interfaces/Movie";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesnow, setMoviesnow] = useState<Movie[]>([]);
  const [all, setAll] = useState<Movie[]>([]);
  const [viewone, setViewone] = useState<Movie[]>([]);
  const [viewtwo, setViewtwo] = useState<Movie[]>([]);
  const { searchResults } = useSearch();

  useEffect(() => {
    const allMovies = async () => {
      try {
        const allMovies = await ServiceApp.viewAll();
        setMovies(allMovies);
        const allMoviesNow = await ServiceApp.viewAllNow();
        setMoviesnow(allMoviesNow);
        const all = await ServiceApp.latest();
        setAll(all);
        const viewone = await ServiceApp.viewAllOne();
        setViewone(viewone);
        const viewtwo = await ServiceApp.viewAllTwo();
        setViewtwo(viewtwo);
      } catch (error) {
        console.error("la petición falló", error);
      }
    };
    allMovies();
  }, []);

  return (
    <div className="app-main">
      <Navbar />
      <div className="api-app">
        <div>
          {searchResults.length > 0 ? (
            <>
              <div className="text-xl">Resultados de Búsqueda:</div>
              <AppMovieList movies={searchResults as Movie[]} />
              <div className="text-xl">Peliculas:</div>
              <AppMovieList movies={movies} />
              <div className="text-xl">Pelicula con mejor rating:</div>
              <AppMovieList movies={moviesnow} />
              <div className="text-xl">Pelicula popular:</div>
              <AppMovieList movies={all} />
              <div className="text-xl">Pelicula:</div>
              <AppMovieList movies={viewone} />
              <div className="text-xl">Pelicula:</div>
              <AppMovieList movies={viewtwo} />
            </>
          ) : (
            <>
              <div className="text-xl">Peliculas:</div>
              <AppMovieList movies={movies} />
              <div className="text-xl">Pelicula con mejor rating:</div>
              <AppMovieList movies={moviesnow} />
              <div className="text-xl">Pelicula popular:</div>
              <AppMovieList movies={all} />
              <div className="text-xl">Pelicula:</div>
              <AppMovieList movies={viewone} />
              <div className="text-xl">Pelicula:</div>
              <AppMovieList movies={viewtwo} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
