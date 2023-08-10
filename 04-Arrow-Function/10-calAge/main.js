const calcAge = (birthYear) => {
  const day = 30;
  const monthToDay = 11 * 30;
  const yearToDay = (2020 - birthYear) * 365;
  return day + monthToDay + yearToDay;
};

console.log(calcAge(2000));
