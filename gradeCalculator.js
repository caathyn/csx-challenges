function gradeCalculator(grade) {
  if (grade > 90) {
    return "A"
  } else if (grade >= 80) {
    return "B"
  } else if (grade >= 70) {
    return "C"
  } else if (grade >= 60) {
    return "D"
  } else {
    return "F"
  }
}

// Uncomment the lines below to test your code
console.log(gradeCalculator(92)); // => "A"
console.log(gradeCalculator(80)); // => "B"
console.log(gradeCalculator(70)); // => "C"
console.log(gradeCalculator(64)); // => "D"
console.log(gradeCalculator(43)); // => "F"
