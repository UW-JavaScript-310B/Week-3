// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid

const testPhoneNumber = phoneNumber => {
  const regex = /\(?[2-9][0-8][1-9]\)?[-\s]?[2-9]{3}[\s-]?[0-9]{4}/;
  return regex.test(phoneNumber);
}

// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// check testPhoneNumber
console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log(testPhoneNumber('(206) 33-4444')); // should return false, missing a digit
console.log(testPhoneNumber('(111) 334-4444')); // should return false, invalid area code
console.log(testPhoneNumber('734 439 8636')); // should return true

// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}


/*

NOTE: My parsePhoneNumber function will only match to VALID area codes. Area codes such as "012" or "191" won't match. If an invalid area code is passed into the parsePhoneNumber function, it will catch the error (an attempt to access properties of null object) and return the error message to be logged to console.

*/

function parsePhoneNumber(phoneNumber) {
  let regex = /\(?([2-9][0-8][1-9])\)?[-\s]?([2-9][0-9]{2}[\s-]?[0-9]{4})/;
  let numberComponents = regex.exec(phoneNumber);
  
  try {
    return {
      areaCode: numberComponents[1],
      phoneNumber: numberComponents[2].replace(/[-\s]/, '')
    }
  } catch(err) {
    return err.message;
  }
}

// Check parsePhoneNumber

console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}

console.log(parsePhoneNumber('(011) 422-5353'));
// catches error

console.log(parsePhoneNumber('(313) 439-8636'));
// returns {areaCode: '313', phoneNumber: '4398636'}

console.log(parsePhoneNumber('(206) 612 0366'));
// returns {areaCode: '313', phoneNumber: '4398636'}