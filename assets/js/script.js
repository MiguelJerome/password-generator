
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword()
  {
    var counterValidateOneTypeMinimum = 0;

    while (counterValidateOneTypeMinimum ==0)
    {
         var MINIMUN_LENGHT = 8;
         var MAXIMUM_LENGHT = 128;
         var YES = 1;
         var NO = 0;
         var stringLowercase = "abcdefghijklmnopqrstuvwxyz";
         var stringUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
         var stringNumeric = "0123456789";
         var stringSpecialCharacter = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
         var string = "";
        var passwordNew = "";

        


         // Choosing the password lenght
         do
         {
               var answerPasswordLenght = window.prompt("Please choose your password lenght(min of 8 characters and no more than 128 characters) :");
          
          console.log(answerPasswordLenght.length);
         
   
         }while(answerPasswordLenght < MINIMUN_LENGHT || answerPasswordLenght > MAXIMUM_LENGHT);

         console.log("I choose  to have a password lenght of :"+answerPasswordLenght);
         
         // Choosing to have some Lowercase for the password
         do
         {
               var answerLowercase = window.prompt("If you want to include some lowercase (Enter 1) or if not (Enter 0) ) :");
    
         }while(answerLowercase  != NO && answerLowercase != YES);

         if(answerLowercase == YES )
         {
         console.log("I choose to add some lowercase in my password");
         string = string + stringLowercase;
         ++counterValidateOneTypeMinimum;
         }
         else
        {
            console.log("I choose not to add some lowercase in my password");
        }

         // Choosing to have some Uppercase for the password
               do
               {
                     var answerUppercase = window.prompt("If you want to include some uppercase (Enter 1) or if not (Enter 0) ) :");
          
               }while(answerUppercase  != NO && answerUppercase != YES);
      
               if(answerUppercase == YES )
               {
               console.log("I choose to add some uppercase in my password");
               string = string + stringUppercase;
               ++counterValidateOneTypeMinimum;
               }
               else
              {
                  console.log("I choose not to add some uppercase in my password");
              }

         // Choosing to some numeric for the password
         do
         {
               var answerNumeric = window.prompt("If you want to include some numeric (Enter 1) or if not (Enter 0) ) :");
    
         }while(answerNumeric  != NO && answerNumeric != YES);

         if(answerNumeric == YES )
         {
         console.log("I choose to add some numeric in my password");
         string = string + stringNumeric;
         ++counterValidateOneTypeMinimum;
         }
         else
        {
            console.log("I choose not to add some numeric in my password");
        }

          // Choosing to some special characters for the password
                 do
                 {
                       var answerSpecialCharacters = window.prompt("If you want to include some special characters (Enter 1) or if not (Enter 0) ) :");
            
                 }while(answerSpecialCharacters  != NO && answerSpecialCharacters != YES);
        
                 if(answerSpecialCharacters == YES )
                 {
                 console.log("I choose to add some special characters in my password");
                 string = string + stringSpecialCharacter;
                 ++counterValidateOneTypeMinimum;
                 }
                 else
                {
                    console.log("I choose not to add some special characters in my password");
                }
     }

            // generate the password
                for(var i = 0; i < answerPasswordLenght; i++)
                {
                    var randomNumber = Math.floor(Math.random() * string.length);
                    passwordNew += string.substring(randomNumber,randomNumber +1);
                }

                return passwordNew;

 
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);