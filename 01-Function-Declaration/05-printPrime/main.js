// function printPrime(number) {
//   let primeNumbers = "";
//   for (let n = 2; n <= number; n++) {
//     let isPrime = true;
//     for (let i = 2; i <= n; i++) {
//       if (n % i === 0 && i !== n) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) primeNumbers += n + ", ";
//   }
//   return primeNumbers.slice(0, -2);
// }

function isPrime(n) {
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime === true && n !== 1 ? true : false;
}

function printPrime(number) {
  let primeNumbers = "";
  for (let n = 2; n <= number; n++) {
    if (isPrime(n)) primeNumbers += n + ", ";
  }
  return primeNumbers.slice(0, -2);
}

console.log(printPrime(20));
