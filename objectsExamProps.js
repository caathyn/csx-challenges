const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let found = 0;
for(let item in checkObj) {
  if(item === "foundNum") {
    found = 1;
  }
}
console.log(found);