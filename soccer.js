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
const getTotalPoints = function getTotalPoints(strResult) {
  let totalPoint = 0;
  //loop through each char in string,
  // calculate running total point by calling getPointsFromResult function
  for (let c in strResult) {
    totalPoint += getPointsFromResult(strResult[c]);
 }
 return totalPoint;
}
// Check getTotalPoints
console.log(getTotalPoints("wwdl"));
//console.log(getTotalPoints('wwdl')); //should equal 7
//Complete orderResults function.  
//This accepts unlimited team objects { name, results }, 
//and logs the team name & points
const orderResults = (...args) => {
    const ar = Array.from(args)
    ar.forEach(obj => {
      console.log(`${obj.name} scores ${obj.point}`);
    });
};

orderResults({name:'Titan', point: 12},{name: 'Saturn', point: 30},{name:'Galaxy', point: 24});
