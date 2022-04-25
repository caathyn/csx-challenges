// ADD CODE HERE
const once = (callback) => {
  let counter = 0;
  let output = 0;
  
  const innerFunc = (num) => {
    if (counter === 0) {
      output = callback(num);
      counter++; 
    }
    
    return output;
  }
  
  return innerFunc;
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7