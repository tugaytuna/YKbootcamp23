import React from "react";
import "./ListofSearchStyle.css";

function ListofSearch({ title, image }) {
  return (
    <div className="SearchMainClass">
      <label className="title" htmlFor="">
        {title}
      </label>
      <img src={image} alt="" />
    </div>
  );
}

export default ListofSearch;
