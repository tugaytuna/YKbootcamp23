import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./style.css";

function Layout() {
  return (
    <div className="layoutMain">
      <h1>Coctails</h1>
      <nav>
        <ul>
          <li>
            <Link className="link1" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link1" to="/blogs">
              Favorite
            </Link>
          </li>
          <li>
            <Link className="link1" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
