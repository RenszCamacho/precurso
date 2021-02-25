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

const greeting = () => {
  let userName = prompt("Hello, could you please introduce your name.");
  return alert(`Hello ${userName}, welcome!`);
};

const displayingFlights = (arrFlights) => {
  const a = arrFlights.map((flight) =>
    flight.scale
      ? `- The flight with origin: ${flight.from}, and destination: ${flight.to} has a cost of ${flight.cost}€ and makes a scale.

    `
      : `- The flight with origin: ${flight.from}, and destination: ${flight.to} has a cost of ${flight.cost}€ and does not make any scale.

    `
  );
  return console.log(...a);
};

displayingFlights(flights);

const averaPrices = () => {
  const prices = flights.map((price) => price.cost),
    sumOfPrice = prices.reduce((acc, el) => acc + el, 0),
    averageResult = Math.round(sumOfPrice / prices.length);
  return console.log(`- The average cost of flights is ${averageResult}€`);
};

averaPrices();
