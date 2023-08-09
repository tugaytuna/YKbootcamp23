import React from "react";
import "./ProductStyle.css";
import CButton from "./CButton";

function Product({ urunAdi, gorsel, aciklama }) {
  function sepeteEkle() {
    console.log("sepete eklendi!");
  }

  return (
    <div className="card">
      <img className="gorsel1" src={gorsel} alt="" />
      <h2>{urunAdi}</h2>
      <p>{aciklama}</p>
      <CButton text={"Sepete Ekle"} tiklandi={sepeteEkle}></CButton>
    </div>
  );
}

export default Product;
