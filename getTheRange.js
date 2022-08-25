// Solution 1
function getTheRange(arr){
  let highNum = arr[0];
  let lowNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highNum) {
      highNum = arr[i];
    }
    if (arr[i] < lowNum) {
      lowNum = arr[i];
    }
  }
  return [lowNum, highNum, highNum - lowNum]
}

// Uncomment these to check your work!
console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]

// Solution 2
function getTheRange(arr){
  const minMax = arr.reduce((acc, cur) => {
    if (cur < acc[0]) acc[0] = cur;
    if (cur > acc[1]) acc[1] = cur;

    return acc;
  }, [Infinity, -Infinity])
  
  const [min, max] = minMax;
  
  const range = max - min;
  
  return [min, max, range];
}

// Uncomment these to check your work!
console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]
