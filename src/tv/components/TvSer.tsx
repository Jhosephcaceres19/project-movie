import { tv } from "../interfaces/tvinterface";


export const TvSer: React.FC<tv> = ({backdrop_path, title, name}) => {
  return (
    <div className="movie-slide text-center mb-10 sm:mb-10 xl:mb-10 group">
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={title ? title : name}
        className="img"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-300 ease-in-out">
        <h3 className="text-white text-sm xl:text-xl 2xl:text-2xl font-bold">
          {title ? title : name}
        </h3>
      </div>
    </div>
  );
}
