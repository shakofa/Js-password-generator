//Password variable values
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
'z'
];

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
'.'
];


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

 
  if( length < 8 || length > 128){
    //Start user input prompts
    alert('password length must be more than 8 and less than 128.');
    return;

  }


  //User input variables that store boolean for inclusion of numeric and special Charecters and uppercase and lowercase letters
  var confirmSpecialChar = confirm('Will this contain a special character?');
  var confirmUpperCase = confirm('Will this contain an uppercase letter?');
  var confirmLowerCase = confirm('Will this contain a lowercase letter?');
  var confirmNumericChar = confirm('Will this contain a numeric character?');


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



//Function for generating password
function GeneratPass(){

  var choices = passwordOptions()


  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters for password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen characters.
  var guaranteedCharacters = [];


  // Conditional statements that add arrays of characters based on the criteria into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters

  if (choices.confirmSpecialChar){
    possibleCharacters = possibleCharacters.concat(specialChar);
    guaranteedCharacters.push(getRandom(specialChar));
  }


  if (choices.confirmUpperCase){
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }


  if (choices.confirmLowerCase){
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }


  if (choices.confirmNumericChar){
    possibleCharacters = possibleCharacters.concat(numericChar);
    guaranteedCharacters.push(getRandom(numericChar));
  }


  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < choices.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = GeneratPass();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


 