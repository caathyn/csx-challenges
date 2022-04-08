const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let found = 0;
// ADD CODE HERE

for (let pickles in checkObj) {
  if (pickles === 'foundNum') {
    found = 1
  }
}
console.log(found);