// DOM Declaration
let first_Number = document.getElementById("firstNumber");
let second_Number = document.getElementById("secondNumber");
let inputs = document.getElementById("resultId");
//This is Main Funtion for number itrate.....
function whileLoop(){
    if(first_Number.value === '' || second_Number.value === ''){
        alert("Enter the Number are Both...")
        return;
    } 
    let res = "";
    let index = first_Number.value;
    while(index <= second_Number.value ){
      res +=`${index} \n`
      inputs.value = res;
      index++;
    } 
}
//***************************************************************************** */
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

