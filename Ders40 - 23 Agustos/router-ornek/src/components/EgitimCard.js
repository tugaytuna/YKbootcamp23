import React from "react";
import "./EgitimCardStyle.css";

function EgitimCard({ baslik, gorsel, aciklama }) {
  return (
    <div className="egitimcard">
      <img src={gorsel} alt="" />
      <div>
        <h2>{baslik}</h2>
        <p>{aciklama}</p>
      </div>
    </div>
  );
}

export default EgitimCard;
