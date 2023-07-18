let isim = "tugay";
let soyisim = "tuna";
let yas = 25;
let adres = "İstanbul";

let login = false;

if (isim == "tugay" && yas > 18) {
  login = true;
} else {
  login = false;
}

if (login) {
  console.log("Giriş Yapıldı!");
} else {
  console.log("Giriş yapılamaz!");
}

if (yas != 20) {
  console.log("Yaş 20 Değil!");
}

// AND ve OR
// VE  -  VEYA
// !  -> NOT, Değildir
// Örnek: != Eşit Değil İse
// MANTIK

// if (yas >= 18) {
//   //true - doğru
//   console.log("Siteye giriş yapabilirsiniz!");
// } else {
//   //false - yanlış
//   console.log("18 yaşından küçük olduğunuz için siteye giremezsiniz!");
// }

// if (isim == "tugay") {
//   console.log("Admin hoşgeldiniz!");
// } else if (isim == "bahadır" || isim == "arda") {
//   console.log("Yazılımcı hoşgeldiniz!");
// } else if (isim == "ataberk") {
//   console.log("Tasarımcı hoşgeldiniz!");
// } else {
//   console.log("Misafir kullanıcı hoşgeldiniz!");
// }
