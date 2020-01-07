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
    <div onClick={handleClick}>
      <label className="sr-only" htmlFor="fav-button">
        {favorited ? "Remove from favorites" : "Add to favorites"}
      </label>
      <button
        className="fav-movie-btn"
        id="fav-button"
        style={favorited ? styles.liked : styles.unliked}
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
    </div>
  );
}

export default FavoriteMovieBtn;
