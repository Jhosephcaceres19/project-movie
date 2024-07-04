export interface MovieLiProps {
  id:number;
  title?: string;
  backdrop_path: string;
}
export interface MoviesProps{
  id:number;
  title:string;
  backdrop_path:string;
}
export interface MovieListProps{
  movie:MoviesProps[];
}