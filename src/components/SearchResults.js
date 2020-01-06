import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../utils/MovieAPI";
import MovieList from "./MovieList";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults(props) {
  const query = useQuery().get("query");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    getResults();
  }, [query]);

  return (
    <div className="page-container">
      <h2>Results for "{query}"</h2>
      <MovieList movies={movies} />
    </div>
  );
}

export default SearchResults;
