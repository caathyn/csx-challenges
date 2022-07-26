function getLength(array) {
  if (array[0] === undefined) {
    return 0;
  } else {
    return 1 + getLength(array.slice(1))
  }
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
