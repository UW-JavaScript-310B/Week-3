// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip{
    constructor(name, topSpeed) {
        this.name = name
        this.topSpeed = topSpeed
    }

    acccelerate(){
        const {name, topSpeed} = this
        console.log(`${name} moving to ${topSpeed} mph`)
    }
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const falcon = new SpaceShip('falconOne', 1000)
falcon.acccelerate()

const bigBird = new SpaceShip('birdOne', 600)
bigBird.acccelerate()