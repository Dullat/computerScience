function binarySearch(array, target){
  let left = 0;
  let right = array.length - 1;
  
  while (left <= right){
    let mid = Math.floor((left + right) / 2);
    
    if(array[mid] == target){
      return mid;
    }
    
    if(array[mid] < target){
      left = mid + 1;
    }
    
    if(array[mid] > target){
      right = mid - 1;
    }
  }
  
  return -1;
}


const array = [2, 4, 6, 8, 10, 12, 14, 16];
const target = 10;
const index = binarySearch(array, target);
console.log(`Index of ${target} is: ${index + 1}`);
