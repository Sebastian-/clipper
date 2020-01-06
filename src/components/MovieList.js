import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  return (
    <div className="movie-container">
      {props.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
