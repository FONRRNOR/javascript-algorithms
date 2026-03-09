/*
Problem: Linear Search
Category: Search
Description: ค้นหาค่า target ใน array แบบไล่ทีละตัว
*/

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// test
console.log(linearSearch([10, 20, 30, 40], 30)); // 2
console.log(linearSearch([10, 20, 30, 40], 50)); // -1