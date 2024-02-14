// Array of special characters to be included in password
var specialCharacters = [
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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength= parseInt(window.prompt("Enter a number between 8 and 128 for your password length" ));

  if (!(passwordLength >=8 && passwordLength <=128 )) {
  window.alert("Character length should be between 8 and 128");
  return null;
  }
  
  var lowercase= window.confirm("Do you want to include lowercase letters?");
  var uppercase= window.confirm("Do you want to include uppercase letters?");
  var numbers= window.confirm("Do you want to include numbers?");
  var special= window.confirm("Do you want to include special characters?");

  if(!lowercase && !uppercase && !numbers && !special){
  window.alert("Password must have at least one character type");
  return null;

  }
  var optionChoices={passwordLength, lowercase, uppercase, numbers, special};
  return optionChoices;


}


// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  
}

// Function to generate password with user input
function generatePassword() {
  var selectedOptions= getPasswordOptions();
  if(!selectedOptions){
  return" ";}

  //Js objects format is used here.(for my info) and the array method called concat().
  var characters =" ";
  if(selectedOptions.lowercase) characters = characters.concat(lowerCasedCharacters);
  if(selectedOptions.uppercase) characters = characters.concat(upperCasedCharacters);
  if(selectedOptions.numbers) characters = characters.concat(numericCharacters);
  if(selectedOptions.special) characters = characters.concat(specialCharacters);
  // using the while loop
  var password=" ";
  let i=0;
  while (i < selectedOptions.passwordLength) {
    password += getRandom(characters);
    i++;
  }
  return password;


  

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);