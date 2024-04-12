// DOM Declaration.....Inputs.....
let deg = document.getElementById("degree");
let result = document.getElementById("result");
let inputs = document.getElementsByClassName("reset");
const degree_Jobs = {
   bca: 'Jr. Software developer',
   bscCs: 'Jr. Software developer',
   beCs: 'Jr. Software developer',
   beIt: 'Jr. Software developer',
   mca: 'Sr. Software developer',
   mscCs: 'Sr. Software developer', 
   meCs: 'Sr. Software developer',
   meIt: 'Sr. Software developer'
};

//This is main function Find Eligible for jab...
function findEligiblity(){
    // This is Validation....inputs....
      if (deg.value === '') {
         alert("Please Select Your Degree.....");
         return;
      }

   // This is Code lagic and Display Results...
      if (degree_Jobs[deg.value]) {
         result.innerHTML = degree_Jobs[deg.value];
      }   
 }

 //This is input reset.....
 function reset(){
   inputs[0].value = '';
   inputs[1].innerHTML = '';
 }
 //********************************************************************************* */
//   // DOM Declaration.....Inputs.....
// let deg = document.getElementById("degree");
// let result = document.getElementById("result");
// let inputs = document.getElementsByClassName("reset");

// //This is main function Find Eligible for jab...
// function findEligiblity(){
//     // This is Validation....inputs....
    
//       if(deg.value === ''){
//          alert("Please Select Your Degree.....")
//          return;
//       }

//       if(deg.value === "bca" || deg.value === "bscCs" || deg.value === "beCs" || deg.value ==="beIt"){
//          result.innerHTML = "Jr. Software developer"
//          return;
//       }

//       if(deg.value === "mca" || deg.value === "mscCs" || deg.value === "meCs" || deg.value === "meIt"){
//          result.innerHTML = "Sr. Software developer"
//       }
//       else{
//          result.innerHTML = "Other Education "
//       }
    
//  }
//  //input reset
//  function reset(){
//    inputs[0].value = '';
//    inputs[1].innerHTML = '';
//  }
//********************************************************************************** */
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
