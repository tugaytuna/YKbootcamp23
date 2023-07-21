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
        " olduğu için sitemize giriş yapamazsınız. 18 yaşından küçüksünüz!."
    );
  }
}

function bilgiler(isim, yas) {
  console.log("İsim: " + isim);
  console.log("Yaş: " + yas);
}
//function için default değer belirleme örneği

// welcome("tugay", 14);

bilgiler("tugay");
