let array = [7, 32, 2, 89, 5, 48]

function mergeShort(array) {
  if (array.length <= 1) return array

  let mid = Math.floor(array.length / 2)
  let leftHalf = array.slice(0, mid)
  let rightHalf = array.slice(mid)

  const sortedLeft = mergeShort(leftHalf)
  const sortedRight = mergeShort(rightHalf)

  return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
  let merged = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      merged.push(left[leftIndex])
      leftIndex++
    } else {
      merged.push(right[rightIndex])
      rightIndex++
    }
  }

  while (leftIndex < left.length) {
    merged.push(left[leftIndex])
    leftIndex++
  }

  while (rightIndex < right.length) {
    merged.push(right[rightIndex])
    rightIndex++
  }

  return merged
}

console.log(mergeShort(array))
