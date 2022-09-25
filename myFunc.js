function myFunc(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.indexOf(array[i])
    }
  }
  
  return -1
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return (num % 2 !== 0);
}
