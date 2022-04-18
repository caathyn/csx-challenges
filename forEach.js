// ADD CODE HERE
const forEach = (fArr, fCb) => { 
  for (let i = 0; i < fArr.length; i++) {
  	fCb(fArr[i]);
  }
}

const map = (mArr, mCb) => {
  const result = []; 
  
  forEach(mArr, (item) => {
    result.push(mCb(item))
  })
  
  return result;
}

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]