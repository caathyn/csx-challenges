function after(numOfTimes, callback) {
  let timesCalled = 0;
  
  return (...arg) => {
    count++;
    if (timesCalled >= numOfTimes) {
      return callback(...arg)
    }
  }
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
