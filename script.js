// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#password")

//Password Data
 let characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUZWXYZ0123456789!#$%&()*+-./:;<=>?@[\^_`{|}~";' ;
 let passwordLength = 8  ;
 let passwordValue = '' ;

 //Create Password

 var writePassword = () => {
   passwordValue= "" ;

   for ( let i = 0; i < passwordLength; i++) {
     let number = Math.floor(Math.random() * characters.length) ;
     passwordValue += characters.substring(number, number + 1) ;
   }
   password.value = passwordValue ;

 }
 //Event Listener
 generateBtn.addEventListener("click", writePassword);



function generatePassword () {
  
}




// Write password to the #password input
function writePassword(){
  var password = generatePassword("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

