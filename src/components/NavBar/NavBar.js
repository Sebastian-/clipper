import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.scss";

const routes = [
  { path: "/", name: "Home" },
  { path: "/discover", name: "Discover" },
  { path: "/favorites", name: "Favorites" },
  { path: "/rated", name: "Rated" },
  { path: "/about", name: "About" }
];

function NavBar(props) {
  const [displayNav, setDisplayNav] = useState(false);

  function toggleMenu(e) {
    setDisplayNav(!displayNav);
  }

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar">
          <h1>Clipper</h1>
          <button className="btn-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <nav className={displayNav ? "active" : null}>
          <ul>
            {routes.map(route => (
              <li key={route.path}>
                <NavLink
                  exact
                  to={route.path}
                  activeClassName="active"
                  onClick={toggleMenu}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
