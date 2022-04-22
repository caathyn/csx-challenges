// ADD CODE HERE
const groupBy = (array, callback) => { 
  const newObj = {};
  
  for (let i = 0; i < array.length; i++) {
    if (newObj[callback(array[i])] === undefined) {
      newObj[callback(array[i])] = []
    }
    
    newObj[callback(array[i])].push(array[i])
  }
  
  return newObj;
}


// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
