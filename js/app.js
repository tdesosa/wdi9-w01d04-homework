//console.log("Test");

// 1. VERBAL QUESTIONS

// Q1) a parameter is a variable in a method definition
// while an argument is the actual value of the variable
// that gets passed to a function.

// Q2) console.log will print a message to the console
// while return will exit a function and return a specific
// value.

// Q3) when a value is returned within a function
// the function will be "exited". 

// 2. PALINDROME AGAIN

const checkPalindrome = (word) => {
    const lowerWord = word.toLowerCase("");
    const reverseWord = lowerWord.split("").reverse("").join("");
    reverseWord.toLowerCase("");
    if(lowerWord === reverseWord){
        return true;
    } else {
        return false;
    }
 }
 
 console.log(checkPalindrome("Radar"));
 console.log(checkPalindrome("Borscht"));

 // 3. DIGIT SUM

 const sumDigits = (num) => {
    const createArray = num.toString().split("");
    const num1 = parseInt(createArray[0]);
    const num2 = parseInt(createArray[1]);
    const sumOfCreateArray = num1 + num2;
    console.log(sumOfCreateArray);
 }

 sumDigits(42);

 // 4. PYTHAGORAS

 const calculateSide = (sideA, sideB) => {
    const squareSideA = Math.pow(sideA, 2);
    const squareSideB = Math.pow(sideB, 2);
    const addSquares = squareSideA + squareSideB;
    const sqRoot = Math.sqrt(addSquares);
    console.log(sqRoot);
 }

 calculateSide(8, 6);

 // 5. SUM ARRAY

 const sumArray = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
 }

 sumArray([1, 2, 3, 4, 5, 6]);

 // 6. PRIME NUMBERS

 // Q1)

 const  checkPrime = (num) => {
    if(num < 2) { 
        return false;
    }
    for (var i = 2; i < num; i++) {
        if(num % i === 0){
            return false;
    } else{
        return true;
    }
}
}
console.log(checkPrime(26));

// Q2)

const printPrimes = (counter) => {
    for (let counter = 1; counter <= 100; counter++) {
        let notPrime = false;
        for (let i = 2; i <= counter; i++) {
            if (counter % i === 0 && i !== counter) {
                notPrime = true;
            }
        }
        if(notPrime === false) {
            console.log(counter);
        }
    }
 }
printPrimes(99);