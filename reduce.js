// ADD CODE HERE

const reduce = (array, callback, initalValue) => {
  let result = initialValue;
  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i])
  }
  
  return result;
}

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8