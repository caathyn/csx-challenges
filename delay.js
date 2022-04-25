// ADD CODE HERE
const delay = (callback, waitTime) => { // callback = () => count++ ; waitTime = 1000
  
  return () => {
    setTimeout(callback, waitTime) 
  }
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 												 // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second