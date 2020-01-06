import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function TitleSearch(props) {
  const [query, setQuery] = useState("");
  let history = useHistory();

  function handleInput(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push({
      pathname: "/search",
      search: `?query=${query}`
    });
  }

  return (
    <div className="title-search-container">
      <form onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="titleSearch">
          Search
        </label>
        <FontAwesomeIcon icon={faSearch} />
        <input
          id="titleSearch"
          value={query}
          onChange={handleInput}
          placeholder="Search by movie title..."
        />
      </form>
    </div>
  );
}

export default TitleSearch;
