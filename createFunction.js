const createFunction = () => {
  const print = () => {
    return 'hello world'
  }
  
  return print
 }



// Uncomment these to check your work!
const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'
