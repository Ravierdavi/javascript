const minValue = document.getElementById("inpNumberMin")
const maxValue = document.getElementById("inpNumberMax")
const btn = document.getElementById("btn")
const display = [document.getElementById("firstNumber"),
document.getElementById("secondNumber"),
document.getElementById("thirdNumber")]

btn.onclick = function numberGenerator(){
    const min = Number(minValue.value)
    const max = Number(maxValue.value) + 1

    const randomNumber = () => {
        let n
        min <= max ? n = Math.floor(Math.random() * (max - min)) + min : n = 0
        return n
    }

    for (let i = 0; i < display.length; i++) {
        display[i].textContent = randomNumber()
    }
}