
        //DOM Declaration inputs....
 let personAge = document.getElementById("ageId");
 let result = document.getElementById("checkId");
 let inputs = document.getElementsByClassName("reset");
 let male = document.getElementById("maleId");
 let female = document.getElementById("femaleId");

 //This is main Function......
 function findingEligible(){

        // This is Validation of inputs....
        let isAgeValid = personAge.value !== '' ;
        let isGenderValid = male.checked || female.checked;
        let ageLimitValid = personAge.value >= 0 && personAge.value <=  99;
        (isAgeValid && isGenderValid) || alert("Please Enter Your Age and Gender...");
         ageLimitValid || alert("Please Enter age above '0' and below '99'....");

        // This is Code Logics and Results....
        let resultMessage = 
            (isGenderValid && (female.checked && personAge.value > 18) ? "She is Eligible for marriage" : 
            (isGenderValid && male.checked && personAge.value > 21 ? "He is Eligible for marriage" :
            (isAgeValid && isGenderValid)?"Not Eligible for marriage" : ""));

        // This is Results...
        result.value = resultMessage;
 } 
// This is Reset Pages...
         function reset(){
             for( let index = 0 ; index < inputs.length ; index++){
                 inputs[index].value = '';
             }
             male.checked = false;
             female.checked = false;
         }
 //**************************************************************************** */