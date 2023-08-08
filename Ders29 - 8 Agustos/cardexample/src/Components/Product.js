import React from "react";
import "./ProductStyle.css";

function Product({ urunAdi, gorsel, aciklama }) {
  return (
    <div className="card">
      <img className="gorsel1" src={gorsel} alt="" />
      <h2>{urunAdi}</h2>
      <p>{aciklama}</p>
    </div>
  );
}

export default Product;
