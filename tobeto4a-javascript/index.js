var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Helloworld");
//#region Değişkenler
console.log("----- Değişkenler -----");
// Number
var number1Example = 10; // typescripte tip'ini de belli edebilirim .
var number2Example = 3.14;
//number2Example = "20"; // string olduğu için hata verir. 
console.log(typeof number1Example, number1Example);
console.log(typeof number2Example, number2Example);
// typescriptte bir değişkene birden çok tip belirtebilirim . 
// String
var stringExample = "Ahmet"; // string veya number da olabilir diyorum .
console.log(typeof stringExample, stringExample);
var stringExample2 = "İclal"; // İclal ya da Şevval olabilir diye belirttim . 
stringExample2 = "İclal"; // O yüzden buraya da sadece İclal ve Şevval yazabilirim .
console.log(typeof stringExample2, stringExample2);
// Boolean
var booleanExample = true;
console.log(typeof booleanExample, booleanExample);
// null: Boş değer geçildiğini belirtir.
// boşta olsa bir değeri var . 
var nullExample = null; // burda da birden çok veri tipi verebilirim . null | number | undifend gibi 
console.log(typeof nullExample, nullExample);
// Bakıldığında null da undifend da boş değer , her hangi bir değeri yok demek ama null değeri geliştircinin kendisinin boş geçtiği değerdir . Bilerek isteyerek geçilen boş değerdir . Undifend ise ne kullanıcı ne de başkası gelipde her hangi bir değer atamamış . Daha değeri belli değildir.
// yapı olarak kesinlikle aynıdır . anlam olarak değişir .
// undefined: Herhangi bir değer geçilmediğini belirtir.
var undefinedExample;
console.log(typeof undefinedExample, undefinedExample);
var multipleTypeExample = undefined; // typescripte bu şekilde tiplerimizi belirtmiş oluyoruz . 
multipleTypeExample = 5;
multipleTypeExample = "İclal";
multipleTypeExample = null;
// Javadaki gibi herhangi bir veri tipi atamak için any 'yi kullanırız .
// Ama typeScript tarafında any kullanımı çok tavsiye edilmiyor . 
// export ; dışarıya aktar , dışardaki dosyalarda da kullan .
var anyTypeExample = 5; // any ; istediğim veri tipini kullanırım .  
anyTypeExample = "İclal";
anyTypeExample = true;
// any : Herhangi bir türde değer alabilir.
// unknown: any'den farkı, tipin belirsiz olduğu durumlarda kullanılır.
var unknownTypeExample = 5;
unknownTypeExample = "İclal";
// never : Hiçbir tip alamaz .
var neverTypeExample;
// neverTypeExample = 5; // hata verir.
// Array
// any[] veya unknown[] verebilirim . String[] verirsem hata verir . Çünkü [] içinde sadece string yok .
var arrayExample = [1, "ahmet", true, {}, null];
// new array demektense [] ile aşağıdaki satırın aynısını yapabiliriz. Ayriyeten [] içerisinde biri number , biri boolean , biri string olabilir . Her bir eleman her hangi bir veri tipi olabilir .
// const arr2 = new Array(1, 2, 3, 4, 5);
arrayExample.push("yeni eleman");
console.log(typeof arrayExample, arrayExample, arrayExample[1]);
// string array için ;
var stringArrayExample = ["İclal", "Zehra"];
console.log(typeof stringArrayExample, stringArrayExample, stringArrayExample[1]);
// [1] diye belirttiğim için ekrana sadece İclal yazdırır .
// Tuple = sırasıyla [] içine veri tiplerini belirtirim .
var tupleExample = [1, "İclal", true];
// Javascripte olmayan özellikleri eklediği için typescript kapsamlı bir betik dil olmuş oluyor . 
// Enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
//Color.Green
// javaScript de havada (new'leme yapmadan) nesne oluşturabiliyoruz . 
// Object (nesne)
var objectExample = {
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
console.log(typeof objectExample, objectExample, objectExample.name, objectExample["name"]);
// Function
// Fonksiyonlarda da veri tipini belirtebilirim . 
// Geri dönüş tipimide number olarak belirttim . Bir şey dönmesini istemezsem void yazarım . 
function sum(a, b) {
    return a + b;
}
console.log(typeof sum, sum(5, 10));
var sumExample = sum;
console.log(typeof sum, sumExample(5, 10));
// Date
var dateExample = new Date();
console.log(typeof dateExample, dateExample);
// RegExp
var regExpStringExample = "abc";
var regExpExample = /abc/;
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
console.log("Üs alma: ", Math.pow(number1Example, number2Example));
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
number1Example = Math.pow(number1Example, number2Example);
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
var newObjectExample = new Object();
console.log("Yeni: ", newObjectExample);
// typeof : Türü
console.log("Türü: ", typeof objectExample);
//#endregion
//#region Koşullar
console.log("----- Koşullar -----");
if (objectExample.age > 18) {
    console.log("Yaş büyük");
}
else if (objectExample.age < 18) {
    console.log("Yaş küçük");
}
else {
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
for (var i = 0; i < 10; i++) {
    console.log("For: ", i);
}
// While
var j = 0;
while (j < 10) {
    console.log("While: ", j);
    j++;
}
// Do While
var k = 0;
do {
    console.log("Do While: ", k);
    k++;
} while (k < 10);
// For In
for (var key in objectExample) {
    console.log("For In: ", key, objectExample[key]);
}
for (var index in arrayExample) {
    console.log("For In: ", index, arrayExample[index]);
}
// For Of
for (var _i = 0, arrayExample_1 = arrayExample; _i < arrayExample_1.length; _i++) {
    var value = arrayExample_1[_i];
    console.log("For Of: ", value);
}
// forEach
arrayExample.forEach(function (value, index) {
    console.log("ForEach: ", index, value);
});
//#endregion
//#region Destructuring ve Rest/Spread
console.log("----- Destructuring ve Rest/Spread -----");
// const name = objectExample.name;
// const age = objectExample.age;
// const city = objectExample.address.city;
var userName = objectExample.name, age = objectExample.age, city = objectExample.address.city;
console.log("Destructuring: ", userName, age, city);
// const first = arrayExample[0];
// const second = arrayExample[1];
var first = arrayExample[0], second = arrayExample[1], rest = arrayExample.slice(2); // [1, "ahmet", true, {}, null, "yeni eleman"]
console.log("Destructuring: ", first, second, rest);
// console.log("Spread: ", arrayExample[0], arrayExample[1], arrayExample[2], arrayExample[3], arrayExample[4], arrayExample[5]);
console.log.apply(console, __spreadArray(["Spread: "], arrayExample, false));
// const arrayExample2 = [arrayExample[0], arrayExample[1], arrayExample[2], arrayExample[3], arrayExample[4], arrayExample[5], "yeni eleman2"]; // Yeni bir referans oluşturur
// const arrayExample2 = arrayExample.concat("yeni eleman2"); // Yeni bir referans oluşturur
var arrayExample2 = __spreadArray(__spreadArray([], arrayExample, true), ["yeni eleman2"], false); // Yeni bir referans oluşturur
console.log("Spread: ", arrayExample2);
// const objectExample2 = { name: objectExample.name, surname: objectExample.surname, age: 30, isStudent: objectExample.isStudent, address: objectExample.address, identity: "1234567890" }; // Yeni bir referans oluşturur
// const objectExample2 = Object.assign({}, objectExample, { age: 30, identity: "1234567890" })
var objectExample2 = __assign(__assign({}, objectExample), { age: 30, identity: "1234567890" }); // Yeni bir referans oluşturur
console.log("Spread: ", objectExample2);
//#endregion
//#region Error Handling
try {
    throw new Error("Error");
}
catch (error) {
    console.log(error);
}
finally {
    console.log("Finally");
}
//#endregion
//#region OOP
// Abstract Class
var Human = /** @class */ (function () {
    function Human() {
    }
    // Abstract Method
    Human.prototype.getName = function () {
        throw new Error("You have to implement the method");
    };
    return Human;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age) {
        var _this = _super.call(this) || this; // Abstract sınıfın constructor'ını çağırır
        // this: Oluşturulan nesneyi temsil eder
        _this._name = name;
        _this._age = age;
        return _this;
    }
    Person.prototype.getName = function () {
        return this._name;
    };
    return Person;
}(Human));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, school) {
        // super: Üst sınıfı gösterir
        var _this = _super.call(this, name, age) || this; // Üst sınıfın constructor'ını çağırır
        // this.getName(); // Üst sınıfın metotlarını çağırabilir
        // super.getName(); // Üst sınıfın metotlarını çağırabilir
        _this._school = school;
        return _this;
    }
    // Overriding: Üst sınıftaki metodu ezer
    Student.prototype.getName = function () {
        return "Öğrenci: " + _super.prototype.getName.call(this); // Üst sınıfın metotlarını çağırabilir
    };
    Student.prototype.getSchool = function () {
        return this._school;
    };
    return Student;
}(Person));
// Gerçekte bir human, user ya da person olması beni ilgilendirmiyor . Sadece ismini vermesi benim için yeterli . Soyuttur . 
//const human = (new Student("Ahmet", 25));
//console.log(human.getName());
//const logger = (logger)(new ConsoleLogger());
//logger.log("Log");
// Nesne yönelimli programlamada günlük hayattaki bazı kavramların yazılıma aktarılmasıdır
// TypeScript geliştirme ortamı için olan betik bir dildir .
//#endregion 
