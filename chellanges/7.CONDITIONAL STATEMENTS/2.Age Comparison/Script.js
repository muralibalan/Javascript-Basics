//DOM Declaration....inputs....
let firstAge = document.getElementById("firstId");
let secondAge = document.getElementById("secondId");
let thirdAge = document.getElementById("thirdId");
let resultBox = document.getElementById("ageId")
let inputBox = document.getElementById("orderId");
let reInput = document.getElementsByClassName("reset");

// Age comparison function....
function compareAge(){
    //This is Input Validation....
        const ages = [firstAge.value, secondAge.value, thirdAge.value];
        if (ages.some(age => age === '')) {
            alert("Please Enter Age....");
            return;
        }
        if (ages.some(age => age > 110)) {
            alert("Please Enter Age Below 110....");
            return;
        }
        if (ages.some(age => age < 0)) {
            alert("Please Enter Age Above 0");
            return;
        }

    //This is convert the string to number using Map method...
        let parsedAge = ages.map((age => parseInt(age)));

    //This is calculate the Age....
        //if First age and SecoundAge is equal and Greater more then thirdAge...
        if(parsedAge[0] === parsedAge[1] && parsedAge[0] > parsedAge[2]){
            resultBox.value = "First and second Person is Elder"
            return;
        }
        //if SecoundAge and ThirdAge is equal and Greater more then FirstAge...
        if(parsedAge[1] === parsedAge[2] && parsedAge[1] > parsedAge[0]){
            resultBox.value = "second and Third Person is Elder";
            return;
        }
         //if FirstAge and ThirdAge is equal and Greater more then SecoundAge...
         if(parsedAge[0] === parsedAge[2] && parsedAge[0] > parsedAge[1]){
            resultBox.value = "First and Third Person is Elder";
            return;
        }
        //if All age is Equal
        if(parsedAge[0] === parsedAge[1] && parsedAge[1] === parsedAge[2]){
            resultBox.value = "All Person Age is Equal"
            return;
        }
        //if firstAge is Greater...
        if(parsedAge[0] > parsedAge[1] && parsedAge[0] > parsedAge[2]){
            resultBox.value = "First Person is Elder";
            return;
        }
        //if secoundAge is Greater
        if(parsedAge[1] > parsedAge[2]){
            resultBox.value = "second Person is Elder";
           
        //if thirdAge is Greater..
        }else {
            resultBox.value = "Third Person is Elder"
        }

    //This is Age Deasending order....
        parsedAge.sort((a,b) => b-a)
        inputBox.value = parsedAge;
}

// This is Reset ........
    function reset(){
        for(let i=0 ; i < reInput.length ; i++){
            reInput[i].value = null;
        }
    }
//******************************************************************************* */

//Date and Time declaration
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();


//copy to clipboard
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

//Code Statements

// function compareAge() {
//     // Check for input validity
//     const ages = [firstAge.value, secondAge.value, thirdAge.value];
//     if (ages.some(age => age === '')) {
//         alert("Please Enter Age....");
//         return;
//     }

//     if (ages.some(age => age > 110)) {
//         alert("Please Enter Age Below 110....");
//         return;
//     }

//     if (ages.some(age => age < 0)) {
//         alert("Please Enter Age Above 0");
//         return;
//     }

//     // Convert ages to numbers
//     const parsedAges = ages.map(age => parseInt(age));

//     // Find the oldest age
//     const maxAge = Math.max(...parsedAges);

//     // Find the index of the oldest age
//     const oldestIndex = parsedAges.findIndex(age => age === maxAge);

//     // Determine the result
//     const results = ["First Person is Elder", "Second Person is Elder", "Third Person is Elder"];
//     const result = (parsedAges.filter(age => age === maxAge).length > 1) ? "All Person Age is Equal" : results[oldestIndex];

//     // Display result
//     resultBox.value = result;

//     // Display ages in descending order
//     inputBox.value = parsedAges.sort((a, b) => b - a);
// }
