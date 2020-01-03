import React, { useEffect, useState } from "react";
import * as MovieAPI from "../utils/MovieAPI";

function Home(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieAPI.getPopular().then(movies => setMovies(movies.slice(0, 12)));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
