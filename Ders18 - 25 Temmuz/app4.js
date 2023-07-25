function resmiIfade(isim) {
  let cinsiyet;

  switch (isim) {
    case "Tugay":
      cinsiyet = "erkek";
      break;

    case "Aslı":
      cinsiyet = "kadın";
      break;

    case "Arda":
      cinsiyet = "erkek";
      break;

    case "Ayşe":
      cinsiyet = "kadın";
      break;

    case "Ataberk":
      cinsiyet = "erkek";
      break;

    default:
      cinsiyet = "tanımlanmamış";
      break;
  }

  if (cinsiyet == "erkek") {
    return isim + " Bey";
  } else if (cinsiyet == "kadın") {
    return isim + " Hanım";
  } else {
    console.log("Hatalı işlem yaptınız. Cinsiyeti doğru giriniz.");
  }
}

console.log(resmiIfade("Tugay"));
console.log(resmiIfade("Ayşe"));
console.log(resmiIfade("Ataberk"));
console.log(resmiIfade("Aslı"));

// switch (isim) {
//   case "tugay":
//     console.log("Admin Hoşgeldin");
//     break;
//   case "arda":
//     console.log("Yazılımcı Hoşgeldin");
//     break;
//   default:
//     console.log("Siteye giriş yapamazsınız!");
//     break;
// }
