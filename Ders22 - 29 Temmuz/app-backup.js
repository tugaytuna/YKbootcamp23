let kullanici1 = {
  kullaniciAdi: "tugay",
  sifre: 123,
  admin: true,
  resim: "images/tugay.png",
};

let kullanici2 = {
  kullaniciAdi: "ataberk",
  sifre: 0000,
  admin: true,
  resim: "images/ataberk.jpg",
};

let kullanici3 = {
  kullaniciAdi: "bahadır",
  sifre: 555,
  admin: false,
  resim: "images/bahadir.png",
};

let kullanici4 = {
  kullaniciAdi: "arda",
  sifre: 111,
  admin: false,
  resim: "images/arda.jpg",
};

let inputText = document.getElementById("inputText");
let inputPass = document.getElementById("inputPass");
let img1 = document.getElementById("img1");

let profilIsim = document.getElementById("profilIsim");
let profilAdmin = document.getElementById("profilAdmin");

let button1 = document.getElementById("button1");

function button1Tiklandi() {
  if (button1.innerHTML == "Giriş Yap") {
    girisYap();
  } else {
    location.reload();
  }
}

function girisYap() {
  if (
    inputText.value == kullanici1.kullaniciAdi &&
    inputPass.value == kullanici1.sifre
  ) {
    profilIsim.innerHTML = "Kullanıcı Adı: " + kullanici1.kullaniciAdi;
    profilAdmin.innerHTML = "Admin: " + kullanici1.admin;
    // img1.setAttribute("src", "images/arda.jpg");
    img1.src = kullanici1.resim;

    girisBasarili();
  } else if (
    inputText.value == kullanici2.kullaniciAdi &&
    inputPass.value == kullanici2.sifre
  ) {
    profilIsim.innerHTML = "Kullanıcı Adı: " + kullanici2.kullaniciAdi;
    profilAdmin.innerHTML = "Admin: " + kullanici2.admin;
    img1.src = kullanici2.resim;
    girisBasarili();
  } else if (
    inputText.value == kullanici3.kullaniciAdi &&
    inputPass.value == kullanici3.sifre
  ) {
    profilIsim.innerHTML = "Kullanıcı Adı: " + kullanici3.kullaniciAdi;
    profilAdmin.innerHTML = "Admin: " + kullanici3.admin;
    img1.src = kullanici3.resim;
    girisBasarili();
  } else if (
    inputText.value == kullanici4.kullaniciAdi &&
    inputPass.value == kullanici4.sifre
  ) {
    profilIsim.innerHTML = "Kullanıcı Adı: " + kullanici4.kullaniciAdi;
    profilAdmin.innerHTML = "Admin: " + kullanici4.admin;
    img1.src = kullanici4.resim;
    girisBasarili();
  }
}

function girisBasarili() {
  console.log("giriş yapılıyor...");
  inputText.remove();
  inputPass.remove();
  button1.innerHTML = "Çıkış Yap";
  button1.style = "background-color: red ";
}
