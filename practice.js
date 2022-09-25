// function userCreator (name, score) {
//   this.name = name
//   this.score = score
// }

// userCreator.prototype.sayName = function (){ 
//   console.log("I'm " + this.name);
// }
// userCreator.prototype.increment = function () {
//   this.score++;
// }

// const user1 = new userCreator("Phil", 5);
// const user2 = new userCreator("Tim", 4); 

// user1.sayName();

// function paidUserCreator (paidName, paidScore, accountBalance) {
//   userCreator.call(this, paidName, paidScore);
//   this.accountBalance = accountBalance;
// }

// paidUserCreator.prototype = Object.create(userCreator.prototype);

// paidUserCreator.prototype.increaseBalance = () => {
//   this.accountBalance++
// };

// const paidUser1 = new paidUserCreator("Alyssa", 8, 25);

// console.log(paidUser1.increaseBalance());
// paidUser1.sayName();

class userCreator {
  constructor (name, score) {
    this.name = name;
    this.score = name;
  }

  sayName (){
    console.log("I am " + this.name);
  }

  increment (){
    this.score++;
  }
}

const user1 = new userCreator("Phil", 4);
const user2 = new userCreator("Tim", 4);

user1.sayName();

class paidUserCreator extends userCreator {
  constructor(paidName, paidScore, accountBalance){
    super (paidName, paidScore)
      this.accountBalance = accountBalance;
  }

  increaseBalance() {
      this.accountBalance++;
      console.log('increaseBalance invoked.')
  }
}

const paidUser1 = new paidUserCreator("Alyssa", 8, 25);
console.log(paidUser1)
paidUser1.increaseBalance();
console.log(paidUser1)
paidUser1.sayName();