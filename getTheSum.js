function getTheSum(arr){
  return arr.reduce((acc, current) => {
    return acc + current
  })
}

// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33
