import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import { getMovieGenres, getDiscoverMovies } from "../utils/MovieAPI";
import MovieList from "./MovieList";

function Discover(props) {
  const sortOptions = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "release_date.desc", label: "Release Date Descending" },
    { value: "release_date.asc", label: "Release Date Ascending" },
    { value: "original_title.asc", label: "Title (A - Z)" },
    { value: "original_title.desc", label: "Title (Z - A)" }
  ];

  const genreOptions = async () => {
    try {
      let genres = await getMovieGenres();
      genres = genres.map(genre => ({
        value: genre.id,
        label: genre.name
      }));
      return genres;
    } catch (error) {
      console.log(error);
    }
  };

  const yearOptions = () => {
    let years = [];

    for (let i = new Date().getFullYear(); i >= 1920; i--) {
      years.push({
        value: i,
        label: i.toString()
      });
    }

    return years;
  };

  const [year, setYear] = useState();
  const [genre, setGenre] = useState([]);
  const [order, setOrder] = useState(sortOptions[0]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const discoverMovies = async () => {
      try {
        const movies = await getDiscoverMovies(
          year ? year.value : null,
          toGenreIds(genre),
          order ? order.value : null
        );
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };

    discoverMovies();
  }, [year, genre, order]);

  const toGenreIds = genres => {
    return genres ? genres.map(genre => genre.value) : [];
  };

  return (
    <div className="page-container">
      <h1>Discover</h1>

      <div>
        <label htmlFor="year">Year</label>
        <Select
          id="year"
          options={yearOptions()}
          onChange={setYear}
          value={year}
        />
      </div>
      <div>
        <label htmlFor="genres">Genres</label>
        <AsyncSelect
          id="genres"
          isMulti
          cacheOptions
          defaultOptions
          loadOptions={genreOptions}
          onChange={setGenre}
          value={genre}
        />
      </div>
      <div>
        <label htmlFor="order">Order By</label>
        <Select
          id="order"
          options={sortOptions}
          value={order}
          onChange={setOrder}
        />
      </div>
      <MovieList movies={movies} />
    </div>
  );
}

export default Discover;
