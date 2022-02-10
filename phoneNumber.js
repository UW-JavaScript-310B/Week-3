// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid

const testPhoneNumber = function(strPhoneNumber)
{
    let phone = strPhoneNumber
    const regex = new RegExp(/^\(?(\d{3})\)?[-\s](\d{3})[-\s](\d{4})$/);
    return regex.test(phone);
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


// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}
function parsePhoneNumber(strPhone)
{
    //define phone object
    phoneObj = {areaCode: null, phoneNumber: null};
    //match phone number patter
    const ac = new RegExp(/^\(?(\d{3})\)?[-\s](\d{3})[-\s](\d{4})$/);
    // run exec method to capture phone number and remaining part of phone number
    // by removing non numeric character globally and
    // return only digits
    ph = ac.exec(strPhone)[0].replace(/\D/g,'');
    // set areaCode to the first 3 numeric character
    phoneObj.areaCode = ph.substring(0,3);
    // set phoneNumber to the last 7 numeric character
    phoneObj.phoneNumber = ph.substring(3,ph.length);
    // return the phone object
    return phoneObj;

}

// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}