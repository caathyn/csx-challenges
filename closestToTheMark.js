function closestToTheMark(player1, player2){
  const theMark = Math.floor(Math.random() * 100)
  console.log(`If theMark is ${theMark}...`);
 	let player1Distance = Math.abs(player1 - theMark)
  let player2Distance = Math.abs(player2 - theMark)
  if (player1Distance < player2Distance) {
    return "Player 1 is the closest"
  } else if (player1Distance > player2Distance) {
    return "Player 2 is the closest"
  } else {
    return "It's a tie."
  }
}

// Uncomment the line below to check your work!
console.log(closestToTheMark(25, 75));
