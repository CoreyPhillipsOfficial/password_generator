// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {

  var combined = '';
  var password = '';

  var uppercase = 'ABCDEFG';
  var lowercase = 'abcdefg';
  var numbers = '0123456789';
  var specialcharacters = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';

  var passwordlength = prompt('Your password must be at least 8 characters and no longer than 128 characters. How many characters would you like?');

  if (passwordlength < 8 || passwordlength > 128) {
    alert('Your password must be at least 8 characters and no longer than 128 characters. Please try again.');
    return null;
  }

  if (isNaN(passwordlength)) {
    alert('You must choose a number.');
  }

  var includeuppercase = confirm('Do you want uppercase characters?');
  var includelowercase = confirm('Do you want lowercase characters?');
  var includenumbers = confirm('Do you want numbers?');
  var includespecialcharacters = confirm('Do you want special characters?');

  if (!includeuppercase && !includelowercase && !includenumbers && !includespecialcharacters) {
    alert('Please choose at least one!');
    return
  }

  function generatePassword() {
    if (includeuppercase) {
      combined += uppercase;
    }
    if (includelowercase) {
      combined += lowercase;
    }
    if (includenumbers) {
      combined += numbers;
    }
    if (includespecialcharacters) {
      combined += specialcharacters;
    }

    for (var count = 0; count < passwordlength; count++) {
      var random = Math.random();
      var index = Math.floor(random * combined.length);

      password += combined[index];
    }
    return password;
  }

  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password);
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
