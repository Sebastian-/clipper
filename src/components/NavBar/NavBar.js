import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", name: "Home" },
  { path: "/discover", name: "Discover" },
  { path: "/favorites", name: "Favorites" },
  { path: "/rated", name: "Rated" },
  { path: "/about", name: "About" }
];

function NavBar(props) {
  return (
    <div>
      <h1>Clipper</h1>
      <nav>
        <ul>
          {links.map(link => (
            <li key={link.path}>
              <NavLink to={link.path} activeClassName="active">
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
