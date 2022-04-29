console.log('I am at the beginning of the code');

function print() {
  console.log('I am in the setTimeout callback function');
}

setTimeout(print, 0)

console.log('I am at the end of the code')

