function union(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (!result.includes(array[i][j])) {
        result.push(array[i][j])
      }
    }
  }
  
  return result;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
