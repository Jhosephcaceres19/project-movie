import { useEffect, useState } from "react";
import { Navbar } from "../view/navbar/Navbar";
import MovieService from "./services/MovieService";
import { MovieList } from "./components/MovieList";
export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [action, setAction] = useState([]);
  const [horror, setHorror] = useState([]);

  useEffect(() => {
    const movietop = async () => {
      try {
        const movies = await MovieService.viewMoviePopular();
        const action = await MovieService.genresaction("28");
        const horror = await MovieService.genrehorror("27");
        setMovies(movies);
        setAction(action);
        setHorror(horror);
      } catch (error) {
        console.error("La petición falló", error);
      }
    };
    movietop();
  }, []);

  return (
    <div className="app-main">
      <Navbar />
      <div className="api-app">
        <MovieList movie={movies}/>
        <MovieList movie={action}/>
        <MovieList movie={horror}/>
      </div>
    </div>
  );
};
