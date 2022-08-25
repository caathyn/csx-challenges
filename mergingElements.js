function mergingElements(array1, array2) {
  let newArray = [];
  
  for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
    if (!array1[i]) {
      newArray.push(array2[i])
    } else if (!array2[i]) {
      newArray.push(array1[i])
    } else {
      newArray.push(array1[i] + array2[i])
    }
  }
  
  return newArray;
}

// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8, 6, 5])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0, 5, 6], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]
