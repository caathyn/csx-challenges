function PersonConstructor() {
	// add code here
	this.greet = function() {
    console.log('hello')
  }

}

const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'