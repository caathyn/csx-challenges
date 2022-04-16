// ADD CODE HERE
const pluralize = (str) => {
  let newArray = str.slice()
  for (let i = 0; i < str.length; i++) {
   newArray[i] = newArray[i] + "s"
  }
  return newArray;
}

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
