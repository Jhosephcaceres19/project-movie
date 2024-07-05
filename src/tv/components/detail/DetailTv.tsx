import React, { useEffect, useState } from "react";
import { Navbar } from "../../../view/navbar/Navbar";
import { useParams } from "react-router-dom";
import TvService from "../../services/TvService";
import { tvDetailProps, videoDetailProps } from "../../interfaces/tvinterface";

export const DetailTv: React.FC = () => {
  const { id } = useParams<{id:string}>();
  const [detailtv, setDetailtv] = useState<tvDetailProps>({
    title:'',
    overview:'',
    release_date:'',
    genres:[],
    poster_path:'',
    name:'',
  }); // Estado inicial null para indicar carga inicial
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga de datos
  const [video, setVideo] = useState<videoDetailProps>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(id){
          setIsLoading(true);
          const data = await TvService.detailSerie(id);
          setDetailtv(data);
          const videoData = await TvService.viewVideo(id);
          setVideo(videoData);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Error al conectar:", error);
      }
    };

    fetchData();
  }, [id]);

  // Si isLoading es true, mostramos un mensaje de carga
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  

  return (
    <div className="detail-main">
      <Navbar />
      <br />
      <div className="relative">
        <div className="content-detail">
          <div className="text-white text-center bg-cyan-950/80 rounded-2xl p-4 flex flex-col items-center justify-center">
            <div>
              <h2 className="text-4xl font-bold">{detailtv.title}</h2>
              <p className="text-lg">
                DETALLE: <br />
                {detailtv.overview}
              </p>
              <p className="text-lg">
                <br />
                FECHA DE LANZAMIENTO: <br />
                {detailtv.release_date}{" "}
              </p>
              <p className="text-lg">
                <br />
                Géneros:{" "}
                {detailtv.genres &&
                  detailtv.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}, </span>
                  ))}
              </p>
            </div>
            <br />
            <div>
              {video && video.key && video.site === "YouTube" && (
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${detailtv.poster_path}`}
            alt={detailtv.title}
            className="img-detail"
          />
        </div>
      </div>
    </div>
  );
};
