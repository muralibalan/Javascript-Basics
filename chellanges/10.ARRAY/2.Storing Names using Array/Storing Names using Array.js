//DOM Declaration.....
let firstPerson = document.getElementById("actorNameInput1");
let secondPerson = document.getElementById("actorNameInput2");
let thirdPerson = document.getElementById("actorNameInput3");
let sowResult = document.getElementById("variableResultsId");
let inputReset = document.getElementsByClassName("reset");
function printActorNames(){
    //This is input validation....
    if(firstPerson.value === '' || secondPerson.value === '' || thirdPerson.value === ''){
        alert('Enter the all feilds actors Names...');
        return;
    }
    sowResult.innerHTML = `
    <ul>
        <li>${firstPerson.value}</li>
        <li>${secondPerson.value}</li>
        <li>${thirdPerson.value}</li>
    </ul>`
}

//This is Page Reset.....
function resetVariableInputs(){
    for(let index = 0 ; index < inputReset.length ; index++){
        inputReset[index].value = ''; 
        sowResult.innerHTML = '';
    }
}
//-----------------------------------------------------------------------------------------------
//This is Using Array.....
let actorsName = [];
actorsName[0] = document.getElementById("actorNameArrayInput1");
actorsName[1] = document.getElementById("actorNameArrayInput2");
actorsName[2] = document.getElementById("actorNameArrayInput3");
let inputArrReset = document.getElementsByClassName("resetArray");
let sowArrayResult = document.getElementById("arrayResultId");

function printArrayActorNames(){
    //This is input Validation....
    if(actorsName[0].value === '' || actorsName[1].value === '' || actorsName[2].value === ''){
        alert('Enter the all feilds actors Names...');
        return;
    }
    sowArrayResult.innerHTML = `
    <ul>
        <li>${actorsName[0].value}</li>
        <li>${actorsName[1].value}</li>
        <li>${actorsName[2].value}</li>
    </ul>`
}

//This is Page Reset.....
function resetArrayInputs(){
    for(let index = 0 ; index < inputArrReset.length ; index++){
        inputArrReset[index].value = ''; 
        sowArrayResult.innerHTML = '';
    }
}

//************************************************************************************************** */

//Date and Time Declaration
let displayDate = new Date();
document.getElementById("datOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timOutput").innerHTML = displayDate.toLocaleTimeString();
//Code Logic
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