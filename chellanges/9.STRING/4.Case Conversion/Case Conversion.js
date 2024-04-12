/*            *************************************************************
              *  Name of the challenge   : Case Conversion                *
              *  Developed for           : VHITECH Training Program       *
              *               Maintenance History                         *
              *  Developer               :                                *
              *  Creation date           :               Ticket No:       *
              ************************************************************ */
//DOM Declaration......
let inputString = document.getElementById("stringId");
let sowResult = document.getElementById("resultId");
let inputReset = document.getElementsByClassName("reset"); 

function convertString(){
  //This is input validation.....
  if(inputString.value === ''){
    alert("Please Enter the String...");
    return;
  }
  //This logics....
  let result = "";
  for (let i = 0; i < inputString.value.length; i++) {
      let character = inputString.value[i];
      if (character === character.toUpperCase()) {
          result += character.toLowerCase();
      } else {
          result += character.toUpperCase();
      }
  }
  //This is displaying Result....
  return sowResult.value = result;
}

//This is Page Reset....
function reset(){
  for(let index = 0 ; index < inputReset.length ; index++){
    inputReset[index].value = '';
  }
}
//*************************************************************************** */
// Declaration
// Screen date and time declaration.
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();
//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});


//Input declaration