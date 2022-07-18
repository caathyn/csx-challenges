function prioritize(array, callback) {
  const trueArray = [];
  const falseArray = [];
  
  array.forEach((item) => {
    if (callback(item)) {
      trueArray.push(item)
    } else {
      falseArray.push(item)
    }
  })
  
  
  return [...trueArray, ...falseArray]
}

// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']