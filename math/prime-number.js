/*
Problem: Prime Number
Category: Math
Description: ตรวจสอบว่าเป็นจำนวนเฉพาะหรือไม่
*/

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// test
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false