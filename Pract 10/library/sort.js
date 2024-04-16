const SortingLibrary = (function () {
            function bubbleSort(array, order) {
                let comparisons = 0;
                let swaps = 0;
                const n = array.length;
                for (let i = 0; i < n - 1; i++) {
                    for (let j = 0; j < n - i - 1; j++) {
                        comparisons++;
                        if ((order === 'asc' && array[j] > array[j + 1]) || (order === 'desc' && array[j] < array[j + 1])) {
                            [array[j], array[j + 1]] = [array[j + 1], array[j]];
                            swaps++;
                        }
                    }
                }
                console.log(`Bubble Sort: comparisons - ${comparisons}, swaps - ${swaps}`);
                return array;
            }

            function selectionSort(array, order) {
                let comparisons = 0;
                let swaps = 0;
                const n = array.length;
                for (let i = 0; i < n - 1; i++) {
                    let minIndex = i;
                    for (let j = i + 1; j < n; j++) {
                        comparisons++;
                        if ((order === 'asc' && array[j] < array[minIndex]) || (order === 'desc' && array[j] > array[minIndex])) {
                            minIndex = j;
                        }
                    }
                    if (minIndex !== i) {
                        [array[i], array[minIndex]] = [array[minIndex], array[i]];
                        swaps++;
                    }
                }
                console.log(`Selection Sort: comparisons - ${comparisons}, swaps - ${swaps}`);
                return array;
            }

            function insertionSort(array, order) {
                let comparisons = 0;
                let swaps = 0;
                const n = array.length;
                for (let i = 1; i < n; i++) {
                    let key = array[i];
                    let j = i - 1;
                    while (j >= 0 && ((order === 'asc' && array[j] > key) || (order === 'desc' && array[j] < key))) {
                        comparisons++;
                        array[j + 1] = array[j];
                        j = j - 1;
                        swaps++;
                    }
                    array[j + 1] = key;
                }
                console.log(`Insertion Sort: comparisons - ${comparisons}, swaps - ${swaps}`);
                return array;
            }

            return {
                bubbleSort,
                selectionSort,
                insertionSort
            };
        })();

        const array = generateRandomArray(100); 
        console.log('Початковий масив:');
        console.log(array);

        const bubbleSortedAscending = SortingLibrary.bubbleSort(array.slice(), 'asc');
        console.log('Bubble Sort (за зростанням):');
        console.log(bubbleSortedAscending);

        const selectionSortedAscending = SortingLibrary.selectionSort(array.slice(), 'asc');
        console.log('Selection Sort (за зростанням):');
        console.log(selectionSortedAscending);

        const insertionSortedAscending = SortingLibrary.insertionSort(array.slice(), 'asc');
        console.log('Insertion Sort (за зростанням):');
        console.log(insertionSortedAscending);

        function generateRandomArray(length) {
            const array = [];
            for (let i = 0; i < length; i++) {
                array.push(Math.floor(Math.random() * 500) + 1); 
            }
            return array;
        }
