// used https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt for prompt window
// used https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm for confirm window
// https://www.youtube.com/watch?v=x4HUaiazDes used to point myself in the right direction
//Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt(
    "Enter the length of the password (between 8 and 128 characters):"
  );
  // parseInt = turns a string into an interger
  length = parseInt(length);
  return "Generated password here";
}
// NaN = Not a Number
if (isNaN(length) || length < 8 || length > 128) {
  alert("Invalid Password Length. Enter a number between 8 and 128");
  return;
}

const includeLowercase = confirm("Include lowercase characters?");
const includeUppercase = confirm("Include uppercase characters?");
const includeNumeric = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial){
  alert("Please select at least one character to type");
  return;
}

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

var availableChars = "";
if (lowercaseChars) {
  availableChars += lowercaseChars;
}
if (uppercaseChars) {
  availableChars += uppercaseChars;
}
if (numericChars) {
  availableChars += numericChars;
}
if (specialChars) {
  availableChars += specialChars;
}

let password = "";
for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * availableChars.length);
  password += availableChars[randomIndex];
}

return password;

// prompt("How long would you like your password to be?");
// confirm("Would you like there to be special characters, lowercase, uppercase, or numeric values? ")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
