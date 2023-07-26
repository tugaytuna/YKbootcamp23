// str string - metinsel ifade
// int integer  - rakamlardan oluşan sayısal ifade
// bool boolean - true ya da false - 1 ya da 0 - doğru ya da yanlış

// dizi - array

let dizi1 = ["tugay", "arda", "bahadır", "ataberk", "ali", 1, 4, 6];
let dizi2 = [];

let sayi = 2;

console.log(dizi1);

console.log(dizi1[2]);
console.log(dizi1[sayi]);

console.log(dizi1.length);

dizi1.push("tolga");
console.log(dizi1);

dizi1[1] = "ardacan";

console.log(dizi1);

// dizi elemanlarını tek tek ekrana yazdırmak

// console.log("Dizinin 1. elemanı:", dizi1[0]);
// console.log("Dizinin 2. elemanı:", dizi1[1]);
// console.log("Dizinin 3. elemanı:", dizi1[2]);
// console.log("Dizinin 4. elemanı:", dizi1[3]);
// console.log("Dizinin 5. elemanı:", dizi1[4]);
// console.log("Dizinin 6. elemanı:", dizi1[5]);

// değişken oluşturma ve değer verme ; koşul ifadesi ; koşulu bozmaya çalışan ifade

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

for (let i = 0; i < dizi1.length; i++) {
  console.log(dizi1[i]);
}
