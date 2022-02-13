// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid


const basicPhoneRegex =/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/g;
// This regex allows for a max of 3 OPTIONAL international code, a Strict Regular 10 digits, and OPTIONAL ext number between 1 and 3 numbers but to validate the extentision number it requeires to be set in a specific manner
    // ext. ||ext: || Ext. || Ext: proceeded by the number
const advancePhoneRegex = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g

//im using e as a parameter because when inspect pages and read their JS they use single letter parameters for inputs
function testPhoneNumber(e){
    if(e.match(advancePhoneRegex)){
        console.log(`
        ${e} \u2713 Valid Phone Number`)
    }else{
        console.log(`
        ${e} \u2717 Invalid Phone Number`)
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
testPhoneNumber('(206) 342-2321 Ext. 1')
testPhoneNumber('(206) 342-2321 Ext: 1')
testPhoneNumber('(206) 342-2321 Ext: 12')
testPhoneNumber('(206) 342-2321 Ext. 12')
testPhoneNumber('(206) 342-2321 Ext: 123')
testPhoneNumber('(206) 342-2321 ext. 1')
testPhoneNumber('(206) 342-2321 ext: 1')
testPhoneNumber('(206) 342-2321 ext: 12')
testPhoneNumber('(206) 342-2321 ext. 12')
testPhoneNumber('(206) 342-2321 ext: 123')
testPhoneNumber('011 (206) 342-2321 Ext. 1')
testPhoneNumber('1 (206) 342-2321 Ext: 1')
testPhoneNumber('12 (206) 342-2321 Ext: 12')
testPhoneNumber('(206) 342-2321 Ext. 12')
testPhoneNumber('(206) 342-2321 Ext: 123')
testPhoneNumber('(206) 342-2321 ext. 1')
testPhoneNumber('(206) 342-2321 ext: 1')
testPhoneNumber('(206) 342-2321 ext: 12')
testPhoneNumber('(206) 342-2321 ext. 12')
testPhoneNumber('(206) 342-2321 ext: 123')
testPhoneNumber('(206) 333-4444'); // should return true
testPhoneNumber('(206) 33-4444'); // should return false, missing a digit
testPhoneNumber('206 333-4444') //Edgecase if no paranthases are given by the user


// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}
function parsePhoneNumber(pNumber){
    const regexArea =/\d{3,4}/;
    const regexPhone =/\d{3}-\d{4}/;
    let testArea = regexArea.exec(pNumber)
    let testPhone = regexPhone.exec(pNumber)
    let Object ={
        area: testArea[0],
        Phone: testPhone[0]
    }
    console.log(Object)
    
}
parsePhoneNumber('(206) 333-4444')

// // Check parsePhoneNumber
parsePhoneNumber('206-333-4444');
// // returns {areaCode: '206', phoneNumber: '3334444'}

parsePhoneNumber('(222) 422-5353');
// // returns {areaCode: '222', phoneNumber: '4225353'}