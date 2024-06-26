import React, { useEffect, useState } from "react";
import ServiceApp from "../../services/ServiceApp";
import { Navbar } from "../../view/navbar/Navbar";
import { useParams } from "react-router-dom";
import "./Detail.css";

export const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ServiceApp.viewDetail(id);
        setDetail(data);
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
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
          alt={detail.title}
          className="img-detail"
        />
        <div className="content-detail">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold">{detail.title}</h2>
            <p className="text-lg">DETALLE: <br />{detail.overview}</p>
            <p className="text-lg"><br />FECHA DE LANZAMIENTO: <br />{detail.release_date} </p>
            <p className="text-lg">
              <br />
              Géneros:{" "}
              {detail.genres &&
                detail.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}, </span>
                ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
