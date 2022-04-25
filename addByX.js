// ADD CODE HERE
const addByX = (x) => {
  const result = (num) => {
    return num + x
  }
  return result;
}

const addByTwo = addByX(2);
const addByThree = addByX(3);

// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1));
// Now call addByTwo with an input of 2 and log the output
console.log(addByTwo(2));

console.log(addByThree(1));
console.log(addByThree(2));
console.log(addByThree(3));