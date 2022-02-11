
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

function getTotalPoints(string){
  let points = 0;
  for(let i = 0; i<string.length;i++){
    if(string[i]=='w'){
      points+=3
    }
    if(string[i]=='d'){
      points+=1
    }
    if(string[i]=='l'){ // I know this line isn't really neaded just wanted to be more explicit in the code
      points+=0
    }
  }
  return points
}

// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"



                // This is equal to pythons
                // def fName(arg1, *argv):
const orderTeams= (...object) =>{
  object.forEach(object => {
    console.log(`${object.name} - ${getTotalPoints(object.results)}`)
  });
}


// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4