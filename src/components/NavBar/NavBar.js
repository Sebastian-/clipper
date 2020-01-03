import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const links = [
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
      <div className="navbar">
        <h1>Clipper</h1>
        <button className="btn-menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <nav className={displayNav ? "active" : null}>
        <ul>
          {links.map(link => (
            <li key={link.path}>
              <NavLink
                exact
                to={link.path}
                activeClassName="active"
                onClick={toggleMenu}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
