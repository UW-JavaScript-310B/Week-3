/**

// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage
const attack = function(attackingPlayer, defendingPlayer, baseDamage, variableDamage) {
  //generate a random number from the range of 0 to the value of the variableDamage
  let randomInt = Math.floor(Math.random() * (variableDamage - 0)) + 0;
  // calculate totalDamage which is the sum of baseDamage and ranDomInt;
  // reduce the health property of the defending player by the amount of the totalDamage
  let totalDamage = baseDamage + randomInt;
  defendingPlayer.health -= totalDamage;
  // return the string describe the attack
  return `${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage}`;

}
**/

// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10
let player1 = {name: "Tommy The Great", health: 10};
let player2 = {name: "Master Sunny", health: 10};

// 3. Refactor attack function to an arrow function.  Comment out function above.

const attack = (attackingPlayer, defendingPlayer, baseDamage, variableDamage) => {
  //generate a random number from the range of 0 to the value of the variableDamage
  let randomInt = Math.floor(Math.random() * (variableDamage - 0)) + 0;
  // calculate totalDamage which is the sum of baseDamage and ranDomInt;
  // reduce the health property of the defending player by the amount of the totalDamage
  let totalDamage = baseDamage + randomInt;
  defendingPlayer.health -= totalDamage;
  // return the string describe the attack
  return `${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage}`;

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