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
        console.log(`${this.name} moving to ${this.topSpeed}`)
    };
};


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const falcon = new SpaceShip('Falcon', 'lightspeed'); 
falcon.accelerate();

const winnebago = new SpaceShip('1986 Winnebago Chieftain 33', 'Ludicrous Speed'); 
winnebago.accelerate();

const rover = new SpaceShip('Mars Rover', 19000); 
rover.accelerate();