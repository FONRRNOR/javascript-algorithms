/*
Problem: Greatest Common Divisor
Category: Math
Description: หาตัวหารร่วมมากที่สุด
*/

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

// test
console.log(gcd(48, 18)); // 6