let array = [1, 2, 4, 5, 6, 7, 9]

function sumArray(array) {
  if (array.length === 0) {
    return 0
  } else {
    return array.shift() + sumArray(array)
  }
}

console.log(sumArray(array)) // Output should be 34
