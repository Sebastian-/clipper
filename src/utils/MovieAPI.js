import Axios from "axios";
import credentials from "./credentials.js";

const api = Axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${credentials.movieAPI.authKey}`,
    "Content-Type": "application/json; charset=utf-8"
  }
});

export function getMovies(category) {
  return getMovieResource(`/${category}`);
}

function getMovieResource(path) {
  return api
    .get(path)
    .then(response => response.data.results)
    .then(movies =>
      movies.map(movie => ({
        ...movie,
        poster_src: getPosterURL(movie.poster_path)
      }))
    )
    .catch(error => console.log(error));
}

export function getPosterURL(path) {
  return "https://image.tmdb.org/t/p/w300" + path;
}
