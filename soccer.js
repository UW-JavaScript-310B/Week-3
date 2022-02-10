
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

function getTotalPoints(matchString) {
  let resultArray = matchString.split('');
  let totalPoints = 0;

  for (let i = 0; i < resultArray.length; i++ ) {
    totalPoints += getPointsFromResult(resultArray[i]);
  }

  return totalPoints;
}

// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

function orderTeams(...teamInfo) {

  for (let i = 0; i < teamInfo.length; i++ ){
    let teamName = teamInfo[i]['name'];
    let finalPointCount = getTotalPoints(teamInfo[i]['results']);
    console.log(`${teamName}: ${finalPointCount}`);
  }
}


// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4