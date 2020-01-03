import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Discover from "./Discover/Discover";
import Favorites from "./Favorites/Favorites";
import Rated from "./Rated/Rated";
import About from "./About/About";
import TitleSearch from "./TitleSearch/TitleSearch";

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
