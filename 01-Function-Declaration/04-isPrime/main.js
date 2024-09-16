function isPrime(n) {
  let isPrime = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime === true && n !== 1
    ? `${n} is a prime number`
    : `${n} is not a prime number`;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(15));
console.log(isPrime(17));
