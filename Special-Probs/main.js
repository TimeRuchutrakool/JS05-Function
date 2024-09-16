function triangleNumbers(n) {
  if (n <= 0) return "Please";
  let star = "";
  for (let i = n; i > 0; i--) {
    star += "*".repeat(i) + "\n";
  }
  return star;
}

console.log(triangleNumbers(10));

function convertName(name) {
  const nameArr = name.split(" ");
  if (nameArr.length < 2) return "Please Enter Full Name";
  const newName = nameArr
    .map((n) => n.slice(0, 1).toUpperCase() + ".")
    .join("");
  return newName;
}

console.log(convertName("Time"));

function fib(n) {
  if (n === 0) return 0;

  let prev = 0;
  let cur = 1;
  let result;
  for (let i = 1; i < n - 1; i++) {
    result = prev + cur;
    prev = cur;
    cur = result;
  }
  return result;
}

console.log(fib(7));
