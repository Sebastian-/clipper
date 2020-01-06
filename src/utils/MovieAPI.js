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

export async function getMovieDetails(id) {
  try {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function searchMovies(query) {
  try {
    const response = await api.get("/search/movie", {
      params: {
        query: query
      }
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getDiscoverMovies(year, genres, order) {
  try {
    const response = await api.get("/discover/movie", {
      params: {
        year,
        sort_by: order,
        with_genres: genres.length > 0 ? genres.join(",") : null
      }
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieGenres() {
  try {
    const response = await api.get("/genre/movie/list");
    return response.data.genres;
  } catch (error) {
    console.log(error);
  }
}

export async function getMoviesByCategory(category) {
  try {
    const response = await api.get(`/movie/${category}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export function getPosterURL(path) {
  return "https://image.tmdb.org/t/p/w300" + path;
}
