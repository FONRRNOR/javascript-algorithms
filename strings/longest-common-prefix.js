/*
Problem: Longest Common Prefix
Category: String
Description: หา prefix ที่เหมือนกันของทุก string ใน array
*/

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}

// test
console.log(longestCommonPrefix(["flower","flow","flight"])); // fl
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""