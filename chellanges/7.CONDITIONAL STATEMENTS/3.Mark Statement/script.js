// DOM Declaration inputs.......
let lanMark = document.getElementById("langId");
let phyMark = document.getElementById("physicsId");
let matMark = document.getElementById("mathsId");
let cheMark = document.getElementById("chemistryId");
let bioMark = document.getElementById("bioId");
let gradeResult = document.getElementById("gradeId");
let statusResult = document.getElementById("passId");
let eligibleResult = document.getElementById("eligibleId");
let totalResult = document.getElementById("totalId");
let totalAvg =document.getElementById("avgId");
let cutoffResult = document.getElementById("cutoffId");
let inputBoxReset = document.getElementsByClassName("reset");

//This is Main Function Eligibility checking........
function checkEligibility(){
   //Store the all Marks in Array...
   let studentMarks = [
       lanMark.value,
       phyMark.value,
       matMark.value,
       cheMark.value,
       bioMark.value
   ];
   //This is inputs Validation......
   if(studentMarks.some(mark => mark === '')){
       alert("Plaese Enter the All Marks");
       return;
   }
   if(studentMarks.some(mark => mark > 100)){
       alert("Please Enter the Mark upto '100'...");
       return;
   }
   if(studentMarks.some(mark => mark <0)){
       alert("Please Enter the Mark Above '0'...")
       return;
   }
   //This is Convert the Marks string to Number....using map method...
       let parsedMark = studentMarks.map(mark => parseInt(mark));
   //This is Total Marks adding and Displaying...using reduce function...
       let total = parsedMark.reduce((acc,mark)=> acc + mark,0);
   //This is Finding Average....
       let findAvg =parseInt(total/5);

   //This is Grade Checking....using Ternary operator....
        (findAvg >= 90)? gradeResult.value ="A Grade" : 
        (findAvg <= 90 && findAvg > 60)? gradeResult.value = "B Grade" :
        (findAvg <=60 && findAvg >40)? gradeResult.value = "C Grade":"";

   //This is cutoff checking.....
   let cutoff = parsedMark[1]/2 + parsedMark[2] + parsedMark[3]/2;

   // This is Eligibility checking....
        (cutoff >180)? eligibleResult.value = "Eligible for Medicine" :
        (cutoff <=180 && cutoff >160)? eligibleResult.value = "Eligible for Engneearing" :
        (cutoff < 160) ?  eligibleResult.value = "Not Eligible for any Collage" : "";

   //This is Pass or Fail checking..... 
   if(parsedMark.every(mark => mark >= 35)){
       //This is Displaying all Result...
           totalResult.value = total;
           totalAvg.value = `${findAvg} %`
           statusResult.value = "Pass";
           cutoffResult.value = cutoff;
           return;

   }
   //if Fail Displaying this Result......
    totalResult.value = total;
    totalAvg.value = '';
    statusResult.value = "Fail";
    cutoffResult.value = '';
    gradeResult.value = '';
    eligibleResult.value = '';
   
}

// This is Reset function.......
function reset(){
   for( let i = 0 ; i <= inputBoxReset.length ; i++){
       inputBoxReset[i].value = '';
   }
}


