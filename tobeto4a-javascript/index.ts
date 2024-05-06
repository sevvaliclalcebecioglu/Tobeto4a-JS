console.log("Helloworld");

//#region Değişkenler
console.log("----- Değişkenler -----");

// Number
let number1Example : number = 10; // typescripte tip'ini de belli edebilirim .
let number2Example : number = 3.14;
//number2Example = "20"; // string olduğu için hata verir. 
console.log(typeof number1Example, number1Example);
console.log(typeof number2Example, number2Example);

// typescriptte bir değişkene birden çok tip belirtebilirim . 

// String
let stringExample : string | number = "Ahmet"; // string veya number da olabilir diyorum .
console.log(typeof stringExample, stringExample);

let stringExample2 : "İclal" | "Şevval" = "İclal"; // İclal ya da Şevval olabilir diye belirttim . 
stringExample2 = "İclal"; // O yüzden buraya da sadece İclal ve Şevval yazabilirim .
console.log(typeof stringExample2, stringExample2)


// Boolean
const booleanExample : boolean = true;
console.log(typeof booleanExample, booleanExample);

// null: Boş değer geçildiğini belirtir.
// boşta olsa bir değeri var . 
let nullExample : null = null; // burda da birden çok veri tipi verebilirim . null | number | undifend gibi 
console.log(typeof nullExample, nullExample);

// Bakıldığında null da undifend da boş değer , her hangi bir değeri yok demek ama null değeri geliştircinin kendisinin boş geçtiği değerdir . Bilerek isteyerek geçilen boş değerdir . Undifend ise ne kullanıcı ne de başkası gelipde her hangi bir değer atamamış . Daha değeri belli değildir.

// yapı olarak kesinlikle aynıdır . anlam olarak değişir .

// undefined: Herhangi bir değer geçilmediğini belirtir.
let undefinedExample : undefined;
console.log(typeof undefinedExample, undefinedExample);

type CustomType = number | string | null | undefined; // Bu şekilde de tiplerimi belirtebilirim .
let multipleTypeExample : CustomType = undefined;  // typescripte bu şekilde tiplerimizi belirtmiş oluyoruz . 
multipleTypeExample = 5;
multipleTypeExample = "İclal";
multipleTypeExample = null;

// Javadaki gibi herhangi bir veri tipi atamak için any 'yi kullanırız .
// Ama typeScript tarafında any kullanımı çok tavsiye edilmiyor . 

// export ; dışarıya aktar , dışardaki dosyalarda da kullan .

let anyTypeExample: any = 5; // any ; istediğim veri tipini kullanırım .  
anyTypeExample = "İclal";
anyTypeExample = true;

// any : Herhangi bir türde değer alabilir.

// unknown: any'den farkı, tipin belirsiz olduğu durumlarda kullanılır.
let unknownTypeExample : unknown = 5;
unknownTypeExample = "İclal";

// never : Hiçbir tip alamaz .
let neverTypeExample : never;
// neverTypeExample = 5; // hata verir.

// Array
// any[] veya unknown[] verebilirim . String[] verirsem hata verir . Çünkü [] içinde sadece string yok .
const arrayExample : any[] = [1, "ahmet", true, {}, null];
// new array demektense [] ile aşağıdaki satırın aynısını yapabiliriz. Ayriyeten [] içerisinde biri number , biri boolean , biri string olabilir . Her bir eleman her hangi bir veri tipi olabilir .
// const arr2 = new Array(1, 2, 3, 4, 5);
arrayExample.push("yeni eleman");
console.log(typeof arrayExample, arrayExample, arrayExample[1]);

// string array için ;
const stringArrayExample: string[] = ["İclal","Zehra"];
console.log(typeof stringArrayExample, stringArrayExample, stringArrayExample[1]);
// [1] diye belirttiğim için ekrana sadece İclal yazdırır .

// Tuple = sırasıyla [] içine veri tiplerini belirtirim .
const tupleExample: [number, string, boolean] = [1, "İclal", true];

// Javascripte olmayan özellikleri eklediği için typescript kapsamlı bir betik dil olmuş oluyor . 

// Enum 
enum Color {
  Red = 1,  // değeri sayı veya string olabilir . 
  Green = 2,
  Blue,
}
//Color.Green

// javaScript de havada (new'leme yapmadan) nesne oluşturabiliyoruz . 

// Object (nesne)
const objectExample : {
  name: string,
  surname: string,
  age: number,
  isStudent: boolean | undefined,
  address: {
    city: string,
    district: string,
  },
  // Objenin içine metodda ekleyebilirim 
  //getFullName: () => string
  } = {
    name: "Ahmet",
    surname: "Çetikaya",
    age: 25,
    isStudent: true,
    address: {
      city: "Ankara",
      district: "Çankaya",
  },
  // // Arrow function // //
  //getFullName: () => {
  //  return this.name + " " + this.surname;
  // },
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
// Fonksiyonlarda da veri tipini belirtebilirim . 
// Geri dönüş tipimide number olarak belirttim . Bir şey dönmesini istemezsem void yazarım . 
function sum(a: number, b:number) : number {
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
///console.log('"3" == 3', "3" == 3); // = = // Tip dönüşümü yapar, değerler eşitse true döner
///console.log('"3" === 3', "3" === 3); // = = = // Tip dönüşümü yapmaz, değerler ve tipler eşitse true döner

// != : Eşit değil mi
///console.log('"3" != 3', "3" != 3); // ! = // Tip dönüşümü yapar, değerler eşit değilse true döner
///console.log('"3" !== 3', "3" !== 3); // ! = = // Tip dönüşümü yapmaz, değerler ve tipler eşit değilse true döner

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
//delete objectExample.isStudent;
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
const [first, second, ...rest] : unknown[] = arrayExample; // [1, "ahmet", true, {}, null, "yeni eleman"]
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

//#endregion

//#region Error Handling
try {
  throw new Error("Error");
} catch (error) {
  console.log(error);
} finally {
  console.log("Finally");
}
//#endregion

//#region OOP

// metodlara veya class'lara da abstract diye belirtebiliyoruz .

// Abstract Class
abstract class Human {
  // Abstract Method
  abstract getName(); 
}

// TypeScripte private - public diye tip ataması da yapabilirim . 

class Person extends Human { // OOP'nin 1. özelliği Sınıf ve Nesneler
  // başına "_" koyduğumuz zaman sözel olarak private olduğunu belirtmiş oluyoruz. 
  private _name : string;
  protected _age : string;

  constructor(name, age) {
    super(); // Abstract sınıfın constructor'ını çağırır
    // this: Oluşturulan nesneyi temsil eder
    this._name = name;
    this._age = age;
  }

  // Varsayılan (typescripte) erişim belirteci : public'dir . Yazmasamda olur . 

  override getName() { // OOP'nin 2. özelliği Kapsülleme
    return this._name;
  }
}

// implements : Bir interface'in veya sınıfın içindeki property ve metotları implement edilmesini sağlar . 

class Student extends Person { // OOP'nin 3. özelliği Kalıtım
  _school;

  constructor(name, age, school) {
    // super: Üst sınıfı gösterir
    super(name, age); // Üst sınıfın constructor'ını çağırır

    // this.getName(); // Üst sınıfın metotlarını çağırabilir
    // super.getName(); // Üst sınıfın metotlarını çağırabilir

    this._school = school;
  }

  // Overriding: Üst sınıftaki metodu ezer
  getName() { // OOP'nin 4. özelliği Polimorfizm (Çok biçimlilik) : Aynı isimde farklı işlev
    return "Öğrenci: " + super.getName(); // Üst sınıfın metotlarını çağırabilir
  }

  getSchool() {
    return this._school;
  }
}

// Gerçekte bir human, user ya da person olması beni ilgilendirmiyor . Sadece ismini vermesi benim için yeterli . Soyuttur . 
//const human = (new Student("Ahmet", 25));
//console.log(human.getName());

//const logger = (logger)(new ConsoleLogger());
//logger.log("Log");

// Nesne yönelimli programlamada günlük hayattaki bazı kavramların yazılıma aktarılmasıdır

// TypeScript geliştirme ortamı için olan betik bir dildir .

// Daha sonrada değiştirebilmek için let kullandım .

let human : Human = new Student("İclal", 21, "Atatürk Üniversitesi");
console.log(human.getName());

const human2 : Human = new Person("Sema", 45);
console.log(human2.getName());

//#endregion 