// ADD CODE HERE

const goodKeys = (object, callback) => {
  const newArray = [];
  
  for (let key in object) {
   if (callback(object[key])) {
     newArray.push(key)
   }
  }
  return newArray;
}

// Uncomment these to check your work!
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']