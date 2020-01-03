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

function getResource(path) {
  return api
    .get(path)
    .then(response => response.data.results)
    .catch(error => console.log(error));
}

export function getPopular() {
  return getResource("/popular");
}

export function getTopRated() {
  return getResource("/top_rated");
}

export function getUpcoming() {
  return getResource("/upcoming");
}

export function getNowPlaying() {
  return getResource("now_playing");
}
