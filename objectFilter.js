function objectFilter(obj, callback) {
	const newObj = {}; 
  
  for (let prop in obj) {
    if (obj[prop] === callback(prop))
      newObj[prop] = callback(prop)
	}
  
  return newObj;
}

const cities = {
London: 'LONDON',
LA: 'Los Angeles',
Paris: 'PARIS',
};
console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}
