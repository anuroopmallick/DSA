let arr = [4, 7, 1, 9, 4, 7, 2, 6, 8, 0, 3, 2, 9];

for (let i = 0; i < arr.length; ++i) {
  let minIndex = i;
  for (let j = i + 1; j < arr.length; ++j) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  swap(arr, minIndex, i);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(arr);
