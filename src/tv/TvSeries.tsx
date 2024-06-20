import { useEffect, useState } from "react";
import { Navbar } from "../view/navbar/Navbar";
import TvService from "./services/TvService";
import { TvSeriesList } from "./components/TvSeriesList";

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
        <TvSeriesList tv={series}/>
        <TvSeriesList tv={familytv}/>
        <TvSeriesList tv={kids}/>
        <TvSeriesList tv={animation}/>
        <TvSeriesList tv={crime}/>
      </div>
    </div>
  );
};
