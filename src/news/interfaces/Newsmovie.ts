export interface NewsMovieProps{
  id:number;
  title:string;
  backdrop_path:string;
}
export interface NewsMovieListProps{
  movies:NewsMovieProps[]
}