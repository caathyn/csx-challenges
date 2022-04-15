function disemvowel(string) {
  // ADD CODE HERE
  let vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
	 };
  
  let result = "";
  
  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();
    if (!vowels[letter]) {
      result += string[i];
    }
  };
  return result
}

// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'
