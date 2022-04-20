function arrToObj(array, callback) {
  // ADD CODE HERE
  const newObj = {}
  
  for (let i = 0; i < array.length; i++) {
    newObj[array[i]] = callback(array[i]);
  }
  
  return newObj; 
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
