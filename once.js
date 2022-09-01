function once(callback) {
  let count = 0;
  let result = '';
  
  return (input) => {
    if (count < 1) {
      result = callback(input);
      count++;
    }
    
    return result;
  }
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7