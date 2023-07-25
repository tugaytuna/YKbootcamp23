let isim = "tugay";
let soyisim = "tuna";
let yas = 18;

//DOM

const anasayfa_metin = document.getElementById("baslik");
const altBaslik = document.getElementsByClassName("altBaslik");

function bilgileriGoster() {
  console.log("İsim: " + isim);
  console.log("Soyisim: " + soyisim);
  console.log("Yaş: " + yas);
}

function butonTiklandi() {
  console.log("Buton Tıklandı!");
  //   anasayfa_metin.style = "color: red";
  anasayfa_metin.innerHTML = "Javascript Harika!" + isim;
}

console.log(altBaslik);
