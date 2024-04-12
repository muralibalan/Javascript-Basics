//DOM Decleration....
 let inputString = document.getElementById("stringId");
 let sowResult = document.getElementById("searchResult");
 let inputReset = document.getElementsByClassName("reset");
 
 //This is main function....findinig vowel first index...
 function stringFunction(){
  let splitInput;
  //This is input validation......
  (inputString.value === '') ? alert("Enter the String...") :

    splitInput = inputString.value.split('');
    let status = true;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let index = 0; index < splitInput.length; index++) {

        if (vowels.includes(splitInput[index])) {
            sowResult.value = index;
            status = false;
            break;
        }
    }
    //This is if no Vowels disply this ....
    if (status) {
        sowResult.value = "Not Found";
    }
 }

//This is Page reset....
function reset(){
  for(let index = 0; index < inputReset.length; index ++){
    inputReset[index].value = '';
  }
}
//***************************************************************************** */
// Screen date and time declaration.
let displayDate = new Date();
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


