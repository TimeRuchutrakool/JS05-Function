function max(...numbers) {
  if (numbers.some((n) => isNaN(n))) {
    return NaN;
  } else if (numbers.length > 4) {
    return "This function can take only 4 parameters";
  } else {
    let max = 0;
    for (const n of numbers) {
      if (n >= max) max = n;
    }
    return max;
  }
}
console.log(max(1, 5, 3, -1));
