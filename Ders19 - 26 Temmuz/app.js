let isim = "tugay";
let soyisim = "tuna";
let yas = 18;

//DOM

let anasayfa_metin = document.getElementById("baslik");
let altBaslik = document.getElementsByClassName("altBaslik");
let h4elementleri = document.getElementsByTagName("h4");

let paragraf = document.getElementById("paragraf");
function bilgileriGoster() {
  console.log("İsim: " + isim);
  console.log("Soyisim: " + soyisim);
  console.log("Yaş: " + yas);
}

function butonTiklandi() {
  console.log("Buton Tıklandı!");

  anasayfa_metin.innerHTML = "Javascript Harika!";
  anasayfa_metin.style = "color: red";
}

console.log(anasayfa_metin.innerHTML);
console.log(h4elementleri);

paragraf.innerHTML = "Merhaba Web Sitemize Hoşgeldin Arda BEY";

console.log(h4elementleri[0].innerHTML);

// h4elementleri[0].innerHTML = "Madde 1";
// h4elementleri[1].innerHTML = "Madde 2";
// h4elementleri[2].innerHTML = "Madde 3";

// h4elementleri[0].style = "text-align:center";
// h4elementleri[1].style = "text-align:center";
// h4elementleri[2].style = "text-align:center";

for (let i = 0; i < h4elementleri.length; i++) {
  h4elementleri[i].innerHTML = "Madde " + (i + 1);
  h4elementleri[i].style = "text-align:center";
}

// Madde 1 - Madde 2 - Madde 3
// Bu elemanların her biri ekranda ortalasın.
