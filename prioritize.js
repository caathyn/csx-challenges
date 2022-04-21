// ADD CODE HERE
const prioritize = (array, callback) => {
  const trueArray = [];
  const falseArray = [];
  
  for (let i = 0; i < array.length; i++) {
   if (callback(array[i])) {
     trueArray.push(array[i])
   } else {
     falseArray.push(array[i])
   }
  }
  return trueArray.concat(falseArray);
}

// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']