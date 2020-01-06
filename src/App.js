import React from "react";
import "./styles/styles.scss";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Favorites from "./components/Favorites";
import Rated from "./components/Rated";
import About from "./components/About";
import TitleSearch from "./components/TitleSearch";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <TitleSearch />
            <Home />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/search">
            <TitleSearch />
            <SearchResults />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/rated">
            <Rated />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
