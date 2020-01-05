import React from "react";
import tmdbLogo from "../img/tmdb.png";

function About(props) {
  return (
    <div className="page-container">
      <h2>About</h2>
      <p>
        This is a React-based application used to browse data provided by The
        Movie Database (TMDb).
      </p>
      <p>
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </p>
      <img src={tmdbLogo} alt="Powered by TMDb" />
    </div>
  );
}

export default About;
