import React, { useEffect, useState } from "react";
import { getMoviesByCategory } from "../utils/MovieAPI";
import MovieList from "./MovieList";
import Select from "react-select";

const movieCategory = [
  { value: "popular", label: "Popular" },
  { value: "top_rated", label: "Top Rated" },
  { value: "upcoming", label: "Upcoming" },
  { value: "now_playing", label: "Now Playing" }
];

function Home(props) {
  const [movies, setMovies] = useState([]);
  const [option, setOption] = useState(movieCategory[0]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMoviesByCategory(option.value);
        setMovies(movies.slice(0, 12));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [option]);

  return (
    <div className="page-container">
      <h2>{option.label}</h2>
      <Select options={movieCategory} value={option} onChange={setOption} />
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
