function limitedRepeat() {
  let count = 0;
	let time = setInterval(() => {
    console.log('hi for now')
    if (count >= 4) clearInterval(time);
    count++;
  }, 1000)
}

limitedRepeat(); 
