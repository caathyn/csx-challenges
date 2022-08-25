function closestToTheMark(player1, player2){
  const theMark = Math.floor(Math.random() * 100)
  console.log(`If theMark is ${theMark}...`);
  
  const player1Distance = Math.abs(theMark - player1)
  const player2Distance = Math.abs(theMark - player2)
  
  if (player1Distance > player2Distance) {
    return "Player 1 is closest"
  } else if (player2Distance > player1Distance) {
    return "Player 2 is closest"
  } else {
    return "It's a tie"
  }
}

// Uncomment the line below to check your work!
console.log(closestToTheMark(25, 75));
