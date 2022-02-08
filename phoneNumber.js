// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid



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

console.log('Result for validation of phone number')

function testPhoneNumber(phone) {
    const regex = /^\(\d{3}\)[-\s]\d{3}[-\s]\d{4}$/;

    if (phone.match(regex)) {
        console.log('true');
    } else {
        console.log('false');

    }

};

console.log('Phone number is valid')
console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log('Phone number is not valid')
console.log(testPhoneNumber('(206) 33-4444')); // should return false, missing a digit

// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above fparsePhoneNumberormats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}
console.log('Result for parsing of phone number');


  function parsePhoneNumber(phone) {
    const regexAreaCode = /\d{3}/g;
    // const regexPhonePrefix = /\d{3}/;
    // const regexPhoneExt = /\d{4}/;
    const regexPhone = /\d{3}[-\s]\d{4}/;
    const regexDigit = /[0-9]+/;
    let parsedAreaCode = regexAreaCode.exec(phone);
    // let parsedPhonePrefix = regexPhonePrefix.exec(phone);
    // let parsedPhoneExt = regexPhoneExt.exec(phone);
    let parsedPhone = regexPhone.exec(phone);
    let parsedDigit = regexDigit.exec(phone);
    console.log(parsedAreaCode);
    // console.log(parsedPhonePrefix);
    // console.log(parsedPhoneExt);
    console.log(parsedPhone);
    console.log(parsedDigit);
  };
    

  

// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}