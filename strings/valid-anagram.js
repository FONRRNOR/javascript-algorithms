/*
Problem: Valid Anagram
Category: String
Description: ตรวจสอบว่า string สองตัวเป็น anagram กันหรือไม่
*/

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
}

// test
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false