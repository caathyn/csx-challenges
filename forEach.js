function forEach(array, forCb) {
  for (let i = 0; i < array.length; i++) {
    forCb(array[i])
  }
}

function map(array, mapCb) {
  const newArray = [];
  
  forEach(array, (item) => newArray.push(mapCb(item)))
  
  return newArray;
}

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]