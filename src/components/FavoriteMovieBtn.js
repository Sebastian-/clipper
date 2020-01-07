import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  isFavorited,
  addFavorite,
  removeFavorite
} from "../utils/localStorageAPI";

function FavoriteMovieBtn(props) {
  const movie = props.movie;
  const [favorited, setFavorited] = useState(isFavorited(movie));

  function handleClick() {
    if (favorited) {
      removeFavorite(movie);
      setFavorited(false);
    } else {
      addFavorite(movie);
      setFavorited(true);
    }
  }

  const styles = {
    liked: {
      color: "#fce413"
    },
    unliked: {
      color: "grey"
    }
  };

  return (
    <div className="fav-movie-btn" onClick={handleClick}>
      <button style={favorited ? styles.liked : styles.unliked}>
        <FontAwesomeIcon icon={faStar} />{" "}
      </button>
      {favorited ? "Favorited" : "Click to Favorite"}
    </div>
  );
}

export default FavoriteMovieBtn;
