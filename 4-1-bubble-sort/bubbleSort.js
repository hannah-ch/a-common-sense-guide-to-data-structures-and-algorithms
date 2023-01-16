const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        //iterate over the array
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // in each iteration the last element is always going to be sorted, so subtract the i
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
};

console.log(bubbleSort([4, 2, 7, 1, 3]));
