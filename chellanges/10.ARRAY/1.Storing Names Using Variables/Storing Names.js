//DOM Declaration.....
let firstPerson = document.getElementById("actorNameInput1");
let secondPerson = document.getElementById("actorNameInput2");
let thirdPerson = document.getElementById("actorNameInput3");
let sowResult = document.getElementById("variableResultsId");
let inputReset = document.getElementsByClassName("reset");
function printNames(){
    //This is input checking....
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
function reset(){
    for(let index = 0 ; index < inputReset.length ; index++){
        inputReset[index].value = ''; 
        sowResult.innerHTML = '';
    }
    
}
//************************************************************************************************** */
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