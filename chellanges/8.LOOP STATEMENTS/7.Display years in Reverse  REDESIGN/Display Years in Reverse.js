//DOM Declaration....
let fromDate = document.getElementById("firstDateId");
let toDate = document.getElementById("secondDateId");

let reverseFor = document.getElementById("reverseId");
let reverseWhile = document.getElementById("whilereverseId");
let reverseDoWhile = document.getElementById("dowhilereverseId");

let leapFor = document.getElementById("leapId");
let leapWhile = document.getElementById("whileleapId");
let leapDoWhile = document.getElementById("dowhileleapId");

let countLeap = document.getElementById("countLeap");
let countLeapWhile = document.getElementById("whilecountLeap");
let countLeapDoWhile = document.getElementById("dowhilecountLeap");

let loopSelected =document.getElementById("selectId");
let resetPage = document.getElementsByClassName("reset");

let result = '';
let leapResult = '';
let leapYear = 0;

//This is Main Funtion......
function reverseYear(){
 if(fromDate.value === '' || toDate.value === ''){
  alert("Please Enter From Date and To Date...");
  return;
 }
 if(parseInt(fromDate.value) > parseInt(toDate.value)){
  alert("Please Enter Second date must be Greater than First Date....");
  return;
 }
 if(parseInt(fromDate.value) < 1900 || parseInt(toDate.value) > 2500){
  alert("Plese Enter above '1900' and below '2500'....");
  return;
 }
//This is convert the value....
  let firstDate = fromDate.valueAsDate.getFullYear();
  let secondDate = toDate.valueAsDate.getFullYear();
  switch(true){
    case (loopSelected.value === "for"):{
        //This is Reversing Years,find leap years and leap count using for Loop....
        result = '';
        leapResult = '';
        leapYear = 0; 
        for( let index = secondDate ; index >= firstDate ; index -- ){
            reverseFindLeap(index,loopSelected.value)
        }
        break;
    }
    case(loopSelected.value === "while"):{
        //This is Reversing Years using while Loop....
        result = '';
        leapResult = '';
        leapYear = 0;
        let index = secondDate ;
        while( index >= firstDate ){
            reverseFindLeap(index,loopSelected.value);
            index --;
        }
        break;
    }
    case (loopSelected.value ==="doWhile"):{
        //This is Reversing Years using Do While Loop....
        result = '';
        leapResult = '';
        leapYear = 0;
        let index = secondDate ;
        do{
            reverseFindLeap(index,loopSelected.value);
            index --;
        }while(  index >= firstDate );
        break;
    }
  } 
}
//This is reset page......
function reset(){
  for(let index = 0 ; index < resetPage.length ; index ++){
    resetPage[index].value = '';
  }
}

//This is year reverse and find leap year and leap count function....
function reverseFindLeap(index,loop){
  //This is logic for leap year.... and count increament...
  result += `${index} \n`;
  if(index % 4 === 0 && index % 100 !== 0 || index % 400 === 0 ){
    leapResult += `${index} \n`;
    leapYear++;
  }

//This is Displayind Results.......
  loop === "for" ? (leapFor.value = leapResult, countLeap.value = leapYear, leapWhile.value = '',
    countLeapWhile.value = '', leapDoWhile.value = '', countLeapDoWhile.value = '',
     reverseFor.value = result,  reverseDoWhile.value = '', reverseWhile.value = '') : 

  loop === "while" ? ( leapFor.value = '', countLeap.value = '', leapWhile.value = leapResult,
   countLeapWhile.value = leapYear, leapDoWhile.value = '', countLeapDoWhile.value = '', 
   reverseFor.value = '', reverseDoWhile.value = '', reverseWhile.value = result) : 
    
  loop === "doWhile" ? ( leapFor.value = '', countLeap.value = '', leapWhile.value = '',
    countLeapWhile.value = '', leapDoWhile.value = leapResult, countLeapDoWhile.value = leapYear,
    reverseFor.value = '', reverseDoWhile.value = result, reverseWhile.value = '') : null;
}


//**************************************************************** */
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

