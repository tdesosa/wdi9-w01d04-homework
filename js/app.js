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