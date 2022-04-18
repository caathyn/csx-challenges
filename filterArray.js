function filterArray(array, callback) { // array = [1, 2, 3, 4, 5]
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) { // i++
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [1, 2, 3, 4, 5];
function func1(num) {
  // ADD CODE HERE
  return num % 2 === 0
}
function func2(num) {
  // ADD CODE HERE
  return num % 2 !== 0
}

// Uncomment these to check your work!
console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]