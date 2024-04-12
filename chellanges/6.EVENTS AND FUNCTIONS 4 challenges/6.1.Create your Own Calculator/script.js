    //DOM Declaration
        let firstNumber = document.getElementById("firstNumber");
        let scoundNumber = document.getElementById("secondNumber");
        let result = document.getElementById("resultId");
        let errorMsg = "Please Enter the Number Both Input Box..."
    //  This is addition
    function addFunction(){
        if(firstNumber.value === '' || scoundNumber.value === ''){
          alert(errorMsg);
        }else{
          let add =parseInt(firstNumber.value) + parseInt(scoundNumber.value);
          result.value = add;
        }
      }
        // This is Subtraction
      function subFunction(){
        if(firstNumber.value === '' || scoundNumber.value === ''){
          alert(errorMsg);
        }else{
          let sub = parseInt(firstNumber.value) - parseInt(scoundNumber.value);
          result.value = sub;
        }  
      }
        // This is multiplication
      function mulFunction(){
        if(firstNumber.value === '' || scoundNumber.value === ''){
          alert(errorMsg);
        }else{
        let mul = parseInt(firstNumber.value) * parseInt(scoundNumber.value);
        result.value = mul;
        }
      }
        // This is divition
      function divideFunction(){
        if(firstNumber.value === '' || scoundNumber.value === ''){
          alert(errorMsg);
        }else{
        let div = parseInt(firstNumber.value) / parseInt(scoundNumber.value);
        result.value = div;
        }
      }
        //This is Reset Function
      function reset(){
        firstNumber.value = null;
        scoundNumber.value = null;
        result.value =null;
      }
  