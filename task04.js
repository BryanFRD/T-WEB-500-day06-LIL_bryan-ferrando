export function fizzBuzz(num) {
  const t = []
  for(let i = 1; i <= num; i++){
    t.push(i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i);
  }
  
  console.log(t.join(', '));
}