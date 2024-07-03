import { useEffect, useState } from "react";
import { Navbar } from "../view/navbar/Navbar";
import "./News.css";
import NewsService from "./service/NewsService";
import { NewsMoviesList } from "./components/NewsMovieList";
import { useSearch } from "../view/provider/searchContext";

export const News = () => {
  const [news, setNews] = useState([]);
  const [horror, setHorror] = useState([]);
  const [newsone, setNewsone] = useState([]);
  const [newstwo, setNewstwo] = useState([]);
  const [newstree, setNewstree] = useState([]);
  const { searchResults } = useSearch();

  useEffect(() => {
    const popular = async () => {
      try {
        const news = await NewsService.viewsPopular();
        const horror = await NewsService.genrehorror("27");
        const newsone = await NewsService.viewsPopularone();
        const newstwo = await NewsService.viewsPopulartwo();
        const newstree = await NewsService.viewsPopulartree();
        setNews(news);
        setNewsone(newsone);
        setNewstwo(newstwo);
        setNewstree(newstree);
        setHorror(horror);
      } catch (error) {
        console.error("la peticion fallo", error);
      }
    };
    popular();
  }, []);

  return (
    <div className="app-main">
      <Navbar />
      <div className="api-app">
        <div>
          {searchResults.length > 0 ? (
            <>
              <div className="text-xl">Resultado de busqueda:</div>
              <NewsMoviesList movies={searchResults} />
              <div className="text-xl">Nuevas peliculas:</div>
              <NewsMoviesList movies={news} />
              <div className="text-xl">Pelicula populares:</div>
              <NewsMoviesList movies={newsone} />
              <div className="text-xl">Pelicula recomendadas:</div>
              <NewsMoviesList movies={newstwo} />
              <div className="text-xl">Peliculas para ver en familia:</div>
              <NewsMoviesList movies={newstree} />
              <div className="text-xl">Pelicula de terror:</div>
              <NewsMoviesList movies={horror} />
            </>
          ) : (
            <>
              <div className="text-xl">Nuevas peliculas:</div>
              <NewsMoviesList movies={news} />
              <div className="text-xl">Pelicula populares:</div>
              <NewsMoviesList movies={newsone} />
              <div className="text-xl">Pelicula recomendadas:</div>
              <NewsMoviesList movies={newstwo} />
              <div className="text-xl">Peliculas para ver en familia:</div>
              <NewsMoviesList movies={newstree} />
              <div className="text-xl">Pelicula de terror:</div>
              <NewsMoviesList movies={horror} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
