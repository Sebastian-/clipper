import React from "react";
import placeholder from "../img/placeholder.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

function Movie(props) {
  const {
    poster_src,
    title,
    release_date,
    vote_average,
    overview
  } = props.movie;

  // image error handling https://stackoverflow.com/a/52622379
  return (
    <div className="movie-card">
      <img
        src={poster_src}
        alt={"Poster for " + title}
        onError={e => {
          if (e.target.src !== placeholder) {
            e.target.src = placeholder;
          }
        }}
      />

      <div className="card-body">
        <div className="card-header">
          <div className="header-rating">
            <CircularProgressbar
              value={vote_average * 10}
              text={`${vote_average * 10}%`}
              strokeWidth={10}
              styles={{
                text: {
                  fontSize: "30px"
                }
              }}
            />
          </div>
          <div className="header-text">
            <h3>{title}</h3>
            <p>{release_date}</p>
          </div>
        </div>
        <p className="card-content">{overview}</p>
        <div className="card-footer">
          <Link to="">More Info</Link>
        </div>
      </div>
    </div>
  );
}

export default Movie;
