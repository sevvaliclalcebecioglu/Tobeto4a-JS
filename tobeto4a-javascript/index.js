console.log("Helloworld");

//#region Değişkenler
console.log("----- Değişkenler -----");

// Number
let number1Example = 10;
let number2Example = 3.14;
console.log(typeof number1Example, number1Example);
console.log(typeof number2Example, number2Example);

// String
const stringExample = "Ahmet";
console.log(typeof stringExample, stringExample);

// Boolean
const booleanExample = true;
console.log(typeof booleanExample, booleanExample);

// null: Boş değer geçildiğini belirtir.
let nullExample = null;
console.log(typeof nullExample, nullExample);

// undefined: Herhangi bir değer geçilmediğini belirtir.
let undefinedExample;
console.log(typeof undefinedExample, undefinedExample);

// Array
const arrayExample = [1, "ahmet", true, {}, null];
// const arr2 = new Array(1, 2, 3, 4, 5);
arrayExample.push("yeni eleman");
console.log(typeof arrayExample, arrayExample, arrayExample[1]);

// Object
const objectExample = {
  name: "Ahmet",
  surname: "Çetikaya",
  age: 25,
  isStudent: true,
  address: {
    city: "Ankara",
    district: "Çankaya",
  },
  // Arrow function
  getFullName: () => {
    return this.name + " " + this.surname;
  },
};
// const objectExample2 = new Object();
// objectExample2.name = "Ahmet";
// objectExample2.age = 25;
// objectExample2.isStudent = true;
// objectExample2.address = {
//     city: "Ankara",
//     district: "Çankaya"
// };
// objectExample2.getFullName = function () {
//     return this.name + " " + this.surname;
// };
console.log(
  typeof objectExample,
  objectExample,
  objectExample.name,
  objectExample["name"]
);

// Function
function sum(a, b) {
  return a + b;
}
console.log(typeof sum, sum(5, 10));

const sumExample = sum;
console.log(typeof sum, sumExample(5, 10));

// Date
const dateExample = new Date();
console.log(typeof dateExample, dateExample);

// RegExp
const regExpStringExample = "abc";
const regExpExample = /abc/;
// const regExpExample2 = new RegExp("abc");
console.log(typeof regExpExample, regExpExample.test(regExpStringExample));

//#endregion

//#region Operatörler

// Aritmetik Operatörler
console.log("----- Aritmetik Operatörler -----");

// + : Toplama
console.log("Toplama: ", number1Example + number2Example);
// - : Çıkarma
console.log("Çıkarma: ", number1Example - number2Example);
// * : Çarpma
console.log("Çarpma: ", number1Example * number2Example);
// / : Bölme
console.log("Bölme: ", number1Example / number2Example);
// % : Mod alma
console.log("Mod alma: ", number1Example % number2Example);
// ++ : Bir arttırma
console.log("Bir arttırma: ", number1Example++);
// -- : Bir azaltma
console.log("Bir azaltma: ", number1Example--);
// ** : Üs alma
console.log("Üs alma: ", number1Example ** number2Example);

// Karşılaştırma Operatörleri
console.log("----- Karşılaştırma Operatörleri -----");

// == : Eşit mi
console.log('"3" == 3', "3" == 3); // = = // Tip dönüşümü yapar, değerler eşitse true döner
console.log('"3" === 3', "3" === 3); // = = = // Tip dönüşümü yapmaz, değerler ve tipler eşitse true döner

// != : Eşit değil mi
console.log('"3" != 3', "3" != 3); // ! = // Tip dönüşümü yapar, değerler eşit değilse true döner
console.log('"3" !== 3', "3" !== 3); // ! = = // Tip dönüşümü yapmaz, değerler ve tipler eşit değilse true döner

// > : Büyük mü
console.log("Büyük mü: ", number1Example > number2Example);
// < : Küçük mü
console.log("Küçük mü: ", number1Example < number2Example);
// >= : Büyük eşit mi
console.log("Büyük eşit mi: ", number1Example >= number2Example);
// <= : Küçük eşit mi
console.log("Küçük eşit mi: ", number1Example <= number2Example);

// Mantıksal Operatörler
console.log("----- Mantıksal Operatörler -----");

// && : Ve
console.log("Ve: ", true && true);
// || : Veya
console.log("Veya: ", true || false);
// ! : Değil
console.log("Değil: ", !true);

// Atama Operatörleri
console.log("----- Atama Operatörleri -----");

// += : Topla ve ata
number1Example += number2Example;
console.log("Topla ve ata: ", number1Example);
// -= : Çıkar ve ata
number1Example -= number2Example;
console.log("Çıkar ve ata: ", number1Example);
// *= : Çarp ve ata
number1Example *= number2Example;
console.log("Çarp ve ata: ", number1Example);
// /= : Böl ve ata
number1Example /= number2Example;
console.log("Böl ve ata: ", number1Example);
// %= : Mod al ve ata
number1Example %= number2Example;
console.log("Mod al ve ata: ", number1Example);
// **= : Üs al ve ata
number1Example **= number2Example;
console.log("Üs al ve ata: ", number1Example);

// Diğer Operatörler
console.log("----- Diğer Operatörler -----");

// delete : Sil
console.log("Delete öncesi: ", objectExample.isStudent);
delete objectExample.isStudent;
console.log("Delete sonrası: ", objectExample.isStudent);
// in : İçinde var mı
console.log("İçinde var mı: ", "name" in objectExample);
// instanceof : İnstance mı
console.log("İnstance mı: ", objectExample instanceof Object);
console.log("İnstance mı: ", objectExample instanceof Array);
// new : Yeni
const newObjectExample = new Object();
console.log("Yeni: ", newObjectExample);
// typeof : Türü
console.log("Türü: ", typeof objectExample);

//#endregion

//#region Koşullar
console.log("----- Koşullar -----");

if (objectExample.age > 18) {
  console.log("Yaş büyük");
} else if (objectExample.age < 18) {
  console.log("Yaş küçük");
} else {
  console.log("Yaş eşit");
}

switch (objectExample.age) {
  case 18:
    console.log("Yaş 18");
    break;
  case 25:
    console.log("Yaş 25");
    break;
  default:
    console.log("Yaş farklı");
}
//#endregion

//#region Döngüler
console.log("----- Döngüler -----");

// For
for (let i = 0; i < 10; i++) {
  console.log("For: ", i);
}

// While
let j = 0;
while (j < 10) {
  console.log("While: ", j);
  j++;
}

// Do While
let k = 0;
do {
  console.log("Do While: ", k);
  k++;
} while (k < 10);

// For In
for (let key in objectExample) {
  console.log("For In: ", key, objectExample[key]);
}
for (let index in arrayExample) {
  console.log("For In: ", index, arrayExample[index]);
}

// For Of
for (let value of arrayExample) {
  console.log("For Of: ", value);
}
// forEach
arrayExample.forEach((value, index) => {
  console.log("ForEach: ", index, value);
});
//#endregion

//#region Destructuring ve Rest/Spread
console.log("----- Destructuring ve Rest/Spread -----");

// const name = objectExample.name;
// const age = objectExample.age;
// const city = objectExample.address.city;
const {
  name: userName,
  age,
  address: { city },
} = objectExample;
console.log("Destructuring: ", userName, age, city);

// const first = arrayExample[0];
// const second = arrayExample[1];
const [first, second, ...rest] = arrayExample; // [1, "ahmet", true, {}, null, "yeni eleman"]
console.log("Destructuring: ", first, second, rest);

// console.log("Spread: ", arrayExample[0], arrayExample[1], arrayExample[2], arrayExample[3], arrayExample[4], arrayExample[5]);
console.log("Spread: ", ...arrayExample);

// const arrayExample2 = [arrayExample[0], arrayExample[1], arrayExample[2], arrayExample[3], arrayExample[4], arrayExample[5], "yeni eleman2"]; // Yeni bir referans oluşturur
// const arrayExample2 = arrayExample.concat("yeni eleman2"); // Yeni bir referans oluşturur
const arrayExample2 = [...arrayExample, "yeni eleman2"]; // Yeni bir referans oluşturur
console.log("Spread: ", arrayExample2);

// const objectExample2 = { name: objectExample.name, surname: objectExample.surname, age: 30, isStudent: objectExample.isStudent, address: objectExample.address, identity: "1234567890" }; // Yeni bir referans oluşturur
// const objectExample2 = Object.assign({}, objectExample, { age: 30, identity: "1234567890" })
const objectExample2 = { ...objectExample, age: 30, identity: "1234567890" }; // Yeni bir referans oluşturur
console.log("Spread: ", objectExample2);