import { useState } from "react";
import "./Userinfo.css";

function Userinfo({ name = "Misafir", surname, age, description }) {
  //   let isim = "Tugay";
  //   let soyisim = "Tuna";
  //   let yas = 25;
  //   let aciklama = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

  return (
    <div className="userCard">
      <h4 className="baslik1">İsim: {name}</h4>
      <h4 className="baslik1">Soyisim: {surname}</h4>
      <h4 className="baslik1">Yaş: {age}</h4>
      <p className="paragraf1">{description}</p>
      {age < 18 && <h6 className="uyari">Kullanıcı yaşı 18'den küçüktür!</h6>}
    </div>
  );
}

export default Userinfo;
