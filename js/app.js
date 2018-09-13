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