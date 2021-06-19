const vehicles = ['Yamaha FZ-09', 'Trophy Truck', 'F1 Car', 'Nascar', 'Ducati Sport Classic'];
const tracks = ['Laguna Seca', 'Nurburging', 'Baja 1000', 'Suzuka', 'Monza'];
const postion = ['First', 'Seecond', 'Third', 'Dead Last'];

const randomIndex = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
};

// console.log(randomIndex(vehicles));
