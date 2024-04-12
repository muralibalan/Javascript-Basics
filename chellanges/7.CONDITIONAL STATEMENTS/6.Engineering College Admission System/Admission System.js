//DOM Declaration.....Inputs....
    let mathMark = document.getElementById("maths");
    let physicsMark = document.getElementById("physics");
    let chemistryMark = document.getElementById("chemistry");
    let cutOff = document.getElementById("cutoff");
    let result = document.getElementById("result");
    let input = document.getElementsByClassName("reset");
    let sum;

//This is Main function find eligibility....
function findCutOff(){
 //This is Validation....
    const isInvalid = (
        mathMark.value === '' ||
        physicsMark.value === '' ||
        chemistryMark.value === ''
    );
    const isOutOf50 = (
        physicsMark.valueAsNumber > 50 || chemistryMark.valueAsNumber > 50   
    ); 
    if (isInvalid) {
        alert("Please Enter Your Marks...");
        return;
    }
    if (isOutOf50) {
        alert("Please Enter Physics and chemistry marks out 50");
        return;
    } 

//Adding all Marks and insert cutoff marks input box
     sum = mathMark.valueAsNumber + physicsMark.valueAsNumber + chemistryMark.valueAsNumber;
     cutOff.value = sum;

//Eligibility checking using switch case using.....
    if(sum >=195){
        result.innerHTML = "Level 1 Government Engineering College";
        return;
    }
    if(sum >=190 && sum < 195){
        result.innerHTML = "Level 2 Government Engineering College";
        return;
    }
    if(sum >=185 && sum < 190){
        result.innerHTML = "Level 1 Private Engineering College";
        return;
    }
    if(sum >=180 && sum < 185){
        result.innerHTML = "Level 2 Private Engineering College";
    }
    result.innerHTML = "Not Eligible For Any College";
    
}
//This is Reset Page......
function reset(){
    for(let i = 0 ; i <= input.length ; i++){
        input[i].value = null;
        result.innerHTML = '';
    }
}
//*********************************************************************************** */
//Date and Time Declaration
let displayDate = new Date();
document.getElementById("datOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timOutput").innerHTML = displayDate.toLocaleTimeString();
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
navigator.clipboard.writeText(document.querySelector("#successCode").value);
copyText.textContent = "copied";
setTimeout(() => {
copyText.innerHTML = `<span>&#128203; </span>copy`;
}, 2000);
});

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
if (event.target === successModal) successModal.classList.remove("active");
if (event.target === errorModal) errorModal.classList.remove("active");
});
//Code Logic
