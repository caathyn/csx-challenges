function arrayBuilder(obj) {
  // ADD CODE HERE
	const outputArray = [];
  
	for (let prop in obj) {
  	for (let i = 0; i < obj[prop]; i++) {
      outputArray.push(prop);
    }
	}
	return outputArray;
}

// Uncomment these to check your work!
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []
