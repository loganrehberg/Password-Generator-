// used https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt for prompt window
// used https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm for confirm window
// https://www.youtube.com/watch?v=x4HUaiazDes used to point myself in the right direction
//Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword() {
  let length = prompt(
    "Enter the length of the password (between 8 and 128 characters):"
  );
  // parseInt = turns a string into an interger
  length = parseInt(length);

  // NaN = Not a Number
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid Password Length. Enter a number between 8 and 128");
    return;
  }

  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters?");

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert("Please select at least one character to type");
    return;
  }

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let availableChars = "";
  if (includeLowercase) {
    availableChars += lowercaseChars;
  }

  if (includeUppercase) {
    availableChars += uppercaseChars;
  }

  if (includeNumeric) {
    availableChars += numericChars;
  }

  if (includeSpecial) {
    availableChars += specialChars;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
