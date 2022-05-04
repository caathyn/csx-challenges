class PersonClass {
	constructor(name) {
    // add code here
		this.name = name;
	}
  greet () {
    console.log('hello')
  }
	// add code here
}

const george = new PersonClass('George');

// Uncomment this line to check your work!
george.greet(); // -> Logs 'hello'
