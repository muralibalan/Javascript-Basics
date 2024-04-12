//DOM Declaration inputs......
let mathMark = document.getElementById("maths");
let physicsMark = document.getElementById("physics");
let chemistryMark = document.getElementById("chemistry");
let cutOff = document.getElementById("cutoff");
let result = document.getElementById("result");
let input = document.getElementsByClassName("reset");
let ocCategory = document.getElementById("oc");
let bcCategory = document.getElementById("bc");
let scCategory = document.getElementById("sc");
let collegeList = {
    level_1_Government_Engineering_College :{oc:195 , bc:194 , sc:193},
    level_2_Government_Engineering_College :{oc:190 , bc:189 , sc:188},
    level_1_Private_Engineering_College :{oc:185 , bc:184 , sc:183},
    level_2_Private_Engineering_College :{oc:180 , bc:179 , sc:178}
}
function find(){
    //This is validation inputs...
    let isValid = (
                    mathMark.value === '' ||
                    physicsMark.value === '' ||
                    chemistryMark.value === '' ||
                    (ocCategory.checked === false && bcCategory.checked === false && scCategory.checked === false)
    );

    let validMarks = (
                    physicsMark.valueAsNumber > 50 ||
                    chemistryMark.valueAsNumber > 50 ||
                    physicsMark.valueAsNumber < 0 ||
                    chemistryMark.valueAsNumber < 0
    );

    let validMathMarks = (
                    mathMark.valueAsNumber > 100 || 
                    mathMark.valueAsNumber < 0
    );

    if (isValid) {
        alert("Please Enter Your Marks and Community...");
        return;
    }
    if(validMathMarks){
        alert("Please Enter Maths Marks Above 0 and outup 100...");
        return;
    }
    if (validMarks) {
        alert("Please Enter Physics and chemistry marks Above 0 and outup 50...");
        return;
    } 

    //This is calculate Total Marks...
    const totalMarks = mathMark.valueAsNumber + physicsMark.valueAsNumber + chemistryMark.valueAsNumber;
    cutOff.value = totalMarks;

    //This is store the category by variable...
    const seletedCaste = (ocCategory.checked)? "oc" : 
    (bcCategory.checked)? "bc" :
    (scCategory.checked)? "sc" : "" ;

    //This is call the Function Eligibility checking ...
    eligibleCheck(totalMarks,seletedCaste);
}

// This is value checking function....
function eligibleCheck(cutoff,community){
    
    let collegeList_Values = Object.values(collegeList);
    let college_keysList = Object.keys(collegeList);
    let findIndex = collegeList_Values.findIndex( element => cutoff >= element[community])
    result.innerHTML = college_keysList[findIndex]
}

//This is page Reset........
function reset(){
    ocCategory.checked = false;
    bcCategory.checked = false;
    scCategory.checked = false;
    for(let i = 0 ; i < input.length ; i++){
        input[i].value = '';
        result.innerHTML = '';
    }
}



//****************************************************************************** */
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
//Code Logic Statements
//************************************************************************* */

