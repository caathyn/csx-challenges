function cascade(number) {
  if (typeof number !== "number") return; 
  
	let strNum = number.toString();
  console.log(+strNum)
  if (+strNum.length === 1) return;
  
  cascade(+strNum.slice(0, -1))
  console.log(+strNum)
}



// Uncomment to test your work!
console.log(cascade(1234))
