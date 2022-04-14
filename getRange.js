function getTheRange(arr){
  // ADD CODE HERE
	let high = -Infinity;
  let low = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
      high = arr[i];
    }
    if (arr[i] < low) {
      low = arr[i];
    }
  }
  
  return [low, high, high - low];
}
// Uncomment these to check your work!
console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]
