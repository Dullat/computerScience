function fib(n){
  let sequence = [];
  let i = 0;
  while(i <= n){
    if(i === 0 || i === 1){
      sequence[i] = i;
    } else {
      sequence[i] = sequence[i-1] + sequence[i-2];
    }
    i++;
  }
  console.log(sequence);
  console.log(n + 'th is ' + sequence[n])
}
