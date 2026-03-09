// Rotate Array
// หมุน array ไปทางขวา k ครั้ง

function rotateArray(nums, k) {
  k = k % nums.length;

  return nums.slice(-k).concat(nums.slice(0, nums.length - k));
}

// test
console.log(rotateArray([1,2,3,4,5,6,7], 3));