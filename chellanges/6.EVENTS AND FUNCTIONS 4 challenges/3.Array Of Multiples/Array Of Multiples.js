/*            *************************************************************
              *  Name of the challenge   : Array Of Multiples               *
              *  Developed for           : VHITECH Training Program         *
              *               Maintenance History                          *
              *  Developer               :                                  *
              *  Creation date           :               Ticket No:        *
              ************************************************************ */


// Declaration
    //DOM Declaration
    let firstNum = document.getElementById("firstNumber")
    let scoundNum = document.getElementById("secondNumber");
    let result = document.getElementById("resultId");
    let makeArr = [];
    let emptyInput = document.getElementsByClassName("reset");

    //This is My Coding Logics make array...............
    function calculate(){
      if(firstNum.value === '' || scoundNum.value === ''){
        alert("Please Enter the Number Both input Box...")
      }
      else{
        for(let index = 1 ; index <= parseInt(scoundNum.value) ; index ++){
          makeArr.push(parseInt(firstNum.value) * index)
        }
        result.value = makeArr;
      }
    }

    //This is Reseting Page............
    function reSet(){
      for(let i = 0 ; i<emptyInput.length ; i++){
        emptyInput[i].value = null;
      }
    }

//****************************************************************** *
// Screen date and time declaration.
let displayDate = new Date();
//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});
//Input declaration

  // //This is My Coding Logics...............
  //   function calculate(fNum,sNum){
  //     let makeArr = [];
  //     for(let i = 1 ; i < parseInt(sNum) ; i++){
  //       makeArr.push(parseInt(fNum) * i)
  //     }
  //     document.getElementById("resultId").value = makeArr;
  //   }
  // //This is Reseting function
  //   function reSet(){
  //     let Inputs = document.getElementsByClassName("reset");
  //     for(let i = 0 ; i<Inputs.length ; i++){
  //       Inputs[i].value = null;
  //     }
  //   }