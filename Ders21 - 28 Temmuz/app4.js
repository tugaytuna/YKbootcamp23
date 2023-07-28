let baslik = document.getElementById("baslik");
let input1 = document.getElementById("input1");

let h4elementleri = document.getElementsByTagName("h4");

console.log(h4elementleri);

baslik.innerHTML = "Javascript Kod";

let inputDeger;

function butonTiklandi() {
  //   console.log("Buton Tıklandı!");
  inputDeger = input1.value;

  if (
    inputDeger == "tugay" ||
    inputDeger == "arda" ||
    inputDeger == "ataberk"
  ) {
    console.log("Giriş BAŞARILI");

    for (let i = 0; i < h4elementleri.length; i++) {
      h4elementleri[i].innerHTML =
        i + 1 + ".bölüm " + inputDeger + " hoş geldin!";
    }

    // h4elementleri[0].innerHTML = inputDeger + " hoş geldin!";
    // h4elementleri[1].innerHTML = inputDeger + " hoş geldin!";
    // h4elementleri[2].innerHTML = inputDeger + " hoş geldin!";
  } else {
    console.log("Giriş Başarısız!");
  }
}

// arrow function - ok fonksiyon

// function yazdir() {
//   console.log("deneme 1-2-3");
// }

// let yazdir2 = (x, y) => {
//   return x + y;
// };

// yazdir();

// console.log(yazdir2(1, 2));

// inputa girilen yazı "tugay" ise ilk
// h4 elementinin yazısı "tugay hoşgeldin" olarak değiştirilsin.

//+inputun yakalanması
//+inputun içindeki değerin değişkene aktarılması
//+butona tıklandıktan sonra ifadenin kontrolü (if)
//+1. h4 elementinin yakalanması
//+1. h4 elementinin değerinin değiştirilmesi
