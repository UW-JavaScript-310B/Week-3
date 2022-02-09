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
// Returns an object in the format {areaCode, phoneNumber}\\
console.log('Result for parsing of phone number');

const parsePhoneNumber = function (parsePhone){
  let areaMatch = /\(?\d{3}\)?/.exec(parsePhone)

  let areaCode = areaMatch[0].replace(/\(/,'')

  let area = areaCode.replace(/\)/,'')

  let phone = /\d{3}-\d{4}/.exec(parsePhone)

  phoneObject = {
      areaCode:area,
      phoneNumber:phone[0].replace('-','')
  }
  // return `areaCode: '${phoneObject.area}', phoneNumber: '${phoneObject.phone}'`
  return phoneObject
}

console.log('Result for parsing of phone number');

/\(?\d{3}\)?/
  function parsePhoneNumber(phone) {
    //parse area code
    const regexAreaCode =  (/\d{3}/g);
    let parsedAreaCode = regexAreaCode.exec(phone);
    console.log(parsedAreaCode);

    

    //parse phone wo area code
    const regexPhonePrefix =  (/\d{3}/g);
    const regexPhoneExt =  (/\d{4}/);
    const regexDigit = (/[0-9]+/);


    let parsedAreaCode = regexAreaCode.exec(phone);
    let parsedPhonePrefix = regexPhonePrefix.exec(phone);
    let parsedPhoneExt = regexPhoneExt.exec(phone);
    let parsedPhone = regexPhone.exec(phone);
    let parsedDigit = regexDigit.exec(phone);
    let AreaCode = `${parsedAreaCode}`;
    // let  parsedPhoneNumber = `${parsedPhonePrefix} ${parsedPhoneExt}`;
    
    let phoneNumber = parsedPhone.replace("-", "");
    //var strNewWebsiteName = strWebsiteName.replace("\n", "");

    console.log(parsedPhonePrefix);
    console.log(parsedPhoneExt);
    console.log(parsedPhone);
    console.log(parsedDigit);
    console.log(AreaCode);
    console.log(phoneNumber);
    // console.log(parsedPhoneNumber);
  

    console.log(`areaCode: (${AreaCode}), phoneNumber: ${phoneNumber} `);

    
  };
    

  

// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}
