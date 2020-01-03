import React, { useState } from "react";

function TitleSearch(props) {
  const [query, setQuery] = useState("");

  function handleInput(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="title-search-container">
      <form>
        <label className="sr-only">Search</label>
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
