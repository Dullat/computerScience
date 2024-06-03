function countArray(arr) {
  if (arr.length === 0) {
    return 0
  }
  let count = 0

  let first = arr.shift()

  if (Array.isArray(first)) {
    count += countArray(first)
  } else if (Number.isInteger(first)) {
    count++
  }

  return count + countArray(arr)
}

var seven = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]

console.log(countArray(seven))

// function countIntegers(arr) {
//     let count = 0;

//     function countHelper(subArray) {
//         for (const element of subArray) {
//             if (Array.isArray(element)) {
//                 countHelper(element); // Recursively call countHelper for nested arrays
//             } else if (Number.isInteger(element)) {
//                 count++; // Increment count for each integer
//             }
//         }
//     }

//     countHelper(arr); // Initial call to countHelper with the top-level array
//     return count;
// }

// // Example usage:
// const array = [[1, 2, 3], [4, [5, 6]], [7, 8]];
// console.log(countIntegers(array)); // Output: 8
