function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(arr, l, r) {
  let p1 = arr[l];
  let firstIndex = l;
  l = l + 1;

  while (l <= r) {
    if (arr[l] < p1) l++;
    else if (arr[r] > p1) r--;
    else {
      swap(arr, l, r);
    }
  }

  swap(arr, firstIndex, r);

  return r;
}

function quicksort(arr, l, r) {
  if (l > r) return;

  let x = partition(arr, l, r);
  quicksort(arr, l, x - 1);
  quicksort(arr, x + 1, r);
}

let arrForTesting = [34, 56, 65, 78, 88, 23, 6, 43];

quicksort(arrForTesting, 0, arrForTesting.length - 1);

console.log(arrForTesting);
