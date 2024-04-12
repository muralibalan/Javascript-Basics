  //Your Code statements
  let firstNumber = 50;
  let secondNumber = 100;
 document.getElementById("beforeSwap").innerHTML = "firstNumber is ="+firstNumber +"<br>"+ "SecondNumber is = " +secondNumber;

   //without temp variable 
   firstNumber = firstNumber + secondNumber ;
   secondNumber = firstNumber - secondNumber ;
   firstNumber = firstNumber - secondNumber ;
   document.getElementById("displayResult").innerHTML = "firstNumber is ="+firstNumber +"<br>"+ "SecondNumber is = " +secondNumber;