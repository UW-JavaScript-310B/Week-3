// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name, topSpeed){
        this.name = name;
        this.topSpeed = topSpeed
    }
    accelerate(){
        let idle =0;
        while(idle<this.topSpeed){
            idle+=1;
            console.log(idle)
        }
        console.log('top speed reached', this.topSpeed)
    }
}


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const ship1 = new SpaceShip("ship1", '15')
const ship2 = new SpaceShip("ship1", '155')
const ship3 = new SpaceShip("ship1", '1555')

ship1.accelerate()
ship2.accelerate()
// uncomment and run them with node
// console.log(ship1)
// setTimeout(() => {console.log("\n LAUNCHING IN")}, 1000);
// setTimeout(() => {console.log("\n 3")}, 2000);
// setTimeout(() => {console.log("\n 2")}, 3000);
// setTimeout(() => {console.log("\n 1")}, 4000);
// setTimeout(() => {console.log("\n ")}, 5000);
// setTimeout(() => {ship1.accelerate()}, 6000);