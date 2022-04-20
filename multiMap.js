// ADD CODE HERE
const multiMap = (arr1, arr2) => { 
  const newObj = {}
  
  for (let i = 0; i < arr1.length; i++) {
    const currentItem = arr1[i]
    newObj[arr1[i]] = []
    const currentArr = newObj[arr1[i]]
    
    for (let j = 0; j < arr2.length; j++) {
      const currentFunc = arr2[j]
      currentArr.push(currentFunc(currentItem))
    }
  }
  
  return newObj;
}

// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }