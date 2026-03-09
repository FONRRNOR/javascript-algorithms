/*
Problem: Least Common Multiple
Category: Math
Description: หาค่าคูณร่วมน้อยที่สุด
*/

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// test
console.log(lcm(4, 6)); // 12