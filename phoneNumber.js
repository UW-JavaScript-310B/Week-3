// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid

const phoneNumberStr = '(206) 333-4444';
// const phoneNumberStr = '206-333-4444';
// const phoneNumberStr = '206 333 4444';

function testPhoneNumber(phoneNumber) {
    const checkParenthesis = /^\(\d{3}\)/.test(phoneNumber);

    if (checkParenthesis == true) {
        const regexPhone = /^\(\d{3}\)[-\s]\d{3}[-\s]\d{4}$/.test(phoneNumber);
        return regexPhone;
    } else {
        const regexPhone = /^\d{3}[-\s]\d{3}[-\s]\d{4}$/.test(phoneNumber);
        return regexPhone;
    }
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

function parsePhoneNumber(phoneNumber) {
    const checkParenthesis = /^\(\d{3}\)/.test(phoneNumber);

    if (checkParenthesis == true) {
        const regexAreaCode = /^(\(\d{3}\))[-\s](\d{3}[-\s]\d{4})$/;
        const capturePhoneNum = regexAreaCode.exec(phoneNumber);
        const numberCaptured = {areaCode: capturePhoneNum[1], phoneNumber: capturePhoneNum[2]};
        return numberCaptured;
    } else {
        const regexAreaCode = /^(\d{3})[-\s](\d{3}[-\s]\d{4})$/;
        const capturePhoneNum = regexAreaCode.exec(phoneNumber);
        const numberCaptured = {areaCode: capturePhoneNum[1], phoneNumber: capturePhoneNum[2]}; 
        return numberCaptured;
    }
}

// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}