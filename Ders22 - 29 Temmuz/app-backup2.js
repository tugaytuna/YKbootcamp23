let users = [
  {
    kullaniciAdi: "tugay",
    sifre: 123,
    admin: true,
    resim: "images/tugay.png",
  },
  {
    kullaniciAdi: "ataberk",
    sifre: 0000,
    admin: true,
    resim: "images/ataberk.jpg",
  },
  {
    kullaniciAdi: "bahadır",
    sifre: 555,
    admin: false,
    resim: "images/bahadir.png",
  },
  {
    kullaniciAdi: "arda",
    sifre: 111,
    admin: false,
    resim: "images/arda.jpg",
  },
  {
    kullaniciAdi: "ahmet",
    sifre: 123,
    admin: false,
    resim: "images/arda.jpg",
  },
];

let inputText = document.getElementById("inputText");
let inputPass = document.getElementById("inputPass");
let img1 = document.getElementById("img1");

let profilIsim = document.getElementById("profilIsim");
let profilAdmin = document.getElementById("profilAdmin");

let button1 = document.getElementById("button1");

let userID;

function button1Tiklandi() {
  if (button1.innerHTML == "Giriş Yap") {
    girisYap();
  } else {
    location.reload();
  }
}

function girisYap() {
  // if (
  //   inputText.value == users[0].kullaniciAdi &&
  //   inputPass.value == users[0].sifre
  // ) {
  //   profilIsim.innerHTML = "Kullanıcı Adı: " + users[0].kullaniciAdi;
  //   profilAdmin.innerHTML = "Admin: " + users[0].admin;
  //   // img1.setAttribute("src", "images/arda.jpg");
  //   img1.src = users[0].resim;

  //   girisBasarili();
  // } else if (
  //   inputText.value == kullanici2.kullaniciAdi &&
  //   inputPass.value == kullanici2.sifre
  // ) {
  //   profilIsim.innerHTML = "Kullanıcı Adı: " + kullanici2.kullaniciAdi;
  //   profilAdmin.innerHTML = "Admin: " + kullanici2.admin;
  //   img1.src = kullanici2.resim;
  //   girisBasarili();
  // } else if (
  //   inputText.value == kullanici3.kullaniciAdi &&
  //   inputPass.value == kullanici3.sifre
  // ) {
  //   profilIsim.innerHTML = "Kullanıcı Adı: " + kullanici3.kullaniciAdi;
  //   profilAdmin.innerHTML = "Admin: " + kullanici3.admin;
  //   img1.src = kullanici3.resim;
  //   girisBasarili();
  // } else if (
  //   inputText.value == kullanici4.kullaniciAdi &&
  //   inputPass.value == kullanici4.sifre
  // ) {
  //   profilIsim.innerHTML = "Kullanıcı Adı: " + kullanici4.kullaniciAdi;
  //   profilAdmin.innerHTML = "Admin: " + kullanici4.admin;
  //   img1.src = kullanici4.resim;
  //   girisBasarili();
  // }

  for (let i = 0; i < users.length; i++) {
    if (users[i].kullaniciAdi == inputText.value) {
      if (users[i].sifre == inputPass.value) {
        userID = i;
        girisBasarili();
        profilIsim.innerHTML = "Kullanıcı Adı: " + users[i].kullaniciAdi;
        profilAdmin.innerHTML = "Admin: " + users[i].admin;
        img1.src = users[i].resim;
      }
    }
  }
}

function girisBasarili() {
  console.log("giriş yapılıyor...");
  inputText.remove();
  inputPass.remove();
  button1.innerHTML = "Çıkış Yap";
  button1.style = "background-color: red ";
  // if (userID == 0) {
  //   button1.style = "background-color: yellow ";
  // } else {
  //   button1.style = "background-color: red ";
  // }


 
}
