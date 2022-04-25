// ADD CODE HERE
const after = (num, callback) => {
  let count = 0; 
  
  const innerFunc = (...args) => {
    count++;
    if (num === count) {
     return callback(...args)
    }
  }
  
  return innerFunc;
}


const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed