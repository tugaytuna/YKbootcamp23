let baslik = document.getElementById("baslik");
let input1 = document.getElementById("input1");

let h4elementleri = document.getElementsByTagName("h4");

// console.log(h4elementleri[0].innerHTML);

baslik.innerHTML = "Javascript Kod";

let inputDeger;

function butonTiklandi() {
  //   console.log("Buton Tıklandı!");
  inputDeger = input1.value;

  if (inputDeger == "tugay" || inputDeger == "arda") {
    console.log("Giriş BAŞARILI");
    h4elementleri[0].innerHTML = inputDeger + " hoş geldin!";
  } else {
    console.log("Giriş Başarısız!");
  }
}

// inputa girilen yazı "tugay" ise ilk
// h4 elementinin yazısı "tugay hoşgeldin" olarak değiştirilsin.

//+inputun yakalanması
//+inputun içindeki değerin değişkene aktarılması
//+butona tıklandıktan sonra ifadenin kontrolü (if)
//+1. h4 elementinin yakalanması
//+1. h4 elementinin değerinin değiştirilmesi
