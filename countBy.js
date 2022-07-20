const countBy = (array, callback) => {
  const obj = {}; 
  
  for (let i = 0; i < array.length; i++) {
    const key = callback(array[i])
    if (!obj[key]) {
    	obj[key] = 0;
    }
    obj[key]++;
  }
  
  return obj;
}

// Uncomment these to check your work!
function evenOddZero(n) {
  if (n === 0) return 'zero';
  else if (n % 2 === 0) return 'even'
  else return 'odd';
}
const nums = [5, 0, 2, 0, 3, 4, 1]; // [ zero, odd, even, zero, odd, even, odd]
console.log(countBy(nums, evenOddZero)); // should log: { zero: 2, odd: 3, even: 2 }

function pokedex(pokemon) {
	const types = {
  	pikachu: 'electric',
    electabuzz: 'electric',
    charizard: 'fire',
    squirtle: 'water',
    abra: 'psychic',
    growlithe: 'fire'
  }
  
  return types[pokemon];
}

const pokemon = ['pikachu', 'charizard', 'squirtle', 'electabuzz', 'abra', 'growlithe'];

console.log(countBy(pokemon, pokedex)); // should log: { odd: 3, even: 2 }