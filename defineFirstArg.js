function defineFirstArg(func, arg1) {
  function innerFunc(...arg2) {
    return func(arg1, ...arg2)
  }
  
  return innerFunc;
}

// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15
