//Big-O = O(1)
function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1)); // => true
console.log(isPowerOfTwo(2)); // => true
console.log(isPowerOfTwo(5)); // => false
