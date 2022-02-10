// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`
class SpaceShip {
    constructor(name, topSpeed)
    {
        this.name = name;
        this.topSpeed = topSpeed;
    }
    accelerate()
    {
        const{name, topSpeed} = this;
        console.log(`${name} moving to ${topSpeed}`);
    }

}




// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
const mySS1 = new SpaceShip("Hercules",80);
const mySS2 = new SpaceShip("Challenger", 40);
const mySS3 = new SpaceShip("Saturn", 60);
mySS1.accelerate();
mySS2.accelerate();
mySS3.accelerate();