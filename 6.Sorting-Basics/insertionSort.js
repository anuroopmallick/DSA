// insertion sort

let arr = [4, 7, 1, 9, 4, 7, 2, 6, 8, 0, 3, 2, 9];

for (let i = 1; i < arr.length; ++i) {
  let j = i;
  while (j > 0 && arr[j] < arr[j - 1]) {
    swap(arr, j, j - 1);
    --j;
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(arr);
