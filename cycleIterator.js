// ADD CODE HERE
const cycleIterator = (array) => {
	let count = 0; 
  
  return () => {
    const result = array[count++];
    if (count >= array.length) count = 0;
    return result;
  }
}

// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
