// @ts-check


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

// spent too much time trying to figure out the soccer exercise on my own
// i ended up doing the extra credit for the receipt exercise, going to focus on week 4 assignment.
const getTotalPoints = (strPoints) => {
// code block here
let totalPoints = 0;

// const pointValues = new RESULT_VALUES; // not sure how to tie in the point values into the strPoints below

let sepPoints = strPoints.split(',');

sepPoints.forEach(function(number){
  totalPoints += number;
});

return totalPoints;
};



// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

const orderTeams = () => {
  // code block here
  };

// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4