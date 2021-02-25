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
    return Math.round(resultNumber * 1000) / 1000;
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
    return `The squareRoot of ${arr[0]} is ${isInteger(squareRoot)}`;
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
    "Type 'y' if you want to make another operation or any key to cancel"
  );

  if (askNewOperation === null) {
    return (cancel = true);
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
      return alert("Error: You must introduce a number.");
    }
  }
  return console.log(calculator(arrNumbers));
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
  askUserName();
} while (!cancel);
