function pigLatinWord(word) {
    const vowels = 'aieou'
    if (vowels.includes(word[0])) {
        return word + "yay"
    }
    
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            let sliceAtVowel = word.slice(i)
            let restOfSlice = word.slice(0, i)
            return sliceAtVowel + restOfSlice + "ay"
        }
    }
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
