// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
constructor(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;

    }
    
usetopSpeed(){
    const{name, topSpeed} = this;
    console.log( `${this.name} moving to ${this.topSpeed}`)
}

}


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const spaceX = new SpaceShip('Dragon', '5,770 mph');
spaceX.usetopSpeed();

const blueOrigin = new SpaceShip('New Shepard', '2,217 mph');
blueOrigin.usetopSpeed();