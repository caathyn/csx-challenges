// ADD CODE HERE
const countBy = (array, callback) => { 
  const newObj = {};  
  
  for (let i = 0; i < array.length; i++) {
    if (newObj[callback(array[i])] === undefined) {
      newObj[callback(array[i])] = 0
    }
   	newObj[callback(array[i])]++
  }
  
  return newObj;
}

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd));
