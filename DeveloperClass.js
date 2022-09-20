class PersonClass {
	constructor(name) {
    this.name = name;
	}

	greet() {
    console.log('hello');
  }
}

class DeveloperClass extends PersonClass {
  constructor(name, age) {
    super(name)
    this.introduce = function() {
      console.log(`Hello World, my name is ${this.name}`)
    }
  }
}

const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'
