import Axios from "axios";
import credentials from "./credentials.js";

const api = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 3000,
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

export async function getMovieDetails(id) {
  const response = await api.get(`/movie/${id}`);
  console.log(response.data);
  return {
    ...response.data,
    poster_src: getPosterURL(response.data.poster_path)
  };
}

export async function searchMovies(query) {
  const response = await api.get("/search/movie", {
    params: {
      query: query
    }
  });
  return response.data.results.map(movie => ({
    ...movie,
    poster_src: getPosterURL(movie.poster_path)
  }));
}

export async function getDiscoverMovies(year, genres, order) {
  try {
    const response = await getResource(
      `/discover/movie?${year ? `year=${year}` : ""}${
        order ? `&sort_by=${order}` : ""
      }${genres.length !== 0 ? `&with_genres=${genres.join(",")}` : ""}`
    );
    return response.results.map(movie => ({
      ...movie,
      poster_src: getPosterURL(movie.poster_path)
    }));
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieGenres() {
  try {
    const response = await getResource("/genre/movie/list");
    return response.genres;
  } catch (error) {
    console.log(error);
  }
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
