/*
Problem: Factorial
Category: Math
Description: คำนวณค่า n! (n factorial)
*/

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// test
console.log(factorial(5)); // 120