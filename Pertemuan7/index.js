// // String Literal
// let fullname = "John Doe";
// let age = 33;
// let address = "Manado";

// // Halo nama saya John Doe, umur saya 33 tahun  
// // dan saya tinggal di manado

// // Cara lama
// // let kalimat5 = "Halo nama saya " + fullname + ", umur saya" + age + "tahun dan saya tinggal di " + address;
// // console.log(kalimat5);

// // Cara Baru

// let kalimat6 = `Halo nama saya ${fullname}, umur saya ${age}, tahun dan saya tinggal di ${address}`;
// console.log(kalimat6);

// Arrow Function
// --------------
// nonton di youtube arrow function

// function sayGreetings5() {
//     return `Hello World`;
// }
// console.log(sayGreetings5);

// ini cara penulisan yang benar
// const sayGreetings6 = () => { // () tempat taru parameter
//     return `Hello world`;
// };

// contoh 
// const sayGreetings6 = (nama) => { // () tempat taru parameter
//     return `Helo $(nama)`;
// };
// console.log(sayGreetings6);

// console.log(sayGreetings6);

// Implicit return value
// const sayGreetings6 = (nama) => `Hello ${nama}`;

// Pada IIFE
// (() => {
//     console.log("Hello");
// })()
// let output1 = (() => `Hello`)();
// console.log(output1);

// Pada Callback
// const numbers = [1,2,3,4,5];

// let output = numbers.map((item) => item );
// console.log(output);

// Default Parameter
// -----------------

const sayGreetings5 = (fullName) => {
    console.log(`Hello $(fullName)`);
};

sayGreetings5();