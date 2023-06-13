// used https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt for prompt window
// used https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm for confirm window
// https://www.youtube.com/watch?v=x4HUaiazDes used to point myself in the right direction 
//Assignment Code
var generateBtn = document.querySelector("#generate");
// Prompt user for password 
// Length 8 to 128
// included lowercase, uppercase, numbers, special characters|
// Validate the input
// Generate password based on criteria


function generatePassword() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  length=parseInt(length)
  return "Generated password here"
}
prompt("How long would you like your password to be?");
confirm("Would you like there to be special characters, lowercase, uppercase, or numeric values? ")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
