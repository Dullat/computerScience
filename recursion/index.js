// fact(n){
//     base

//     recursive case
// }

function sumAll(n) {
  if (n === 1) {
    return 1
  } else return n + sumAll(n - 1)
}

console.log(sumAll(3))
