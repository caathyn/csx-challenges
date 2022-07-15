function arrToObj(array, callback) {
  let emptyObj = {};
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      emptyObj[array[i]] = callback(array[i]);
    }
  }
  
  return emptyObj;
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
