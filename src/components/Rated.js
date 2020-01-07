import React from "react";
import MovieList from "./MovieList";
import { getRated } from "../utils/localStorageAPI";

function Rated(props) {
  const movies = getRated();
  return (
    <div className="page-container">
      <h2>Rated Movies</h2>
      {movies.length ? (
        <MovieList movies={movies} />
      ) : (
        <p>
          You haven't rated any movies! Rate a movie by visiting it's 'More
          Info' page.
        </p>
      )}
    </div>
  );
}

export default Rated;
