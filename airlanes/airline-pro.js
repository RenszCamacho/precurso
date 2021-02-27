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

const userOrAdmin = () => {
  let typeOfUser = prompt(
    "Hello, are you admin or user? Type admin if you are or you will be a user by default."
  );
  typeOfUser === "admin" ? addFlights() : console.log("soy usuario");
};

const addFlights = () => {
  do {
    let id = flights.length - 1 + 1,
      to = prompt("Hacia donde"),
      from = prompt("Desde donde"),
      cost = prompt("Cual es el precio"),
      scale = prompt("Con escalas? s/n").toLowerCase().trim();

    scale = scale === "s" ? true : false;

    const newFlight = { id: id, to: to, from: from, cost: cost, scale: scale };
    flights.push(newFlight);
  } while (flights.length < 15);
  console.log(flights);
};
