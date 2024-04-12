
    //DOM Declaration
         let firstNum = document.getElementById("firstNumber");
         let scoundNum = document.getElementById("secondNumber");
         let result = document.getElementById("resultId");
         let mouseOvers = document.getElementById("onMouseOver");

     //This Calculate the two Numbers using onClick Event
     function calculate(){
        if(firstNum.value === '' || scoundNum.value === ''){
            alert("Please Enter the Number...")
        }else{
         let addNumber = parseInt(firstNum.value) + parseInt(scoundNum.value);
         result.value = addNumber; 
        }
     }
     //This is mouseOver event
     function mouseOver(){
         mouseOvers.style.color ="red";
     }
     //This is mouseOut event
     function mouseOut(){
         mouseOvers.style.color = "green";
     }
     //This is Onclick event using alert box
     function displayMessage(){
         alert("You Clicked that Line!!!")
     }

//DOM DECLARATION
//Constant declaration
//error declaration
//Main function
//reset

//****************************************************************************