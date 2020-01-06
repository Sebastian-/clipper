import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
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

  return (
    <button onClick={handleClick}>
      {/* <FontAwesomeIcon icon={faHeart} /> */}
      {favorited.toString()}
    </button>
  );
}

export default FavoriteMovieBtn;
