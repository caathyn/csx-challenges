function multiMap(array, callback) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let results = []; 
    callback.forEach(cb => {
      results.push(cb(array[i]));
      obj[array[i]] = results;
    });
  }
  
  return obj;
}

// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
