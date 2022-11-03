function longestWord(sentence) {
  let split = sentence.split(" ");
  let longWord = '';
  for (let i = 0; i < split.length; i++) {
    if (longWord.length <= split[i].length)
      longWord = split[i]
  }
  
  return longWord;
}

console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
console.log(longestWord('hate having hungry hippos')); // => 'hippos'
console.log(longestWord('JavaScript')); // => 'JavaScript'
console.log(longestWord('')); // => ''