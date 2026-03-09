/*
Problem: Insertion Sort
Category: Sorting
Description: แทรก element ไปยังตำแหน่งที่ถูกต้องในส่วนที่เรียงแล้ว
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// test
console.log(insertionSort([5,2,9,1,5,6])); // [1,2,5,5,6,9]