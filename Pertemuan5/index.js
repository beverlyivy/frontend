// // Array dan object

// // Array
// let students = ["john", "bob", "peter"]; 
// let numbers = [1,2,3,4,5];
// let john = ["john", "doe", 35, true];

// console.log(students);
// console.log(numbers);
// console.log(john); 
// console.log(john.length);

// // Array Index
// console.log(students[1]);
// students[1] = "Jane";
// console.log(students);

// console.log(students[students.length-1]);

// // ToString (Mengubah array menjadi string)
// console.log(john.toString());

// // Join 
// console.log(john.join(" "));
// console.log(john.join("#"));

// // Pop (Mengeluarkan element yang terakhir)
// john.pop
// console.log(john);

// // Push (Menambahkan element di awal/pertama)
// john.push("Good Morning")
// console.log(john);

// // Shift (Mengeluarkan element di awal/pertama)
// john.shift();
// console.log(john);

// // Unshift (Menambahkan element di awal)
// john.unshift("Hello");
// console.log(john);

// // Splice (Menambah element di tengah)
// john.splice(3, 0, true);

// // Slice (Mengambil element pada array dan di taruh di array yang baru)
// let john2 = john.slice(2, 4);
// console.log(john2);

// // Concat (Menggambungkn 2 array atau lebih)
// 


// Object
const john = {
    firstName: "John",
    lastName: "Doe",
    age: 33,
    isMarried: true,
    grade: [90, 80, 100],
    address: {
        city: "Manado",
        province: "Sulawesi Utara",
        postalCode: "95371",
    },
    sayGreetings: function() {
        console.log("Hello World");
    },

    // Cara mengakses properti itu sendiri menggukana this
    //sayGreetings: function() {
    //    console.log("Hello my name is" + this.john);
    //},
};

// Dot Notation
// console.log(john.firstName);
// console.log(john.grade(2));
// console.log(john.address.city);
// console.log(john.sayGreetings());

//Bracket Notation
// console.log(john["firstName"]);
// console.log(john["grade"][2]);
// console.log(john["address"]["city"]);
// console.log(john["sayGreetings"]()); 

// john.job = "Teacher"; 

//Array Object
let students = {
    
}

