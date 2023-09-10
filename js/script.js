// Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword() {
  //At the bottom of your function, return the finished generated password
  return 7;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
