const goodKeys = (object, callback) => {
  const array = [];
  for (let item in object) {
    if (callback(object[item])) {
      array.push(item)
    }
  }
  
  return array;
}

// Uncomment these to check your work!
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
