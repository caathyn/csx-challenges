const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

const objToArray = [];
// ADD CODE HERE
for (let key in checkObj) {
  if (checkObj[key] >= 2) {
    objToArray.push(checkObj[key])
  }
}
console.log(objToArray)