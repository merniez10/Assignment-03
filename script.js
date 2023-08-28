// Assignment code here
const numberBank = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialCharactersBank = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_', '.',
];
const lowerCaseBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCaseBank = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']




function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like your password to be?")
  var number = window.confirm("Would you like numbers in your password?")
  var specialCharacters = window.confirm("Do you want any special characters in your password")
  var upperCase = window.confirm("Do you want uppercase letters in your password?")
  var lowerCase = window.confirm("Do you want lowercase letters in your password?")
  console.log(number, specialCharacters, upperCase, lowerCase)
  var validCharacters = []
  if (number === true) {
    validCharacters = validCharacters.concat(numberBank)
    console.log(validCharacters)
  }
  if (specialCharacters === true) {
    validCharacters = validCharacters.concat(specialCharactersBank)
  }
  if (upperCase === true) {
    validCharacters = validCharacters.concat(upperCaseBank)
  }
  if (lowerCase === true) {
    validCharacters = validCharacters.concat(lowerCaseBank)
  }
  console.log(validCharacters)
  console.log(typeof validCharacters)


var passwordPossible = validCharacters.join("")

var shuffledPassword = passwordPossible.split('').sort(function(){return 0.5-Math.random()}).join('');

const finalPoint = parseInt(passwordLength);
const shortenPassword = shuffledPassword.slice(0, finalPoint); // 4, 5, 6, 7, etc for finalPoint


  return shortenPassword
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
