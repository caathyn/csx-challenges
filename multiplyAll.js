// ADD CODE HERE 
function multiplyAll(...num) {

	let total = 1;
  
  for (let i = 0; i < num.length; i++) {
    total = total * num[i];
  }
  
  return total;
}
// Uncomment these to check your work!
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375