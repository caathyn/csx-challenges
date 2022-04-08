const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let divBy6 = false;
// ADD CODE HERE
const objToArray = Object.values(checkObj)
// [1, 2, 5, 18]
for (let i = 0; i < objToArray.length; i++) {
  if (objToArray[i] % 6 === 0) {
    divBy6 = true;
  }
}
