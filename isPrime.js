function isPrime(number) {
  if (number < 2) return false;
  if (number % 2 === 0 && number > 2) return false;
  const squared = Math.sqrt(number)
  for (let i = 3; i < squared; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

console.log(isPrime(-7)); // => false
console.log(isPrime(2)); // => true
console.log(isPrime(11)); // => true
console.log(isPrime(15)); // => false