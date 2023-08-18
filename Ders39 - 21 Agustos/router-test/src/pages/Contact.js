import React from "react";
import { Outlet, Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>Contacts Page</h1>
      <Link to="/Blogs">Blogs</Link>

      <Outlet></Outlet>
    </div>
  );
}

export default Contact;
