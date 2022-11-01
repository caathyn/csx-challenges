function unique(array) {
  return array.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  })
}

console.log(unique([1, 1, 2, 3, 3])) // => [1, 2, 3]
console.log(unique(["a", "a", "c", "aa", "b", "b"])) // => ["a", "c", "aa", "b"]
