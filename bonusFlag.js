function addingAllTheWeirdStuff(array1, array2){
  // ADD CODE HERE
  let odd = 0
  let even = 0
  let flag = false
  
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) {
      even += array2[i] 
    } else { 
      odd += array2[i]
    }
    
    if (array2[i] > 20) {
      flag = true
    } 
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] < 10) {
    	array1[i] += odd
    } else {
      array1[i] += even
    }
    
    if (flag) {
      array1[i]++;
    }
  }
  
  return array1;
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]

