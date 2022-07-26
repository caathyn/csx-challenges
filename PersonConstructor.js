function PersonConstructor() {
	this.greet = () => {
    console.log('hello')
  }
}

const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'
