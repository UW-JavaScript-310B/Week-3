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
        console.log(`${this.name} moving to ${this.topSpeed}`)
    }
}


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

let Enterprise = new SpaceShip('USS Enterprise NCC-1701-D','Warp 9.5');
let Voyager = new SpaceShip('USS Voyager NCC-74656','Warp 9.975');

Enterprise.accelerate();
Voyager.accelerate();