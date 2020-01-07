import React, { useState } from "react";
import Select from "react-select";
import { getRating, addRating } from "../utils/localStorageAPI";
import { CircularProgressbar } from "react-circular-progressbar";

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
        <CircularProgressbar
          value={rating * 10}
          text={`${rating}`}
          strokeWidth={10}
          styles={{
            root: {
              width: "60px"
            },
            text: {
              fontSize: "30px"
            }
          }}
        />
      ) : (
        <Select
          options={ratingOptions()}
          onChange={handleSelect}
          placeholder={""}
        />
      )}
    </div>
  );
}

export default MovieRating;
