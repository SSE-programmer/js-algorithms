//Big-O = O(n)
function fibonacci(n) {
    if (n === 1) {
        return [0];
    }

    const fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

console.log(fibonacci(6)); // => [0, 1, 1, 2, 3, 5]
