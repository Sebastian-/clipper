import React, { useEffect, useState } from "react";
import { getMovieDetails } from "../utils/MovieAPI";
import { useParams } from "react-router-dom";
import placeholder from "../img/placeholder.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
import { getPosterURL } from "../utils/MovieAPI";
import FavoriteMovieBtn from "./FavoriteMovieBtn";
import MovieRating from "./MovieRating";

function MovieDetail(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieData();
  }, [id]);

  return (
    <div className="page-container">
      {movie ? (
        <div className="movie-detail">
          <img
            src={getPosterURL(movie.poster_path)}
            alt={"Poster for " + movie.title}
            onError={e => {
              if (e.target.src !== placeholder) {
                e.target.src = placeholder;
              }
            }}
          />
          <div className="detail-body">
            <div className="heading">
              <div>
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
              </div>
              <FavoriteMovieBtn movie={movie} />
            </div>
            <p>{movie.overview}</p>

            <div className="user-rating">
              <p>Your Rating:</p>
              <MovieRating movie={movie} />
            </div>
            <div className="avg-rating">
              <p>Average User Rating: </p>
              <CircularProgressbar
                value={movie.vote_average * 10}
                text={`${movie.vote_average}`}
                strokeWidth={10}
                styles={{
                  text: {
                    fontSize: "30px"
                  }
                }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MovieDetail;
