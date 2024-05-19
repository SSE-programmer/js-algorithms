//Big-O = O(n^2)
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([-5, 2, 10, 4, 6]));
console.log(quickSort([-5, 2, -20, 8, 11]));
console.log(quickSort([13, 0, 42, 21, 0]));
