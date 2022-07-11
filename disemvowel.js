function disemvowel(string) {
  const vowel = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  let results = '';
  
  for (let i = 0; i < string.length; i++) { 
    if (!vowel[string[i].toLowerCase()]) { 
      results += string[i]
    }
  }
  
  return results;
}

// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'
