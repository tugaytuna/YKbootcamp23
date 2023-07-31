import tugay from "tugay";

user1 = {
  username: "tugay",
  password: 123,
};

user2 = {
  username: "tuna",
  password: 000,
};

let inputUsername = document.getElementById("inputUsername");
let inputPassword = document.getElementById("inputPassword");

let btnLogin = document.getElementById("btnLogin");

function buttonClicked() {
  if (
    isim1(inputUsername.value) == user1.username &&
    inputPassword.value == user1.password
  ) {
    console.log("user1 giriş yapıldı");
    btnLogin.className = "user1";
  } else if (
    isim1(inputUsername.value) == user2.username &&
    inputPassword.value == user2.password
  ) {
    console.log("user2 giriş yapıldı");
    btnLogin.className = "user2";
  }
}

function isim1(plaka) {
  return isim.toLowerCase();
}
