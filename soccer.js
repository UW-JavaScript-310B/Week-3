
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

function getTotalPoints(results){
  let word = results.split('');
  let total = 0;
  word.forEach((letter)=>{
    if(RESULT_VALUES[letter]){
      total +=RESULT_VALUES[letter];
    }
  })
return total;
}



// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

function orderTeams(...args){
  args.forEach((arg)=>{
  let word = arg.results.split('');
  let total = 0;
  word.forEach((letter)=>{
    if(RESULT_VALUES[letter]){
      total +=RESULT_VALUES[letter];
    }
  })
console.log(`${arg.name}: ${total}`);
})
}

// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' },
  { name: 'Stars', results: 'wlldd' },
  { name: 'Moon', results: 'wlldw' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4