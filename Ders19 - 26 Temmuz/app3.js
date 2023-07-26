function welcome(isim, yas) {
  console.log("Web Sitemize hoş geldin " + isim + "!");

  if (yas >= 18) {
    console.log(
      "Yaşınız " + yas + " olduğu için sitemize giriş yapabilirsiniz."
    );
  } else {
    console.log(
      "Yaşınız " +
        yas +
        " olduğu için sitemize giriş yapamazsınız. 18 yaşından küçüksünüz!"
    );
  }
}

function bilgiler(isim = "Misafir", soyisim, yas = 0) {
  console.log("İsim: " + bicimlendirme(isim));
  console.log("Soyisim: " + bicimlendirme(soyisim));
  console.log("Yaş: " + yas);
}

// welcome("tugay", 25);

function bicimlendirme(yazi = "") {
  return yazi.toUpperCase();
}

bilgiler("tuGay", "tuNA", 18);

console.log(bicimlendirme("arda"));
