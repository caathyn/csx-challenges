// ADD CODE HERE
const saveOutput = (func, password) => {
  const newObj = {};
  
  const innerFunc = num => {
    if (num === password) {
      return newObj;
    } else {
      newObj[num] = func(num);
      return newObj[num];
    }
  }
  return innerFunc;
}


// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }