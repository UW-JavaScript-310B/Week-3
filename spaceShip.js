// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip{
  
    constructor(name,topSpeed){
        this.name = name;
        this.topSpeed = topSpeed;
    }
    accelerate(){
        const{name,topSpeed} = this;
        console.log(`${name} moving to ${topSpeed}m/s`)
    }

}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
    const ship = new SpaceShip("Rocket", 100000);
    ship.accelerate();