import { useEffect, useState } from "react";
import { Navbar } from "../view/navbar/Navbar";
import MovieService from "./services/MovieService";
import { MovieList } from "./components/MovieList";
export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [action, setAction] = useState([]);
  const [horror, setHorror] = useState([]);
  const [actiontwo, setActiontwo] = useState([]);
  const [actiontree, setActiontree] = useState([]);

  useEffect(() => {
    const movietop = async () => {
      try {
        const movies = await MovieService.viewMoviePopular();
        const action = await MovieService.genresaction("28");
        const horror = await MovieService.genrehorror("27");
        const actiontwo = await MovieService.genresactiontwo("28");
        const actiontree = await MovieService.genresactiontree("28");
        setMovies(movies);
        setAction(action);
        setHorror(horror);
        setActiontwo(actiontwo);
        setActiontree(actiontree);
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
        <MovieList movie={actiontwo}/>
        <MovieList movie={actiontree}/>
        <MovieList movie={horror}/>
      </div>
    </div>
  );
};
