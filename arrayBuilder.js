function arrayBuilder(obj) {
  const outputArray = [];
  for (let prop in obj) {
    let repeatCount = obj[prop];
    while (repeatCount > 0) {
      outputArray.push(prop)
      repeatCount--;
    }
  }
  
  return outputArray;
}

// Uncomment these to check your work!
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []
