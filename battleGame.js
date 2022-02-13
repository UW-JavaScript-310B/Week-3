

// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage

// let variableDamage = Math.random()*10
// const baseDamage = 1;
// const attack = function(attackingPlayer, defendingPlayer, baseDamage, variableDamage){
  
//   // this will allow playability vs one player dominating 
//   if(variableDamage>5){
//     variableDamage=5;
//   }
//   defendingPlayer - (baseDamage + variableDamage)
//   let totalDamage = baseDamage + variableDamage

//   console.log(`
//   Attacking Player: ${attackingPlayer.name}
//   Defending Player: ${defendingPlayer.name}
  
//   Defending Player recived ${totalDamage} in damage
//   Defending Player Health: ${defendingPlayer.health}
  
//   Attacking Player Health: ${attackingPlayer.health}`)
// }

// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10

let player1 = {
    name: 'Player 1',
    health: 10,
}
let player2 = {
  name: 'Player 2',
  health: 10,
}

// 3. Refactor attack function to an arrow function.  Comment out function above.
const attack = (attackingPlayer, defendingPlayer, baseDamage, variableDamage) =>{
  // this line avoids single move wins
  if(variableDamage > 9){
    variableDamage = Math.floor(Math.random() *10)
  }
  defendingPlayer.health -= (baseDamage + variableDamage)
  let totalDamage = baseDamage + variableDamage

  console.log(`
  Attacking Player: ${attackingPlayer.name}
  Defending Player: ${defendingPlayer.name}
  
  Defending Player recived ${totalDamage} in damage
  Defending Player Health: ${defendingPlayer.health}
  
  Attacking Player Health: ${attackingPlayer.health}`)
}


// DO NOT MODIFY THE CODE BELOW THIS LINE
// Set attacker and defender.  Reverse roles each iteration
let attackOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard students from accidentally creating an infinite loop & crashing browser
let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackingPlayer, defendingPlayer] = attackOrder;
  // had to update the parameter for variable damage so it could be truely random
  console.log(attack(attackingPlayer, defendingPlayer, 1, Math.floor(Math.random() *10)));
  attackOrder = attackOrder.reverse();

  preventInfiniteLoop--;
}
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`
${eliminatedPlayer.name} has been eliminated!`);