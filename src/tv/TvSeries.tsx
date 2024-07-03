import { useEffect, useState } from "react";
import { Navbar } from "../view/navbar/Navbar";
import TvService from "./services/TvService";
import { TvSeriesList } from "./components/TvSeriesList";
import { useSearch } from "../view/provider/searchContext";

export const TvSeries = () => {
  const [series, setSeries] = useState([]);
  const [familytv, setFamilytv] = useState([]);
  const [kids, setKids] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [crime, setCrime] = useState([]);
  const { searchResults } = useSearch();


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
        <div>
          {searchResults.length > 0 ? (
            <>
              <div className="text-xl"> Resultados de Busqueda</div>
              <TvSeriesList tv={searchResults}/>
              <div className="text-xl">Tv Series:</div>
              <TvSeriesList tv={series} />
              <div className="text-xl">Tv Series para ver en familia:</div>
              <TvSeriesList tv={familytv} />
              <div className="text-xl">Tv Series de ninos:</div>
              <TvSeriesList tv={kids} />
              <div className="text-xl">Tv Series de anime:</div>
              <TvSeriesList tv={animation} />
              <div className="text-xl">Tv Series de criminal:</div>
              <TvSeriesList tv={crime} />
            </>
          ) : (
            <>
              <div className="text-xl">Tv Series:</div>
              <TvSeriesList tv={series} />
              <div className="text-xl">Tv Series para ver en familia:</div>
              <TvSeriesList tv={familytv} />
              <div className="text-xl">Tv Series de ninos:</div>
              <TvSeriesList tv={kids} />
              <div className="text-xl">Tv Series de anime:</div>
              <TvSeriesList tv={animation} />
              <div className="text-xl">Tv Series de criminal:</div>
              <TvSeriesList tv={crime} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
