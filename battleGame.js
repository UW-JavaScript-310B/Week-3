// 1. Create attackFunc function below.  This will take the following parameters:
// attackFuncingPlayer, defendingPlayer, baseDamage, variableDamage

// function attackFunc(attackFuncingPlayer, defendingPlayer, baseDamage, variableDamage) {
//   let damage = Math.round(baseDamage + Math.random() * variableDamage);
//   defendingPlayer.health = defendingPlayer.health - damage;
//   return `${attackFuncingPlayer.name} hits ${defendingPlayer.name} for ${defendingPlayer.health} damage`;
// }



// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10
let player1 = {name: "Jack", health: 10}
let player2 = {name: "Mike", health: 10}


// 3. Refactor attackFunc function to an arrow function.  Comment out function above.

const attackFunc = (attackFuncingPlayer, defendingPlayer, baseDamage, variableDamage) => {
  let damage = Math.round(baseDamage + Math.random() * variableDamage);
  defendingPlayer.health = defendingPlayer.health - damage;
  return `${attackFuncingPlayer.name} hits ${defendingPlayer.name} for ${defendingPlayer.health} damage`;
}

// DO NOT MODIFY THE CODE BELOW THIS LINE
// Set attackFuncer and defender.  Reverse roles each iteration
let attackFuncOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard students from accidentally creating an infinite loop & crashing browser
let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackFuncingPlayer, defendingPlayer] = attackFuncOrder;
  console.log(attackFunc(attackFuncingPlayer, defendingPlayer, 1, 2));
  attackFuncOrder = attackFuncOrder.reverse();

  preventInfiniteLoop--;
}
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`${eliminatedPlayer.name} has been eliminated!`);