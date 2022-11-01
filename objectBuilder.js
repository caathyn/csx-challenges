function objectBuilder(count) {
  const obj = {};
  
  for (let i = 0; i < count + 1; i++) {
    obj[i] = i * 5;
  }
  
  return obj;
}

console.log(objectBuilder(4));
console.log(objectBuilder(0));