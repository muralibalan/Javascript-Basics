//DOM Decleration...
  let inputString = document.getElementById("stringId");
  let sowResult = document.getElementById("searchResult");
  let inputBox = document.getElementsByClassName("reset");

  //This is main function....
  function stringFunction(){
    //This is input validation.....
    let splitString = '';
    if(inputString.value === ''){
      alert("Please Enter the String....");
      return;
    }

    //This is sowResult.value = inputString.value.split('');
    splitString = inputString.value.split('');
    let result ='';
    for(let index = 0 ; index < splitString.length ; index++){
      result += `${splitString[index]} \n`;
    }
    sowResult.value = result;
  }
  
  //This is Reset Page.....
  function reset(){
    for(let index = 0 ; index < inputBox.length ; index ++){
      inputBox[index].value = '';
    }
  }
//****************************************************************************** */
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


