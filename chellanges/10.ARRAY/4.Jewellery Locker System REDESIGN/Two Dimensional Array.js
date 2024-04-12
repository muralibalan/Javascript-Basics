 //DOM Declaration........................................
 let rowInput = document.getElementById("rowInput");
 let columnInput = document.getElementById("columnInput");
 let count = document.getElementById("sovereignInput");
 let displyValue = document.getElementById("lockerPreview");
 let inputBox = document.getElementsByClassName("reset");
 let locker = [];

 //This is call this function initalzation row and column...
 setInitalValues();

//set Inital value zero declaration function................
 function setInitalValues(){
    for(let rowCount = 0 ; rowCount < 5 ; rowCount ++){

        let innerLocker = [];
        for(let columnCount = 0 ; columnCount < 3 ;columnCount ++){
            innerLocker.push(0);
        }

        locker.push(innerLocker)
    }
    //call this function....
    displayValueFunction();
 }

//This is display inital value..............................
 function displayValueFunction(){
    let resultValue = '';
    for(let row = 0 ; row < 5 ; row ++){
        for(let column = 0 ; column < 3 ; column ++){
            resultValue += '<div>'+ locker[row][column] +'</div>';
        }
    }
    displyValue.innerHTML = resultValue;
 }

//This is Put the value function..............................
 function putFunction(){
    if(rowInput.value ===''||columnInput.value ==='' || count.value === ''){
        alert("Please Enter Row, Column and sovereign...")
        return;

    }

    if(rowInput.valueAsNumber >= 5 || rowInput.valueAsNumber < 0 || columnInput.valueAsNumber >= 3 || columnInput.valueAsNumber < 0){
        alert("Please Enter Row between 0 to 5 and column between 0 to 3...")
        return;
    }

    locker[rowInput.valueAsNumber][columnInput.valueAsNumber] = count.valueAsNumber;
    displayValueFunction();
    count.value = '';
 }

//This is Get the value Funtion...............................
 function getFunction(){
    if(locker[rowInput.valueAsNumber][columnInput.valueAsNumber] === 0){
        document.getElementById("resultInput").value = "No Found";
        return;
    }

    document.getElementById("resultInput").value = locker[rowInput.valueAsNumber][columnInput.valueAsNumber];
    locker[rowInput.valueAsNumber][columnInput.valueAsNumber] = 0;
    displayValueFunction();
 }

 //This is reset Page........................................
 function resetFunction(){
    locker[rowInput.valueAsNumber][columnInput.valueAsNumber] = 0;
    displayValueFunction();
    for(let index = 0 ; index < inputBox.length ; index++){
        inputBox[index].value = '';
    }
 }

//******************************************************************************************** */
 //Date and time declaration
 let displayDate = new Date();

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