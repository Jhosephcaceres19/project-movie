export interface Movie {
  id: number
  name:string
  title:string
  backdrop_path:string
}
export interface AppMovieListProps{
  movies:Movie[];
}

export interface AppMovieProps {
  id:number
  title?: string;
  name: string;
  backdrop_path: string;
}

export interface MovieDetail {
  title: string;
  overview: string;
  release_date: string;
  genres: { id: number; name: string }[];
  poster_path: string;
}
export interface MovieLi{
  title?:string;
  backdrop_path:string;
}