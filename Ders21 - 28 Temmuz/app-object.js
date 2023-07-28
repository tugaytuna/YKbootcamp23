let kisi = {
  isim: "tugay",
  soyisim: "tuna",
  yas: 18,
  konum: "İstanbul",
  yazilimci: true,
  diller: ["csharp", "python", "javascript"],
};

console.log(kisi);

console.log(kisi.diller[1]);

kisi.diller[1] = "html";

console.log(kisi);

console.log(kisi.isim);
console.log(kisi["isim"]);
