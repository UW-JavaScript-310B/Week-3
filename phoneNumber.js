// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid
const testPhoneNumber = (phoneNumber) => {
  // Define new phone number RegExp
  const phoneNoRegExp = new RegExp(/^(\d{3}|\(\d{3}\))([-\s])\d{3}([-\s])\d{4}$/);
  // Check if the "phoneNumber" is a phone number or not. 
  const isPhoneNo = phoneNoRegExp.test(phoneNumber);
  return isPhoneNo;
}; 


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

// Define some phone number vars to check
const phone1 = '(206) 333-4444';
const phone2 = '(206) 33-4444';
// check testPhoneNumber
const testPhone1 = testPhoneNumber(phone1);
const testPhone2 = testPhoneNumber(phone2);

// check testPhoneNumber
console.log(testPhone1); // should return true
console.log(testPhone2); // should return false, missing a digit
// Display the results in HTML page
document.getElementById("phoneChk1").textContent = `Is this number "${phone1}" a phone number? ${testPhone1}`;
document.getElementById("phoneChk2").textContent = `Is this number "${phone2}" a phone number? ${testPhone2}`;


// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}
const parsePhoneNumber = (phoneNumber) => {
  // Check if the "phoneNumber" is a phone number
  if (testPhoneNumber(phoneNumber)) {
    // Strip all parentheses, hyphens and white space from phone no.
    const strippedPhoneNo = phoneNumber.replace(/[()\ \s-]+/g, '');
    // Get areaCode from the stripped phone no.
    const areaCode = strippedPhoneNo.slice(0, 3);
    // Get the phone number part from stripped phone no.
    const phoneNoPart = strippedPhoneNo.replace(areaCode,'');
    // Define new regexp phone number
    const phonePartRegExp = new RegExp(`(${areaCode})(${phoneNoPart})`,'g');
    // Define an array to store all parts of the phone number
    let arrayPhoneNo = phonePartRegExp.exec(strippedPhoneNo);
    // Define an object called objPhoneNo
    const objPhoneNo = {
      areaCode: arrayPhoneNo[1],
      phoneNumber: arrayPhoneNo[2],
    };
    return objPhoneNo;
  } else {
    // console.log(`The string "${phoneNumber}" is not a phone no.`);
    return `The string "${phoneNumber}" is not a phone number.`;
  }
};
// Define some phone-number vars to check
const phone3 = '206-333-4444';
const phone4 = '(222) 422-5353';
const phone5 = '345 33 2345';
// check parsePhoneNumber
const chkParsePhoneNo3 = parsePhoneNumber(phone3);
const chkParsePhoneNo4 = parsePhoneNumber(phone4);
const chkParsePhoneNo5 = parsePhoneNumber(phone5);

// Check parsePhoneNumber
console.log(chkParsePhoneNo3);
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(chkParsePhoneNo4);
// returns {areaCode: '222', phoneNumber: '4225353'}

console.log(chkParsePhoneNo5);
// returns 'The number "345 33 2345" is not a phone no.'

// Display the results in HTML page
document.getElementById("phoneChk3").textContent = `The phone number: ${phone3} with area code: ${chkParsePhoneNo3.areaCode} and number: ${chkParsePhoneNo3.phoneNumber}`;
document.getElementById("phoneChk4").textContent = `The phone number: ${phone4} with area code: ${chkParsePhoneNo4.areaCode} and number: ${chkParsePhoneNo4.phoneNumber}`;
document.getElementById("phoneChk5").textContent = chkParsePhoneNo5;
