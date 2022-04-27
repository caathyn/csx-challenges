// ADD CODE HERE
const censor = () => {
  const cache = {};
  
  return (str1, str2) => {
    if (str2 !== undefined) {
    	cache[str1] = str2
    } else {
      for (let item in cache) {
        str1 = str1.replaceAll(item, cache[item])
      }
      
      return str1;
    }
  }
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cat');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'