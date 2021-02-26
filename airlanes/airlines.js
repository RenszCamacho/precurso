let flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const info = (str) => console.log(`*** ${str} ***`);

const greeting = () => {
  let userName = prompt("Hello, could you please introduce your name.");
  alert(`Hello ${userName}, welcome! You can see the results on the console.`);
  return console.log(
    `Hello ${userName}, welcome! You can see the results on the console.`
  );
};

const displayingFlights = (arrFlights) => {
  info("List of all flight today");

  const display = arrFlights.map((flight) =>
    flight.scale
      ? `- The flight with origin: ${flight.from}, and destination: ${flight.to} has a cost of ${flight.cost}€ and makes a stop.

    `
      : `- The flight with origin: ${flight.from}, and destination: ${flight.to} has a cost of ${flight.cost}€ and does not make any stop.

    `
  );
  return console.log(...display);
};

const averagePrices = () => {
  info("This the average price for a flight.");

  const prices = flights.map((price) => price.cost),
    sumOfPrices = prices.reduce((acc, el) => acc + el, 0),
    averageResult = Math.round(sumOfPrices / prices.length);
  return console.log(`- The average cost of flights is ${averageResult}€`);
};

const flightsWithStop = (flights) => {
  info("List of flights with stop.");

  const filterFlightsScale = flights.filter((flight) => flight.scale);
  const printFlights = filterFlightsScale.map(
    (flight) =>
      `
      - The flight with origin ${flight.from}, and destination: ${flight.to}, has a cost of ${flight.cost}€ and this flight makes a stop.`
  );
  return console.log(...printFlights);
};

const lastFlights = (flights) => {
  info("List of the last five flights.");

  const filterLastFlights = flights.filter(
    (flight) => flight.id >= flights.length - 5
  );

  const printLastFligths = filterLastFlights.map(
    (flight) =>
      `
      - The flight with origin ${flight.from}, and destination: ${flight.to}, has a cost of ${flight.cost}€ and this flight makes a stop.`
  );

  return console.log(...printLastFligths);
};

const runProgram = () => {
  greeting();
  displayingFlights(flights);
  averagePrices();
  flightsWithStop(flights);
  lastFlights(flights);
};

runProgram();
