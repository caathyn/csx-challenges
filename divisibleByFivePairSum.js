function divisibleByFivePairSum(array) {
  const arr = []; 
  
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sumPair = (array[i] + array[j])
      if (sumPair % 5 === 0) {
        arr.push([i, j])
      }
		}
  }
  
  return arr;
}
