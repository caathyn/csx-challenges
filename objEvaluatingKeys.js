const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
for (let item in sumMe) {
  if(typeof sumMe[item] === 'number') {
    total += sumMe[item]
  }
}

console.log(total)
