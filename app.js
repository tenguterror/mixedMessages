const vehicles = [
  "Yamaha FZ-09",
  "Trophy Truck",
  "F1 Car",
  "Nascar",
  "Ducati Sport Classic",
];
const tracks = ["Laguna Seca", "Nurburging", "Baja 1000", "Suzuka", "Monza"];
const position = ["First", "Seecond", "Third", "Dead Last"];

const randomIndex = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const selectedVehicle = () => {
  return randomIndex(vehicles);
};

const selectedTracks = () => {
  return randomIndex(tracks);
};

const selectedPosition = () => {
  return randomIndex(position);
};

const mixedMessage = () => {
  console.log(
    `I went to ${selectedTracks()} and drove a ${selectedVehicle()} and placed ${selectedPosition()}`
  );
};

mixedMessage();
