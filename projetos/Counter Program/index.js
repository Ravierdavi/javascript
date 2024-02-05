// Counter Program
const display = document.querySelector("#display");
let count = 0;

document.querySelector("#decrease").onclick = function(){
    count--
    display.textContent = count
}

document.querySelector("#reset").onclick = function(){
    count = 0
    display.textContent = count
}

document.querySelector("#increase").onclick = function(){
    count++
    display.textContent = count
}