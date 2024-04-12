//DOM Declaration...
let result = document.getElementById("searchResult");
let inputBox = document.getElementsByClassName("reset")
//This is Main function
function stringFunction(string,suffix){
    let res = string.replaceAll (" ","");
    let ans = res.endsWith(suffix);

    // result.value =  ans;
    (ans === true)? result.value = "Present" : result.value = "Not Present";
}
//This is Page Reset
function reset(){
    for(let index = 0 ; index <= inputBox.length ; index ++){
        inputBox[index].value = '';
    }
}