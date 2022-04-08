const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};

let total = 0; // 15
// ADD CODE HERE
for (let key in sumMe) {
  if (typeof(sumMe[key]) === 'number') {
      total = total + sumMe[key]
  }
}
      
console.log(total)