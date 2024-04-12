    //DOM Declaration.....
    let firstNumber = document.getElementById("fNum");
    let scoundNumber = document.getElementById("sNum");
    let thirdNumber = document.getElementById("tNum");
    let result = document.getElementById("resultId");
    let sum;

    function add(){
        if(firstNumber.value === '' || scoundNumber.value === '' || thirdNumber.value === ''){
            alert("Please Enter the Number all Inputs...")
        }
        else{
        sum = parseInt(firstNumber.value) + parseInt(scoundNumber.value) + parseInt(thirdNumber.value) ;
        result.value = sum;
        } 
    }
