const calculator = (n1, n2) => {
  if (n2 === undefined) {
    if (typeof n1 !== "number") {
      return "Error: Please, you must introduce a number.";
    } else {
      let squareRoot = Math.round(Math.sqrt(n1) * 1000) / 1000;
      return [`SquareRoot of ${n1} is ${squareRoot}`];
    }
  } else if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "Error: Please, you must introduce a number.";
  } else {
    const resultsSum = Math.round(((n1 + n2) * 1000) / 1000),
      resultsSubstraction = Math.round(((n1 - n2) * 1000) / 1000),
      resultsMultiplication = Math.round((n1 * n2 * 1000) / 1000),
      resultsDivision = Math.round(((n1 / n2) * 1000) / 1000);
    return [
      `The result of the sum is ${resultsSum}`,
      `The result of the substraction is ${resultsSubstraction}`,
      `The result of the multiplication is ${resultsMultiplication}`,
      `The result of the division is ${resultsDivision}`,
    ];
  }
};

console.log(calculator(15));
