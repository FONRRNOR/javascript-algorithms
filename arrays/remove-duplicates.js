// Remove Duplicates from Array

function removeDuplicates(nums) {
  return [...new Set(nums)];
}

// test
console.log(removeDuplicates([1,1,2,2,3,4]));