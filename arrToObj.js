function arrToObj(array, callback) {
  const obj = {}; 
  
  array.forEach((element) => {
    obj[element] = callback(element)
  })
  
  return obj;
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }