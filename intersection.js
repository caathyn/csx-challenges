function compare(array1, array2) {
  return array1.filter((element) => {
    return array2.includes(element);
  });
}

function intersection(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result = compare(array[i], result);
  }
  
  return result;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

