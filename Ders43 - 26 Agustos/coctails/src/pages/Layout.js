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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Sayfa</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
