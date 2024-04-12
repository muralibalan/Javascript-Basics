// DOM Declaratioin...
let numberInput = document.getElementById("numberId");
let loopSelect = document.getElementById("selectId");
let showFor = document.getElementById("showFor");
let showWhile = document.getElementById("showWhile");
let showDoWhile = document.getElementById("showDowhile");
let inputBox = document.getElementsByClassName("reset");
//This is main Funtion.....
function makeNumberPattern(){
  //input checking ........
  if(numberInput.value === ''){
    alert("Please Enter the Number then Select..... ");
  }else if(numberInput.valueAsNumber > 10 || numberInput.valueAsNumber <=0){
    alert("Please Enter the Number above '0' below '10'....");
  }else{
    let rows = numberInput.valueAsNumber;
    switch(true){
      //This is For Loop using.....
      case (loopSelect.value === "for"):{
                let outPut = '';
                for(let index = 1 ; index <= rows ; index ++){
                    for(let space = rows ; space >= index ; space --){
                        outPut += ' ';
                    }
                    for(let text =1 ; text <= index ; text ++){

                        (text === 10)? outPut += 0 : outPut += text;
                    }
                    for(let font = index - 1 ; font >= 1 ; font --){
                        outPut += font;
                    }
                    outPut += '\n';
                }
                for(let downIndex = rows-1 ; downIndex >= 1 ; downIndex --){
                    for(let downSpace = rows ; downSpace >= downIndex ; downSpace --){
                        outPut += ' ';
                    }
                    for(let downText =1 ; downText <= downIndex ; downText ++){
                        outPut += downText;
                    }
                    for(let downFont = downIndex -1 ; downFont >= 1 ; downFont --){
                        outPut += downFont;
                    }
                    outPut += '\n';
                }
                showFor.value = outPut;
                showWhile.value = '';
                showDoWhile.value = '';
                break;
      }
      //This is while Loop Using......
      case (loopSelect.value === "while"):{
              let outPut = '';
              let index = 1 ;
              while( index <= rows ){
                  let space = rows ;
                  while( space >= index){
                      outPut += ' ';
                      space --;
                  }
                  let text =1 ;
                  while( text <= index ){
                      // outPut += text;
                      (text === 10)? outPut += 0 : outPut += text;
                      text ++;
                  }
                  let font = index - 1 ;
                  while( font >= 1 ){
                      outPut += font;
                      font --;
                  }
                  outPut += '\n';
                  index ++;
              }
              //down pyremid....
              let downIndex = rows-1 ;
              while( downIndex >= 1 ){
                  let downSpace = rows ;
                  while( downSpace >= downIndex ){
                      outPut += ' ';
                      downSpace --;
                  }
                  let downText =1 ;
                  while( downText <= downIndex ){
                      outPut += downText;
                      downText ++;
                  }
                  let downFont = downIndex -1 ;
                  while( downFont >= 1 ){
                      outPut += downFont;
                      downFont --
                  }
                  outPut += '\n';
                  downIndex --;
              }
              showWhile.value = outPut;
              showFor.value = '';
              showDoWhile.value = '';
              break;
      }
      //This is Do While Loop Using....
      case (loopSelect.value === "doWhile"):{
              let outPut = '';
              let index = 1 ;
              do{
                  for(let space = rows ; space >= index ; space --){
                      outPut += ' ';
                  }
                  for(let text =1 ; text <= index ; text ++){

                      (text === 10)? outPut += 0 : outPut += text;
                  }
                  for(let font = index - 1 ; font >= 1 ; font --){
                      outPut += font;
                  }
                  outPut += '\n';
                  index ++;
              }while( index <= rows );

              let downIndex = rows-1 ;
               do{
                  for(let downSpace = rows ; downSpace >= downIndex ; downSpace --){
                      outPut += ' ';
                  }
                  for(let downText =1 ; downText <= downIndex ; downText ++){
                      outPut += downText;
                  }
                  for(let downFont = downIndex -1 ; downFont >= 1 ; downFont --){
                      outPut += downFont;
                  }
                  outPut += '\n';
                  downIndex --;
              }while( downIndex >= 1);
              showDoWhile.value = outPut;
              showFor.value = '';
              showWhile.value = '';
              break;
      }
    }   
  }
}
//This is Reset Function.....
function reset(){
  for(let index = 0 ; index <= inputBox.length ; index++){
    inputBox[index].value = '';
  }
}
//************************************************************************************** */
let displayDate = new Date();  
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