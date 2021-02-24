const isInteger = (resultNumber) => {
  if (Number.isInteger(resultNumber)) {
    return resultNumber;
  } else {
    resultNumber.toFixed(3);
  }
};

const calculator = (arr) => {
  const sum = arr.reduce((acc, num) => acc + num, 0),
    substraction = arr.reduce((acc, num) => acc - num),
    multiplication = arr.reduce((acc, num) => acc * num, 1),
    division = arr.reduce((acc, num) => acc / num),
    sqrtRoot = (number) => Math.sqrt(number);

  let squareRoot = sqrtRoot(arr[0]);
  if (arr.length === 1) {
    return `The squareRoot of ${arr[0]} is ${squareRoot}`;
  } else {
    return [
      `Result of sum is ${isInteger(sum)}`,
      `Result of substraction is ${substraction}`,
      `Result of multiplication is ${multiplication}`,
      `Result of division is ${division}`,
    ];
  }
};
