console.log("Hello World");

//#region Değişkenler
//camelCase kullanırız 

// Number 
const a = 10;
const b = 3.14;
console.log(typeof a)
console.log(typeof b)

// String
const name = "İclal";
console.log(typeof name , name);

// Boolean
const c = true;
console.log(typeof c , c)

// const ifadeler sabit ifadelerdir .
// sonradan atama yapıp değiştirme yapmak için let değişken tutucusunu kullanırım .

// null = boş değer geçildiğini belirtir
// geliştiricinin kendisinin null geçtiği değer 
// boş değer tipi yok 
let d = null;
console.log(typeof d , d)

// null/undefined = yapı olarak aynı anlam olarak farklı

// undefined = her hangi bir değer geçilmediğini belirtir 
// geliştirici gelip hiçbir değer atamamış
let e;
console.log(typeof e , e)

// Array
const ary = [1, "iclal", true, {}, null];
// const ary2 = new Array(1, 2, 3, 4, 5);
// metodlara ulaşabilirim ;
ary.push("yeni eleman")
console.log(typeof ary, ary)

// object
const objectExample = {
    name: "İclal",
    surname : "Cebecioğlu",
    age : 20,
    isStudent : true,
    adress : {
        city : "Bolu",
        district : "Merkez"
    },
    // arrow function
    getFullName : () => {
        return this.name + " " + this.surname;
    }
};
console.log(typeof objectExample , objectExample, objectExample.name);

// Function 
function sum ( a,b){
    return a + b;
}
console.log(typeof sum, sum(6 , 10));

const sumExample = sum
console.log(typeof sum, sumExample(6,10));

// Data
const dataExample = new Date();
console.log(typeof dataExample, dataExample)

// RegExp
const regExpStringExample = "abc"
const regExpExample = /abc/;
//const regExpExample2 = new RegExp("abc");
console.log(typeof regExpExample, regExpExample.test(regExpStringExample));
