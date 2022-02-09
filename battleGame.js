// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage

// const attack2 = function (attackingPlayer, defendingPlayer, baseDamage, variableDamage) {

//   const randomValue = Math.floor(Math.random() * variableDamage);
//   const totalDamage = baseDamage + randomValue;
//   defendingPlayer.health = defendingPlayer.health - totalDamage;

//   console.log( `${attackingPlayer.name}' hits '${defendingPlayer.name} 'for '${totalDamage}' damage'`)
// }


// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10

let player1 = {
  name: 'Joe',
  health: 10,
};

let player2 = {
  name: 'Jane',
  health: 10,
};

// console.log(player1)
// console.log(player2)

// 3. Refactor attack function to an arrow function.  Comment out function above.
const attack = (attackingPlayer, defendingPlayer, baseDamage, variableDamage) => {
  const randomValue = Math.floor(Math.random() * variableDamage);
  const totalDamage = baseDamage + randomValue;
  defendingPlayer.health = defendingPlayer.health - totalDamage;

  // console.log( randomValue );
  // console.log( totalDamage );
  // console.log( defendingPlayer.health );
  let gameResult = (`${attackingPlayer.name}' hits '${defendingPlayer.name} 'for '${totalDamage}' damage'`);
  return gameResult;
}



// DO NOT MODIFY THE CODE BELOW THIS LINE
// Set attacker and defender.  Reverse roles each iteration
let attackOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard students from accidentally creating an infinite loop & crashing browser
let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackingPlayer, defendingPlayer] = attackOrder;
  console.log(attack(attackingPlayer, defendingPlayer, 1, 2));
  attackOrder = attackOrder.reverse();
  preventInfiniteLoop--;
}
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`${eliminatedPlayer.name} has been eliminated!`);