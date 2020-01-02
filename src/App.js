import React from "react";
import * as MovieAPI from "./MovieAPI.js";
import "./App.css";

function App() {
  MovieAPI.getPopular().then(movies => console.log(movies));

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
