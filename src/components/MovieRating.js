import React, { useState } from "react";
import Select from "react-select";
import { getRating, addRating } from "../utils/localStorageAPI";

function MovieRating(props) {
  const [rating, setRating] = useState(getRating(props.movie));

  const ratingOptions = () => {
    let options = [];
    for (let i = 10; i > 0; i--) {
      options.push({
        value: i,
        label: i
      });
    }
    return options;
  };

  const handleSelect = option => {
    addRating(props.movie, option.value);
    setRating(option.value);
  };

  return (
    <div>
      {rating ? (
        rating.toString()
      ) : (
        <Select
          options={ratingOptions()}
          value={{ value: rating, label: rating }}
          onChange={handleSelect}
        />
      )}
    </div>
  );
}

export default MovieRating;
