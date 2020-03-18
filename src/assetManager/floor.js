makeFloors() {
  const floors = [
    { x: 0, y: 640 },
    { x: 302, y: 640 },
    { x: 604, y: 640 },
    { x: 906, y: 640 },
    { x: 1208, y: 640 },
    { x: 1510, y: 640 },
    { x: 1812, y: 640 },
    { x: 2114, y: 640 },
    { x: 2416, y: 640 },
    { x: 2718, y: 640 },
    { x: 3020, y: 640 },
    { x: 3322, y: 640 },
    { x: 3624, y: 640 },
    { x: 3926, y: 640 },
    { x: 4228, y: 640 },
    { x: 4530, y: 640 },
    { x: 4832, y: 640 },
    { x: 5134, y: 640 },      
  ];
  floors.forEach(floor => {
    gameState.platforms.create(floor.x, floor.y, 'platform')
  });
}

export default makeFloors;