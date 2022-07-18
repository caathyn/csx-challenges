const countBy = (array, callback) => {
  const obj = {};
  let count = 0;
  for (let i = 1; i < array.length; i++) {
    if (callback(array[i])) {
      obj[callback(array[i])] = count++
      
    }
  }
  
  return obj;
}

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
