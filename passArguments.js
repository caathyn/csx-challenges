const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(/* ADD CODE HERE */);
const two = isX2(/* ADD CODE HERE */);

// Uncomment these to check your work!
// console.log(one); // should log: true
// console.log(two); // should log: true