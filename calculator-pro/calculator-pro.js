let cancel = false;

const greeting = () => {
  const greet = "Hi there. I would like to know your name.",
    display = "results will be displayed by console.";
  alert(`${greet} and the ${display}`);
};

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
      `Result of substraction is ${isInteger(substraction)}`,
      `Result of multiplication is ${isInteger(multiplication)}`,
      `Result of division is ${isInteger(division)}`,
    ];
  }
};

const newOperation = (user) => {
  let askNewOperation = prompt(
    "Do you want to make another operation? Type: y = yes or n = no"
  );

  if (askNewOperation === null) {
    return cancel === true;
  }

  if (askNewOperation.toLowerCase().trim() === "y") {
    askNumber(user);
  } else {
    cancel = true;
    console.log(`See you later, ${user}!`);
    alert(`See you later, ${user}!`);
  }
};

const notNumber = (arrNumbers) => {
  for (let i = 0; i < arrNumbers.length; i++) {
    if (isNaN(arrNumbers[i])) {
      return console.log("Error: You must introduce a number.");
    } else {
      return console.log(calculator(arrNumbers));
    }
  }
};

const askNumber = (user) => {
  let userValue = prompt("Enter One! or More! numbers separated by commas.")
    .split(",")
    .map((el) => parseInt(el));
  notNumber(userValue);
  newOperation(user);
};

const askUserName = () => {
  let userName = prompt("Introduce your name, please.");
  askNumber(userName);
};

greeting();

do {
  askNumber();
} while (!cancel);
