/*
Problem: Find Minimum
Category: Search
Description: หาเลขที่น้อยที่สุดใน array
*/

function findMin(nums) {
  let min = nums[0];

  for (let num of nums) {
    if (num < min) {
      min = num;
    }
  }

  return min;
}

// test
console.log(findMin([4,2,7,1,9])); // 1