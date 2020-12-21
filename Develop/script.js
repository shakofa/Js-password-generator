/ Password variable values
var upperCase = [ 
'A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z'
];
var lowerCase = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z']
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = [ 
'@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.'];


//User inut variables
var lenght;
var confirmNumericChar;
var confirmUpperCase;
var confirmLowerCase;
var confirmSpecialChar;


//Start Function to get user password options
function passwordOptions(){
  //ask for user input
  var length = parseInt(prompt('How many Characters would you like your password?'));


  if(!length){
    alert('This needs a value.');
    return;
  } 


  //Check if the password lenght is a number.
  if (isNaN(lenght) === true) {
    alert('password lenght must be provided as a number');
    return;
  }
  
 if( length < 8 || length > 128){
    //Start user input prompts
    length = parseInt(prompt('You must choose between 8 and 128'));
  }


  //User input variables that store boolean for inclusion of numeric and special Charecters and uppercase and lowercase letters
  var confirmSpecialChar = confirm('Click OK to add a special character.');
  var confirmUpperCase = confirm('Click OK to add an uppercase character.');
  var confirmLowerCase = confirm('Click OK to add a lowercase character.');
  var confirmNumericChar = confirm('Click OK to add a numeric character.');


  if(
    confirmSpecialChar === false &&
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmNumericChar === false
  ){
    alert('You must select at last one Character type.');
    return;
  }


// Object to store user input
var userOption = {
  lenght: length,
  confirmSpecialChar: confirmSpecialChar,
  confirmUpperCase: confirmUpperCase,
  confirmLowerCase: confirmLowerCase, 
  confirmNumericChar: confirmNumericChar,
};
    
  return userOption;
}

  

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}













// Assignment Code
var generateBtn = document.querySelector("#generate");




  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 