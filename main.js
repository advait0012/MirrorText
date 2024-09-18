const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button")
const copied = document.querySelector(".chip")

inputElement.addEventListener("keypress",(e)=>{
    if(e.keyCode === 13){
        let inputVal = inputElement.value;
        let mirrorText = inputVal.split("").reverse().join("");
        inputElement.value = mirrorText;
    }
})