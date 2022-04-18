// ADD CODE HERE
const subtractTwo = num => {
  return num - 2;
}

const map = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
  	newArray.push(callback(array[i]));
  }
  return newArray
}

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]