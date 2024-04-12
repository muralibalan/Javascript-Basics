  //  DOM Declaration
  let first_Number = document.getElementById("firstNumber");
  let second_Number = document.getElementById("secondNumber");
  let loopSelect = document.getElementById("selectId");
  let forLoop = document.getElementById("showFor");
  let whileLoop = document.getElementById("showWhile");
  let doWhileLoop = document.getElementById("showDowhile");
  let inBox = document.getElementsByClassName("reset");
  let res = '';
  
  //This is Find Armstrong Number.....
  function findArmstrong(){
    //input Checking....
    if(first_Number.value === '' || second_Number.value === ''){
      alert("Please Enter the Number....")
    }else{
      let a = first_Number.valueAsNumber;
      let b = second_Number.valueAsNumber;
      switch(loopSelect.value){
        case "for":{
                    res ='';
                    for(let i = a ; i <= b ; i++){
                        Armstrong(i,loopSelect.value)
                    }
                    break;
        }
        case "while":{
                      res = '';
                      let i = a;
                      while(i <= b){
                        Armstrong(i,loopSelect.value)
                        i++;
                      }
                      break;
        }
        case "doWhile":{
                      res = '';
                      let i = a;
                      do{
                        Armstrong(i,loopSelect.value)
                        i++;
                      }while(i <= b);
                      break;
        }
      }
    }
  }

// This is Reset Page....
function reset(){
    for(let i = 0 ; i <= inBox.length ; i++){
    inBox[i].value = '';
    }
}

//This is Find Armstrong Number Function.....
  function Armstrong(i,loop){
        const digits = i.toString().split('');
        console.log(digits)
        const order = digits.length;
        const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), order), 0);
        if (sum === i) {
            res +=`${i} is an Armstrong Number \n`    
        }
        //This is displaying this Result.....
        loop === "for" ? (forLoop.value = res, whileLoop.value = '', doWhileLoop.value = '') :
        loop === "while" ? (forLoop.value = '', whileLoop.value = res, doWhileLoop.value = '') :
         loop === "doWhile" ? ( forLoop.value = '', whileLoop.value = '', doWhileLoop.value = res ) : null;
  }
 
//******************************************************************* */
//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});

     //copy to clipboard
const copyText = document.querySelector("#copy");
      copyText.addEventListener("click", () => {
        navigator.clipboard.writeText(
          document.querySelector("#successCode").value
        );
        copyText.textContent = "copied";
        setTimeout(() => {
          copyText.innerHTML = `<span>&#128203; </span>copy`;
        }, 2000);
      });
