// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
  constructor(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
  }

  accelerate() {
    console.log(`${this.name} moving to ${this.topSpeed}`);
  }
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

let xWingFighter = new SpaceShip('X-Wing Fighter', '1,050 km/h');
let milleniumFalcon = new SpaceShip('Millennium Falcon', '75 MGLT');

xWingFighter.accelerate();
milleniumFalcon.accelerate();