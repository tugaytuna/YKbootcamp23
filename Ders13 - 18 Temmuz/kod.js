let isim = "tugay";
let soyisim = "tuna";
let yas = 25;
let adres = "İstanbul";

let login = false;

function topla() {
  //   yas = yas + 5;
  yas += 5;

  islemYap();
}

function islemYap() {
  console.log("İşlemYap Fonksiyonu çalıştı!");
  console.log("Kullanıcı adı kontrol ediliyor....");
  console.log("Şifre kontrol ediliyor....");
  console.log("Bilgiler doğrulandı.");
}

console.log(yas);
topla();

alert("Giriş Yapıldı!");

// if (isim == "tugay" && soyisim == "tuna") {
//   console.log("Giriş yapılıyor...");
//   islemYap();
//   console.log("Giriş Yapıldı!");
// }
