let arr = [4, 7, 1, 9, 4, 7, 2, 6, 8, 0, 3, 2, 9];

for (let i = 0; i < arr.length; ++i) {
  let j = i;
  for (let k = i + 1; k < arr.length; ++k) {
    if (arr[k] < arr[j]) {
      swap(arr, j, k);
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(arr);
