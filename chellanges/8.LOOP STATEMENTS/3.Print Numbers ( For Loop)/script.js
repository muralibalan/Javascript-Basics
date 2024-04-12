 //Dom Declaration....
 let first_Number = document.getElementById("firstNumber");
 let second_Number = document.getElementById("secondNumber");
 let inputs = document.getElementById("resultId");
 //This is Main Function.....
 function forLoop() {
    if(first_Number.value === '' || second_Number.value === ''){
        alert("Please Enter the Number are Both...");
        return;
    }

    let res = "";
    for (let index = first_Number.value ; index <= second_Number.value ; index++){
        res +=`${index} \n` 
        inputs.value = res;
    }
    
 }

 