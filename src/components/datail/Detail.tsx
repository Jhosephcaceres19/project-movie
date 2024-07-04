import React, { useEffect, useState } from "react";
import ServiceApp from "../../services/ServiceApp";
import { Navbar } from "../../view/navbar/Navbar";
import { useParams } from "react-router-dom";
import "./Detail.css";
import { MovieDetail } from "../../interfaces/Movie";

export const Detail:React.FC= () => {
  const { id } = useParams<{id:string}>();
  const [detail, setDetail] = useState<MovieDetail>({
    title: "",
    overview: "",
    release_date: "",
    genres: [],
    poster_path: "",
  });
  const [video, setVideo] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(id){
          const data = await ServiceApp.viewDetail(id);
          console.log("Detail data: ", data);
          const videoData = await ServiceApp.viewVideo(id);
          console.log("Video data: ", videoData);
          setDetail(data);
          setVideo(videoData);
        }
      } catch (error) {
        console.log("Error al conectar", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="detail-main">
      <Navbar />
      <br />
      <div className="relative ">
        <div className="content-detail  ">
          <div className="text-white text-center bg-cyan-950/80 rounded-2xl p-4 flex flex-col items-center justify-center">
            <div>
              <h2 className="xl:text-2xl 2xl:text-4xl font-bold">
                {detail.title}
              </h2>
              <p className="text-lg">
                DETALLE: <br />
                {detail.overview}
              </p>
              <p className="xl:text-lg 2xl:text-lg">
                <br />
                FECHA DE LANZAMIENTO: <br />
                {detail.release_date}
              </p>
              <p className="xl:text:lg 2xl:text-lg">
                <br />
                Géneros:{" "}
                {detail.genres &&
                  detail.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}, </span>
                  ))}
              </p>
            </div>
            <br />
            <div>
              {video && video.key && video.site === "YouTube" && (
                <div className="video-container">
                  <iframe
                    className="xl:w-[400px] xl:h-[200px] 2xl:w-[550px] 2xl:h-[300px]"
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
            src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
            alt={detail.title}
            className="img-detail"
          />
        </div>
      </div>
    </div>
  );
};
