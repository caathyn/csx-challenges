function findWaldo(obj) {
  if (!obj.hasOwnProperty('Waldo')) {
    return "Where's Waldo?"
  }
  
  return obj.Waldo
}
// Uncomment these to check your work!
const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': undefined}
console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)) // should log: 'unknown'
