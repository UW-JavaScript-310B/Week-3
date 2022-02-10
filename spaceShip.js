// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name, topSpeed){
        this.name = name;
        this.topSpeed = topSpeed;
    }

    accelerate(){
        const{name, topSpeed} = this;
        console.log( `The ${name} moving to ${topSpeed} !`)
    }

    failToLaunch(){
        const{name} = this;
        console.log(`The ${name} failed to launch!`)
    }
}


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

let cowboyBebop = new SpaceShip('Bebop' , '500mph');
let cidsAirship = new SpaceShip ('Highwind' , '700 mph');
let noctisAirship = new SpaceShip ('Regalia' , '500 mph')
let blueOrigin = new SpaceShip('Blue Orgin', '350mph');

cowboyBebop.accelerate();
cidsAirship.accelerate();
noctisAirship.accelerate();
blueOrigin.failToLaunch();