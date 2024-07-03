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