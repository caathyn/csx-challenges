function secretCipher(sentence, cipher){
  let result = ''; 
  
  for (let i = 0; i < sentence.length; i++) { 
    if (cipher[sentence[i]]) { 
      result = result + cipher[sentence[i]]
    }
    
    result += sentence[i]
  }
  
  return result;
}


console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"