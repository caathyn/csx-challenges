function once(callback) {
  let flag = false;
  let result = 0;
  
  function add(input) {
    if (!flag) {
    	result = callback(input);
      flag = true;
    }
    
    return result;
  }
  
  return add;
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7
