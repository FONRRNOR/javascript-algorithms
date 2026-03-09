// Move Zeroes
// ย้าย 0 ไปท้าย array

function moveZeroes(nums) {
  let result = [];

  for (let num of nums) {
    if (num !== 0) {
      result.push(num);
    }
  }

  while (result.length < nums.length) {
    result.push(0);
  }

  return result;
}

// test
console.log(moveZeroes([0,1,0,3,12]));