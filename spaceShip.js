// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name, topSpeed){
        this.name = name;
        this.topSpeed = topSpeed;
    }

    accelerate() {
        console.log(`${this.name} moving to ${this.topSpeed}`);
    }
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
const spaceship1 = new SpaceShip("Forward Unto Dawn", "lightspeed");
const spaceship2 = new SpaceShip("Backwards Unto Evening", "50% lightpseed");
const spaceship3 = new SpaceShip("Enterprise", "Warp 4");
const spaceship4 = new SpaceShip("Voyager", 30);

spaceship1.accelerate();
spaceship2.accelerate();
spaceship3.accelerate();
spaceship4.accelerate();