/*
Problem: Reverse String
Category: String
Description: กลับลำดับตัวอักษรใน string
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

// test
console.log(reverseString("hello")); // olleh
console.log(reverseString("world")); // dlrow