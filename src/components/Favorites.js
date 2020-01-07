import React from "react";
import MovieList from "./MovieList";
import { getFavorites } from "../utils/localStorageAPI";

function Favorites(props) {
  const movies = getFavorites();

  return (
    <div className="page-container">
      <h2>Favorited Movies</h2>
      {movies.length ? (
        <MovieList movies={movies} />
      ) : (
        <p>
          You haven't favorited any movies! Favorite a movie by visiting it's
          'More Info' page.
        </p>
      )}
    </div>
  );
}

export default Favorites;
