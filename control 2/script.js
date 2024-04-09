function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

let array = [];
for (let i = 0; i < 20; i++) {
    array.push(generateRandomInteger(1, 100));
}

console.log("Початковий масив:", array);

let sortedArray = insertionSort(array);

console.log("Відсортований масив:", sortedArray);

