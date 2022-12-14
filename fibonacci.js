function fibonacci(length) {
    if (length === 0) return [];
    if (length === 1) return [1];
    const fib = [0,1]
    for (let i = 2; i < length; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    
    return fib;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
