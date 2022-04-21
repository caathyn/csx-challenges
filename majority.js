// ADD CODE HERE
const majority = (array, callback) => { // array = [1, 2, 3, 4, 5], callback = isOdd
  let trueCount = 0;
  let falseCount = 0;
  
 for (let i = 0; i < array.length; i++) {
  if (callback(array[i])) {
    trueCount++
  } else {
    falseCount++ 
  }
 }
  return trueCount > falseCount
}
// Uncomment these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
