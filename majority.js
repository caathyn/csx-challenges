function majority(array, callback) {
  let trueCount = 0;
  let falseCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      trueCount++;
    } else {
    	falseCount++;
    }
  }
  
  if (trueCount > falseCount) {
    return true;
  }
  
  return false;
}

// Uncomment these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false