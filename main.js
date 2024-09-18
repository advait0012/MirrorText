const inputEl = document.querySelector("input")
const butonEl = document.querySelector("[btninput]")
const chipEl = document.querySelector(".chip")


const btn = document.querySelector('[btninput]');
btn.addEventListener("click", () => {
  alert("Hello");
});


inputEl.addEventListener("keypress",(e)=>{
  console.log(e.key);
  
})