let code = document.querySelector(".code");
let copy = document.querySelector(".copy");
let generate = document.querySelector(".generate");

code.innerHTML = "No code yet";
let characters = "abcdfghijklmnopqrstuvwxyz1234567890ABCDFGHIJKLMNOPQRSTUVWXYZ#$%"
let characterLength = characters.length;

let generateCode = ()=>{
    let results = "";
    let length = 5;
    for ( let i = 0; i < length; i++) {
        results += characters.charAt(Math.floor(Math.random() * characterLength))
    }
    code.innerHTML = results
}

generate.addEventListener("click", ()=> {
    generateCode()
})

const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(code.innerHTML);
      alert("Code coied " + code.innerHTML)
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

copy.addEventListener("click", ()=>{
    copyContent()
})