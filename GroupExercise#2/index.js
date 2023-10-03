// Destructuring Array
let animal = ["tiger", "dog", "duck"];
let [animal1, animal2, animal3] = animal;
console.log("Destructuring Array")
console.log(animal1);
console.log(animal2);
console.log(animal3);

// Destructuring Object
let simbiosis = {
    type: "mutualisme",
    object: "sapi"
}; 
// di destructuring object
let {type, object, status} = simbiosis;
console.log("Destructuring Object")
console.log(type); // Output : mutualisme
console.log(object); // Output : sapi

//----------------------------------------

// Array Destructuring (Mengambil item ke-1 sampai ke-3)
const numbers = [1, 2, 3, 4, 5];
const [firstNumber, secondNumber, thirdNumber] = numbers;
console.log("Destructuring array (Sebagian Nilai)")
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);

// Object Destructuring (Mengambil age dan city)
const person = { name: 'Alice', age: 25, city: 'Los Angeles' };
const { age, city } = person;
console.log("Destructuring object (Sebagian Nilia)")
console.log(age); // Output : 25
console.log(city); // Output : 'Los Angeles'

//--------------------------------------------------------------

// Array Destructuring dengan Default Value
const fruits = ['apple', 'banana'];
const [firstFruit, secondFruit, thirdFruit = 'orange'] = fruits;
console.log("Destructuring Array (Default)")
console.log(firstFruit); // Output : 'apple'
console.log(secondFruit); // Output : 'banana'
console.log(thirdFruit); // Output : 'orange'

// Object Destructuring dengan Default Value
const person2 = { name2: 'Wagyu', age2: undefined, city2: 'Bitung' };
const { name2, age2 = 20, city2 } = person2;
console.log("Destructuring Object (Default)")
console.log(age2); // Output : 20 (karena age adalah undefined)

//-------------------------------------------------------------------

// Array Destructuring dengan Rest Operator
const numbers2 = [1, 2, 3, 4, 5];
const [firstNumber2, ...restNumbers] = numbers2;
console.log("Destructuring Array (Rest Operator)")
console.log(firstNumber2); // Output: 1
console.log(restNumbers); // Output: [2, 3, 4, 5]

// Object Destructuring dengan Rest Operator
const person3 = { name3: 'Beverly', age3: 19, city3: 'Tokyo' };
const { name3, ...restInfo } = person3;
console.log("Destructuring Object (Rest Operator)")
console.log(name3); // Output: 'Beverly'
console.log(restInfo); // Output: { age: 19, city: 'Tokyo' }
