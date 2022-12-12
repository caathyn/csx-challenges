function highestScore(students) {
  const bestStudent = students.reduce((acc, curr) => {
    if (acc.score < curr.score) {
    	return curr
    } else {
      return acc;
    }
	})
  
  return bestStudent.name.split(' ').map(name => name[0]).join('').concat(bestStudent.id);
}

//Uncomment the lines below to test your function:

var students = [
{name: 'Will Sentance', id: 128, score: -42},
{name: 'Jamie Bradshaw', id: 32, score: 57},
{name: 'Lisa Simpson', id: 2, score: 99},
{name: 'Luke Skywalker', id: 256, score: 94}
];

console.log(highestScore(students)); //=> 'LS2'
