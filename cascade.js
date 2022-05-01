function cascade(number) {
	// Your code here!
	if (number < 10) return console.log(number);

	console.log(number)
	cascade(Math.floor(number / 10))
	console.log(number)
}



// // Uncomment to test your work!
cascade(111)
// should print
/*
111
11
1
11
111
*/
