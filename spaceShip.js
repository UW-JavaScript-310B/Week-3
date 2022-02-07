// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`
class SpaceShip {
  constructor(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
  }
  accelerate(){
    const {name,topSpeed} = this;
    console.log(`${name} moving to ${topSpeed} km/s`);
  }
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
// Define a ship called "lightSpeed"
const lightSpeed = new SpaceShip('Light Speed', '300K');

// Define a ship called "blaster"
const blaster = new SpaceShip('Blaster', '150K');

// Call the constructor and the accelerate method of these ships
console.log(lightSpeed.topSpeed);
lightSpeed.accelerate();
blaster.accelerate();