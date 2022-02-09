const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}


// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won

function getTotalPoints(gameResults) {
  let gameResultsSplit = gameResults.split('');
  let total = 0;
  gameResultsSplit.forEach((gameResult) => {
    if (RESULT_VALUES[gameResult]) {
      total += RESULT_VALUES[gameResult];
    }

  })
  //console.log(total);
  return total

}


// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7
console.log(getTotalPoints('wwldlwd')); // should equal 11
console.log(getTotalPoints('wzldlwd')); // should equal 8

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"


function orderTeams(...args) {
  args.forEach((arg) => {
    let gameResultsSplit = arg.results.split('');
    let total = 0;
    gameResultsSplit.forEach((gameResult) => {
      if (RESULT_VALUES[gameResult]) {
        total += RESULT_VALUES[gameResult];
      }
    })
    console.log(`${arg.name}: ${total}`);
  })
}


// Check orderTeams
orderTeams({
  name: 'Sounders',
  results: 'wwdl'
}, {
  name: 'Galaxy',
  results: 'wlld'
}, {
  name: 'Minnesota United',
  results: 'dldw'
});
// should log the following to the console:
// Sounders: 7
// Galaxy: 4