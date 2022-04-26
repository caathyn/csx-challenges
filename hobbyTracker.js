function hobbyTracker(hobbies) { // hobbies = ['yoga', 'baking', 'piano']
  const cache = {} // { yoga: 0, baking: 0, piano: 0 }
  const zeroOut = item => {
    cache[item] = 0;
  }
  
  hobbies.forEach(zeroOut)
  
  return (hobby, hours) => {
    if (hobby === undefined) {
    	hobbies.forEach(zeroOut)
      
      return 'tracker has been reset!'
    }
    cache[hobby] += hours
    return cache
  }
}

// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2)
updateHobbies('baking', 4)
updateHobbies('yoga', 1)
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}