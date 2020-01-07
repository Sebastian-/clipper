import React from "react";
import MovieList from "./MovieList";
import { getFavorites } from "../utils/localStorageAPI";

function Favorites(props) {
  return (
    <div className="page-container">
      <h2>Favorites</h2>
      <MovieList movies={getFavorites()} />
    </div>
  );
}

export default Favorites;
