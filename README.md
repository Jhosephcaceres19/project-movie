# Proyect Movie whit TypeScript

# ENDPOINT A USAR

## Películas
Obtener detalles de una película

Endpoint: GET /movie/{movie_id}
Ejemplo: GET https://api.themoviedb.org/3/movie/550?api_key=YOUR_API_KEY 

Buscar películas

Endpoint: GET /search/movie
Ejemplo: GET https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=Inception

Obtener las películas populares

Endpoint: GET /movie/popular
Ejemplo: GET https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY //&page=2

Obtener las películas mejor valoradas

Endpoint: GET /movie/top_rated
Ejemplo: GET https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY

Obtener las películas en cartelera

Endpoint: GET /movie/now_playing
Ejemplo: GET https://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_API_KEY


## Series de Televisión
Obtener detalles de una serie de televisión

Endpoint: GET /tv/{tv_id}
Ejemplo: GET https://api.themoviedb.org/3/tv/1399?api_key=YOUR_API_KEY

Buscar series de televisión

Endpoint: GET /search/tv
Ejemplo: GET https://api.themoviedb.org/3/search/tv?api_key=YOUR_API_KEY&query=Game%20of%20Thrones

Obtener las series de televisión populares

Endpoint: GET /tv/popular
Ejemplo: GET https://api.themoviedb.org/3/tv/popular?api_key=YOUR_API_KEY

Obtener las series de televisión mejor valoradas

Endpoint: GET /tv/top_rated
Ejemplo: GET https://api.themoviedb.org/3/tv/top_rated?api_key=YOUR_API_KEY


## Actores y Actrices
Obtener detalles de un actor o actriz

Endpoint: GET /person/{person_id}
Ejemplo: GET https://api.themoviedb.org/3/person/287?api_key=YOUR_API_KEY

Buscar actores y actrices

Endpoint: GET /search/person
Ejemplo: GET https://api.themoviedb.org/3/search/person?api_key=YOUR_API_KEY&query=Brad%20Pitt



## Otros
Obtener el tráiler de una película

Endpoint: GET /movie/{movie_id}/videos
Ejemplo: GET https://api.themoviedb.org/3/movie/550/videos?api_key=YOUR_API_KEY
Obtener imágenes de una película

Endpoint: GET /movie/{movie_id}/images
Ejemplo: GET https://api.themoviedb.org/3/movie/550/images?api_key=YOUR_API_KEY
Obtener las películas de un actor o actriz

Endpoint: GET /person/{person_id}/movie_credits
Ejemplo: GET https://api.themoviedb.org/3/person/287/movie_credits?api_key=YOUR_API_KEY
Obtener los géneros de películas

Endpoint: GET /genre/movie/list
Ejemplo: GET https://api.themoviedb.org/3/genre/movie/list?api_key=YOUR_API_KEY






