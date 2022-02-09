// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(shipName, topSpeed) {
        this.shipName = shipName;
        this.topSpeed = topSpeed;
    };
    accelerate() {
        console.log(`${this.shipName} moving to ${this.topSpeed}`);
    };
};

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
const bigShip = new SpaceShip("Big Ship", 200);
const tinyShip = new SpaceShip("Tiny Ship", 500);
bigShip.accelerate();
tinyShip.accelerate();