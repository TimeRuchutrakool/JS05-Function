const leapYear = (year) => {
  return year % 4 === 0 ? (year % 100 === 0 ? false : true) : false;
};

console.log(leapYear(2004));
