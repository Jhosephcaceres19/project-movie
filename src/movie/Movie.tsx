import { useEffect, useState } from "react";
import { Navbar } from "../view/navbar/Navbar";
import MovieService from "./services/MovieService";
import { MovieList } from "./components/MovieList";
import { useSearch } from "../view/provider/searchContext";

export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [action, setAction] = useState([]);
  const [horror, setHorror] = useState([]);
  const [actiontwo, setActiontwo] = useState([]);
  const [actiontree, setActiontree] = useState([]);
  const { searchResults } = useSearch();


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
        <div>
          {searchResults.length > 0 ? (
            <>
              <div className="text-xl">Resultado de busqueda</div>
              <MovieList movie={searchResults} />
              <div className="text-xl">Mejores peliculas:</div>
              <MovieList movie={movies} />
              <div className="text-xl">Pelicula de accion:</div>
              <MovieList movie={action} />
              <div className="text-xl">Pelicula para ver en familia:</div>
              <MovieList movie={actiontwo} />
              <div className="text-xl">Pelicula recomendadas:</div>
              <MovieList movie={actiontree} />
              <div className="text-xl">Pelicula de terror:</div>
              <MovieList movie={horror} />
            </>
          ) : (
            <>
              <div className="text-xl">Mejores peliculas:</div>
              <MovieList movie={movies} />
              <div className="text-xl">Pelicula de accion:</div>
              <MovieList movie={action} />
              <div className="text-xl">Pelicula para ver en familia:</div>
              <MovieList movie={actiontwo} />
              <div className="text-xl">Pelicula recomendadas:</div>
              <MovieList movie={actiontree} />
              <div className="text-xl">Pelicula de terror:</div>
              <MovieList movie={horror} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
