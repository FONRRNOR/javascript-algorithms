/*
Problem: Selection Sort
Category: Sorting
Description: หา element ที่เล็กที่สุดแล้วนำมาไว้ด้านหน้า
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

// test
console.log(selectionSort([64,25,12,22,11])); // [11,12,22,25,64]