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
//______________________________________________________________________________________________
//This is Dynomic Storing value for using array...
//DOM Declaration....
let inputName = document.getElementById("actorsNameArrayInput");
let resultShow = document.getElementById("arrayResultId");
let resetInput =document.getElementsByClassName("inputReset");
let actorsName = [];
let count = 0;

//This is Main Function....
function addActorsName(){
    if(inputName.value === ''){ 
        alert("Please Enter the Actor Name...");
        count = 0;
        return;
    }

    actorsName[count] = document.getElementById("actorsNameArrayInput").value;
    count++ ;
    inputName.value = '';
    document.getElementById("numberOfActorsAdded").innerHTML =  `No. of Actors added :${count}`;
    
}

//This is Print the Actors Name....
function printArrayActorNames(){
    let unOrder = '<ul>'
    for(let index = 0 ; index < count ; index++){
        unOrder += `<li>${actorsName[index]}</li>`;
    }
    unOrder += '</ul>'
    resultShow.innerHTML = unOrder;   
}

//This is Reset Page....
function resetArrayInputs(){
    document.getElementById("numberOfActorsAdded").innerHTML = `No. of Actors added :${0}`;
    resultShow.innerHTML = '';
}

//********************************************************************************************** */
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