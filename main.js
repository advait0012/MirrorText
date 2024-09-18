// const inputEl = document.querySelector("input");
// const butonEl = document.querySelector("[btninput]");
// const chipEl = document.querySelector(".chip");

// inputEl.addEventListener("keypress", (event) => {
//   if (event.keyCode === 13) {
//     let inputVal = inputEl.value;
//     let mirrorText = inputVal.split("").reverse().join("");
//     console.log(mirrorText);
//   }
// });

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