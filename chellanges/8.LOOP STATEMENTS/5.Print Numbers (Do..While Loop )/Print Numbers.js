// DOM Declaration
let first_Number = document.getElementById("firstNumber");
let second_Number = document.getElementById("secondNumber");
let inputs = document.getElementById("resultId");

//This is main Funtion......
function dowhileLoop(){
  if(first_Number.value === '' || second_Number.value === ''){
    alert("Please Enter the number...")
    return
  }

  let res = "";
  let index = first_Number.value;
  do{
    res += `${index} \n`;
    inputs.value = res;
    index ++;
  }while(index <= second_Number.value );
}
//************************************************************************* */
let displayDate = new Date();
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

