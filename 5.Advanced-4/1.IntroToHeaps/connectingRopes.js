

// 1. Idea 1 
// Sort the array using inbuilt sort -> we get nlogn
// pick two elements from start add and insert at end
// sort the array again using normal sort function -> that is nlogn
// we are sorting the array n times. Therefore TC - > (N * NlogN)

// 2.Idea 2 
// First sort the array. This could be n2 or nlogn 
// use while loog to check the array length greater than 1 
// Inside take first two elements add and insert at end 
// now we bring the element to its correct position using inside loog of insertion sort
let arr = [4, 3, 2, 6];

insertionSort(arr);

let totalCost = 0;

while (arr.length > 1) {

  // Take two smallest
  let first = arr.shift();
  let second = arr.shift();

  let sum = first + second;

  totalCost += sum;

  // Add at end first
  arr.push(sum);

  // Move it left to correct position
  let j = arr.length - 1;

  while (j > 0 && arr[j] < arr[j - 1]) {
    swap(arr, j, j - 1);
    j--;
  }
}
