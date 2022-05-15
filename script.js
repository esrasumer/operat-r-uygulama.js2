const kgCan = 60;
const kgAda = 40;

const heightCan = 1.70;
const heightAda = 1.50;

let IndexCan;
let IndexAda;

IndexAda = (kgAda) / (heightAda * heightAda);

IndexCan = (kgCan) / (heightCan * heightCan);

console.log(IndexAda);

console.log(IndexCan);

let adaHigherIndex = IndexAda > IndexCan;

let canHigherIndex = IndexCan > IndexAda;
console.log("Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük:" + adaHigherIndex);

console.log("Can'ın kilo indeksi Ada'nın kilo indeksinde daha büyük : " + canHigherIndex);



let AdaWeak = (IndexAda >= 0) && (IndexAda <= 18.4);
let AdaNormal = (IndexAda >= 18.5) && (IndexAda <= 24.9);
let AdaFat = (IndexAda >= 25) && (IndexAda <= 29.9);
let AdaObese = (IndexAda >= 30) && (IndexAda <= 34.9);

console.log("Ada zayıf:" + AdaWeak);
console.log("Ada normal:" + AdaNormal);
console.log("Ada şişman:" + AdaFat);
console.log("Ada obez:" + AdaObese);