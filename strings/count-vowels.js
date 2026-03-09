/*
Problem: Count Vowels
Category: String
Description: นับจำนวนสระใน string
*/

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// test
console.log(countVowels("hello")); // 2
console.log(countVowels("javascript")); // 3