(function() {

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
  const getTotalPoints = (results) => {
    // Convert "results" string to an array
    const arrayResult = results.split('');
    // Define totalPoint var
    let totalPoint = 0;

    // Scan through arrayResult
    arrayResult.forEach(result => {
      totalPoint += getPointsFromResult(result);
    });
    // Return the total number of points won
    return totalPoint;
  };

  // Check getTotalPoints
  const totalPoints = getTotalPoints('wwdl');
  // Output to console log
  console.log(totalPoints); // should equal 7
  // Display the total point number in HTML page
  document.getElementById("totalPoint").textContent = `The total points of "wwdl" is: ${totalPoints}.`


  // create orderTeams function that accepts as many team objects as desired, 
  // each argument is a team object in the format { name, results }
  // i.e. {name: 'Sounders', results: 'wwlwdd'}
  // Logs each entry to the console as "Team name: points"
  const orderTeams = (...teams) => {
    // Convert teams obj to an array called teamArray
    const teamArray = Array.from(teams);
    // Scan through team array
    teamArray.forEach(team => {
      // Get team info
      const teamInfo = `${team.name}: ${getTotalPoints(team.results)}`;
      // Logs team info to the console
      console.log(teamInfo);
      // Display the info in HTML page
      const teamElement = document.createElement('p');
      const teamInfoText = document.createTextNode(teamInfo);
      teamElement.appendChild(teamInfoText);
      document.getElementById("totalPoint").appendChild(teamElement);
    });
  };

  // Check orderTeams
  orderTeams(
    { name: 'Sounders', results: 'wwdl' },
    { name: 'Galaxy', results: 'wlld' }
  );
  // should log the following to the console:
  // Sounders: 7
  // Galaxy: 4
})();