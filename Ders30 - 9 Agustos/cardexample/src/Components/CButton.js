import React from "react";
import "./CButtonStyle.css";

function CButton({ text = "Kaydet", tiklandi }) {
  return (
    <div className="body" onClick={tiklandi}>
      <label className="text">{text}</label>
    </div>
  );
}

export default CButton;
