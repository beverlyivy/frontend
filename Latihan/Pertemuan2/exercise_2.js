function number(num1, num2){
    let highestNumber;
    if (num1 > num2){
        highestNumber = num1;
    } else {
        highestNumber = num2;
    }
    return highestNumber
}
let result = number(95, 12);
console.log("The highest number is : " + result)
