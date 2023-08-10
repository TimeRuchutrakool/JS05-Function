// const factorial = (n) => {
//   if (n === 0) return 1;
//   else if (n < 0) return;
//   else {
//     let result = n;
//     for (let i = n - 1; i > 0; i--) {
//       result *= i;
//     }
//     return result;
//   }
// };

const factorial = (n) => {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
};

console.log(factorial(3));
