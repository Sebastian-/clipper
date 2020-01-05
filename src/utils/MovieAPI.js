import Axios from "axios";
import credentials from "./credentials.js";

const api = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${credentials.movieAPI.authKey}`,
    "Content-Type": "application/json; charset=utf-8"
  }
});

function getResource(path) {
  return api
    .get(path)
    .then(response => response.data)
    .catch(error => console.log(error));
}

export async function getMovieGenres() {
  let genres = await getResource("/genre/movie/list");
  console.log(genres);
}

export function getMoviesByCategory(category) {
  return getResource(`/movie/${category}`)
    .then(response => response.results)
    .then(movies =>
      movies.map(movie => ({
        ...movie,
        poster_src: getPosterURL(movie.poster_path)
      }))
    );
}

function getPosterURL(path) {
  return "https://image.tmdb.org/t/p/w300" + path;
}
