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
/*const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}*/

function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won


let getTotalPoints = function(pointsString){
  let pointsArray = Array.from(pointsString);

  let sum = 0
  
  pointsArray.forEach(function(result){

    sum += getPointsFromResult(result);
   })

  return sum;

  };

// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

/*let orderTeams = function(...teams){
  let teamsArray = ...teams;
  console.log(teamsArray);
  

};*/

const orderTeams = (...teams) => {
  teams.forEach(team => {
  let teamResults = `${team.results}`
  console.log(`${team.name}: ${getTotalPoints(teamResults)}`);
  })
  };



// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4
