// ADD CODE HERE
const union = arrayOfArrays => {
  return arrayOfArrays.reduce((acc, initialValue) => {
    initialValue.forEach(element => {
      if (!acc.includes(element)) {
        acc.push(element);
      }
    })
    return acc;
  }, [])
}


// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
