/*************************************************************************************
 *  Name of the challenge  : Star Pattern                                            *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                                                                                   *
 *                                                                                   *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
//DOM Declration.....
let Numbers = document.getElementById("numberId");
let typeDesign = document.getElementById("chooseText");
let repeating = document.getElementById("chooseRepeat");
let loopSelect = document.getElementById("selectId");
let showFor = document.getElementById("showFor");
let showWhile = document.getElementById("showWhile");
let showDoWhile = document.getElementById("showDowhile");
let inputBox = document.getElementsByClassName("reset");
//This is main Funtion......
 function repeat(){
  // This is input Validation inputs......
  if(Numbers.value === '' || typeDesign.value === '' || repeating.value === ''){
    alert("Please Enter the Row & Select Text Type and Reapting or without Repeating....");
    return;
  }
  if(Numbers.valueAsNumber <= 0 || Numbers.valueAsNumber > 10){
    alert("Please Enter the Number above '0' and below '10'...")
    return;
  }

    let rows = Numbers.valueAsNumber;
    let type = `${typeDesign.value}&nbsp`;
    switch(true){
      //This is for Loop Using.......
      case (loopSelect.value === "forChoice"):{
                    //if with Repeat......for using repeat method....
                    if(repeating.value === "withRepeat"){
                            let outPut = '';
                            for(let index = 1 ; index <= rows ; index++){
                                for(let space = rows ; space >= index ; space --){
                                    outPut += ' ' ;
                                }    
                                outPut += type.repeat(index)+ '\n';
                            }
                            for(let downIndex = rows-1 ; downIndex >= 1 ; downIndex --){
                                for(let space = rows ; space >= downIndex ; space --){
                                    outPut += ' ' ;
                                } 
                                outPut += type.repeat(downIndex)+ '\n'; 
                            }
                            showFor.innerHTML = outPut;
                            showWhile.innerHTML = '';
                            showDoWhile.innerHTML = '';
                    //if without Repeat......for loop using....
                    }else{
                            let outPut = '';
                            for(let index = 1; index <= rows ; index ++){
                                for(let space = rows ; space >= index ; space--){
                                    outPut += ' ';
                                }
                                for(let text = 1 ; text <= index ; text ++){
                                    outPut +=  type ;
                                }
                                outPut += '\n';
                            }
                            for(let index = 1 ; index <= rows-1 ; index++){
                                for(let space = 1 ; space <= index + 1 ; space ++){
                                    outPut += ' ';
                                }
                                for(let text = rows-1 ; text >= index ; text-- ){
                                    outPut += type ;
                                }
                                outPut += '\n'; 
                            }
                            showFor.innerHTML = outPut;
                            showWhile.innerHTML = '';
                            showDoWhile.innerHTML = '';
                    }
                      break;
        }
        //This is While Loop Using.......
        case (loopSelect.value === "whileChoice"):{
                    //if with Repeat.....using repeat method
                    if(repeating.value === "withRepeat"){
                            if(repeating.value === "withRepeat"){
                                let outPut = '';
                                //while loop using...
                                let index = 1 ;
                                while( index <= rows){
                                    for(let space = rows ; space >= index ; space --){
                                        outPut += ' ' ;
                                    }    
                                    outPut += type.repeat(index)+ '\n';
                                    index++
                                }
                                let downIndex = rows-1 ;
                                while( downIndex >= 1){
                                    for(let space = rows ; space >= downIndex ; space --){
                                        outPut += ' ' ;
                                    } 
                                    outPut += type.repeat(downIndex)+ '\n'; 
                                    downIndex --;
                                }
                                showWhile.innerHTML = outPut;
                                showFor.innerHTML = '';
                                showDoWhile.innerHTML = '';
                            }
                    //if without Repeat.....and while loop using....
                    }else{
                            let outPut = '';
                            let index = 1;
                            while( index <= rows ){
                                for(let space = rows ; space >= index ; space--){
                                    outPut += ' ';
                                }
                                for(let text = 1 ; text <= index ; text ++){
                                    outPut +=  type ;
                                }
                                outPut += '\n';
                                index ++ ;
                            }
                            let downIndex = 1 ;
                            while( downIndex <= rows-1 ){
                                for(let space = 1 ; space <= downIndex + 1 ; space ++){
                                    outPut += ' ';
                                }
                                for(let text = rows-1 ; text >= downIndex ; text-- ){
                                    outPut += type ;
                                }
                                outPut += '\n'; 
                                downIndex ++
                            }
                            showWhile.innerHTML = outPut;
                            showFor.innerHTML = '';
                            showDoWhile.innerHTML = '';
                    }
                      break;
        }
        //This is Do While Loop using......
        case (loopSelect.value === "dowhileChoice"):{
                    //if with Repeat method using.......
                    if(repeating.value === 'withRepeat'){
                            let outPut = '';
                            //do while loop using...
                            let index = 1 ;
                            do{
                                for(let space = rows ; space >= index ; space --){
                                    outPut += ' ' ;
                                }    
                                outPut += type.repeat(index)+ '\n';
                                index++
                            }while( index <= rows);
                            let downIndex = rows-1 ;
                            do{
                                for(let space = rows ; space >= downIndex ; space --){
                                    outPut += ' ' ;
                                } 
                                outPut += type.repeat(downIndex)+ '\n'; 
                                downIndex --;
                            }while( downIndex >= 1);

                            showDoWhile.innerHTML = outPut;
                            showFor.innerHTML = '';
                            showWhile.innerHTML = '';
                    //This is with out repeat using....only do while loop....
                    }else{
                            let outPut = '';
                            let index = 1;
                            do{
                                for(let space = rows ; space >= index ; space--){
                                    outPut += ' ';
                                }
                                for(let text = 1 ; text <= index ; text ++){
                                    outPut +=  type ;
                                }
                                outPut += '\n';
                                index ++
                            }while( index <= rows);

                            let downIndex = 1 ;
                            do{
                                for(let space = 1 ; space <= downIndex + 1 ; space ++){
                                    outPut += ' ';
                                }
                                for(let text = rows-1 ; text >= downIndex ; text-- ){
                                    outPut += type ;
                                }
                                outPut += '\n';
                                downIndex++ 
                            } while( downIndex <= rows-1);
                            showDoWhile.innerHTML = outPut;
                            showFor.innerHTML = '';
                            showWhile.innerHTML = '';
                    }
                        break;
        }
      }
 }
 //This is Reset Page......
 function reset(){
    for(let index = 0 ; index <= inputBox.length ; index++){
        inputBox[index].value = '';
    }
 }
//************************************************************************** */
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

