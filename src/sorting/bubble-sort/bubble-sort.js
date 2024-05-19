//Big-O = O(n^2)
function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

console.log(bubbleSort([-5, 2, 10, 4, 6]));
console.log(bubbleSort([-5, 2, -20, 8 , 11]));
console.log(bubbleSort([13, 0, 42, 21, 0]));
