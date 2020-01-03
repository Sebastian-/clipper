import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function TitleSearch(props) {
  const [query, setQuery] = useState("");

  function handleInput(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="title-search-container">
      <form>
        <label className="sr-only">Search</label>
        <FontAwesomeIcon icon={faSearch} />
        <input
          value={query}
          onChange={handleInput}
          placeholder="Search by movie title..."
        />
      </form>
    </div>
  );
}

export default TitleSearch;
