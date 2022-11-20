function everyXsecsForYsecs(func, interval, duration) {
 	const intervalId = setInterval(func, interval)
  
  setTimeout(() => {
    clearInterval(intervalId)
  }, duration)
}

// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}

function sayHi() {
  console.log('say hi');
}

everyXsecsForYsecs(sayHi, 1000, 5000);
