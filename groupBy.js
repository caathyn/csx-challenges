const groupBy = (array, callback) => {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (!obj[callback(array[i])]) {
      obj[callback(array[i])] = [array[i]]
    } else {
      obj[callback(array[i])].push(array[i])
    }
  }
  
  return obj;
}

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

