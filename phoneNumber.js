// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid

const testPhoneNumber = function(phoneNumber) {
   const testFormat = /^\(\d{3}\)?\s\d{3}[-\s]\d{4}$/;
   const regex = new RegExp( testFormat );
   return regex.test(phoneNumber);
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

// check testPhoneNumber
console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log(testPhoneNumber('(206) 33-4444')); // should return false, missing a digit


// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}

const parsePhoneNumber = function(phoneNumber) {

    const regex1 = new RegExp(/(\d{3})/);
    const areaCode = regex1.exec(phoneNumber);

    const regex2 = new RegExp(/(\d{3})[\s-](\d{4})/);
    const phone = regex2.exec(phoneNumber);

    return (`areaCode: ${areaCode[1]}, phoneNumber: ${phone[1]}${phone[2]}`);
};

// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));
//returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}