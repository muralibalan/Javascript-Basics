/*            *************************************************************
              *  Name of the challenge   : Percentage Calculation         *
              *  Developed for           : VHITECH Training Program       *
              *               Maintenance History                         *
              *  Developer               :                                *
              *  Creation date           :               Ticket No:       *
              ************************************************************ */


// Declaration

      //DOM Declaration
      let firstNum = document.getElementById("firstNumber");
      let scoundNum = document.getElementById("secondNumber");
      let result = document.getElementById("resultId");
      let sum;
      let emptyInput = document.getElementsByClassName("reSet");

      //This is My code Logics main function******
      function calculate(){
        if(firstNum.value === ''|| scoundNum.value === ''){
          alert("Please Enter the Number all input box...")
        }else{
          sum = parseInt(scoundNum.value) / parseInt(firstNum.value) *100;
          result.value = sum;
        }
      }
      //Reset Page
      function reset(){
        for(let i = 0 ; i< emptyInput.length ; i++){
          emptyInput[i].value = null;
        }
      }





// Screen date and time declaration.
let displayDate = new Date();

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

 //Modal
 const toggleSuccessModal = () => successModal.classList.toggle("active");
 const toggleErrorModal = () => errorModal.classList.toggle("active");
 window.addEventListener("click", function (event) {
   if (event.target === successModal)
     successModal.classList.remove("active");
   if (event.target === errorModal) errorModal.classList.remove("active");
 });

