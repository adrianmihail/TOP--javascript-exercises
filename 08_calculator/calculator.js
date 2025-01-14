const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(number) {
  return number.reduce((sum, current) => sum + current, 0);
};

const multiply = function(number) {
  return number.reduce((sum, current) => sum * current, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  let arr = [];

  for (let i = 1; i <= number; i++){
    arr.push(i);
  }

  return arr.reduce((sum, current) => sum * current, 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
