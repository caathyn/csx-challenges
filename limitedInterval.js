// // Add code here
const limitedInterval = (callback, wait, limit) => {
  const intervalId = setInterval(callback, wait)
  setTimeout(() => {
    clearInterval(intervalId)
  }, limit)
}

// /* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.
