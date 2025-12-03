let array = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

function flatten(array) {
  let newArr = [];
  for (let ele of array) {
    if (Array.isArray(ele)) {
      let innerFlattenedArray = flatten(ele);
      newArr.push(...innerFlattenedArray);
    } else {
      newArr.push(ele);
    }
  }

  return newArr;
}

let flattenedArray = flatten(array);
console.log(flattenedArray);
