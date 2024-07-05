export interface tv{
  id:number;
  backdrop_path: string;
  title?:string;
  name?:string;
}
export interface tvlist{
  tv:tv[]
}
export interface tvDetail{
  title: string;
  overview:string;
}
export interface tvDetailProps{
  title:string;
  overview:string;
  release_date:string;
  genres:{id:number; name:string}[];
  poster_path:string;
  name:string;
}
export interface videoDetailProps{
  key:string;
  site:string;
  name:string
}
