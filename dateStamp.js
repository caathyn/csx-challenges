// ADD CODE HERE
const dateStamp = (func) => {
  
  return (...args) => {
    const newObj = {};
    newObj.date = new Date().toDateString();
    newObj.output = func(...args)
    return newObj;
  }
};

// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }