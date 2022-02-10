// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`
class Spaceship {
	constructor(name, topSpeed){
		this.name = name;
		this.topSpeed = topSpeed;
	}
	accelerate(name, topSpeed){
		console.log(`${this.name} moving to ${this.topSpeed}`);
	}
}
const ss1 = new Spaceship("Voyager", "130kmps");
const ss2 = new Spaceship("Expedition", "160kmps");


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
ss1.accelerate()
ss2.accelerate()

//Here is the result for above two method calls:
//Voyager moving to 130kmps
//spaceShip.js:11 Expedition moving to 160kmps