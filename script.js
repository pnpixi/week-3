// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max);
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}


function generatePassword() {

while (true) {

  var textBox = prompt("How long do you want your password to be?")

  if (textBox === null) {
    return
  }

  var passwordLength = parseInt(textBox)

  if (isNaN(passwordLength)) {
    alert("Not a nummber ):")
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Password Length must be between 8 to 128 characters")
  } else {
    break
  }
}

var usersAddedNumbers = confirm("Would you like to add Numbers to your Password?")
var usersLowerCase = confirm("Would you like to add LowerCase Letters to your Password?")
var usersUpperCase = confirm("Would you like to add UpperCase Letters to your Password?")
var usersSymbols = confirm("Would you like to add Symbols to your Password?")

var numberopt = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowerCaseOpt = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseOpt = []
var symbolopt = ["!", "@", "#", "$", "&", "*"]

var Cart = []

for (var i = 0; i < lowerCaseOpt.length; i++) {
  uppercaseOpt[i] = lowerCaseOpt[i].toUpperCase()
}

if (usersAddedNumbers === true) {
  Cart.push(numberopt);
}

if (usersLowerCase === true) {
  Cart.push(lowerCaseOpt);
}

if (usersUpperCase === true) {
  Cart.push(uppercaseOpt);
}

if (usersSymbols === true) {
  Cart.push(symbolopt);
}

var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
  var randomArray = getRandomItem(Cart)
  var randomChar = getRandomItem(randomArray)
  generatedPassword += randomChar
}

return generatedPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (!password) {
    return
  }

  if (password) {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
