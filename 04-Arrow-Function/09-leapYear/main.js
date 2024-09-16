const leapYear = (year) => {
  return year % 400 === 0
    ? true
    : year % 100 === 0
    ? false
    : year % 4 === 0
    ? true
    : false;
};

console.log(leapYear(2004));
