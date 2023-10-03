//Buatlah fungsi yang menerima 2 input angka dan mengembalikan nilai yang terbesar dari angka 
//yang dimasukan. Buatlah dalam bentuk IIFE dan Callback function

// -- IIFE --
(function() {
    function number(num1, num2){
        let highestNumber;
        if (num1 > num2){
            highestNumber = num1;
        } else {
            highestNumber = num2;
        }
        return highestNumber;
    }

    let result = number(95, 12);
    console.log("The highest number is : " + result);
})();

// -- Callback Function --
function number(num1, num2, callback) {
    let highestNumber;
    if (num1 > num2) {
        highestNumber = num1;
    } else {
        highestNumber = num2;
    }
    callback(highestNumber);
}

function displayResult(result) {
    console.log("The highest number is : " + result);
}

number(95, 12, displayResult);

// ---- Another Way ----
// -- IIFE --
// const maxNumberIIFE = ((a,b) => {
//         return a > b ? a : b;
// })(5, 8);

// -- Callback Function --
//  const findMax =(num1, num2, callback) => { //Function yang berada di dalam parameter fungsi
//     const max = num1 > num2 ? num1 : num2;
//     callback(max);
// };

// const printResult = (result) => {
//     console.log(result);
// };

// findMax(5, 8, printResult); //output: 8