/*
Problem: Fibonacci
Category: Math
Description: หาเลขลำดับ Fibonacci
*/

function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// test
console.log(fibonacci(6)); // 8