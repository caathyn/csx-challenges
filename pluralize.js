// Solution 1

const pluralize = string => {
  let newArray = [];
  for (let i = 0; i < string.length; i++) {
    let newStr = string[i] + "s";
    newArray.push(newStr);
  }
  
  return newArray;
}

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]

// Solution 2

const pluralize = array => {
	return array.map(item => item + 's')
} 

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]