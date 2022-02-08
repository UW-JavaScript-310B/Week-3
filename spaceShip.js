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
        const {name,topSpeed} = this;
        console.log(`${name} moving to ${topSpeed}`);
    }
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const discovery = new SpaceShip('Discovery', '360000mph');
discovery.accelerate();

const enterprise = new SpaceShip('Enterprise', '840000mph');
enterprise.accelerate();