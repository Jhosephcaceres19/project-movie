import { icon } from "../../assets/icon/icon";
import "./Navbar.css";
import SideBar from "../sidebar/SideBar";
import { useState } from "react";
import { useSearch } from "../provider/searchContext";
import TvService from "../../tv/services/TvService";
import MovieService from "../../movie/services/MovieService";
import { SearchResult } from "../../interfaces/Movie";
import { Link } from "react-router-dom";

export const Navbar:React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchResults } = useSearch();

  const searchAll = async (term:string) => {
    try {
      const response1 = await TvService.searchSerie(term); // Llama a la función de búsqueda de series
      const response2 = await MovieService.searchMovie(term); // Llama a la función de búsqueda de películas

      let combinedResults: SearchResult[]=[];

      if (response1 && response1.results) {
        combinedResults = [...combinedResults, ...response1.results];
      }

      if (response2) {
        combinedResults = [...combinedResults, ...response2];
      }

      setSearchResults(combinedResults); // Actualiza los resultados en el contexto de búsqueda
    } catch (error) {
      console.log("La petición falló", error);
    }
  };

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      searchAll(term);
    } else {
      setSearchResults([]); // Limpia los resultados si el término de búsqueda está vacío
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-content-main">
        <div>
          <Link to={"/"}>
            <img src={icon.netflix} alt="" className="w-[92px]" />
          </Link>
        </div>
        <div className="nav-ul">
          <div className="nav-input">
            <svg
              className="absolute text-slate-400 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Buscar"
              className="pl-5 text-black"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <SideBar />
        </div>
      </div>
    </nav>
  );
};
