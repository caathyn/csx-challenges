let calls = "";

function jerry(str) {
  return kramer(str + 'Jerry');
}

function george(str) {
  return elaine(str + 'George');
}

function elaine(str) {
  return str + 'Elaine';
}

function kramer(str) {
  return george(str + 'Kramer');
}


// Uncomment these to check your work!
calls = jerry(calls);

console.log(calls);