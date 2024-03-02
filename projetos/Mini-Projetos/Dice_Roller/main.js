const numBox = document.getElementById("numBox")
const resultArray = document.getElementById("res")
const displayDices = document.getElementById("dices_display")
const maxDice = 6
const minDice = 1

function roll() {
    let repeat = Number(numBox.value)
    const dices = []
    displayDices.innerHTML = ""
    resultArray.textContent = ""

    if (repeat > 9) {
        alert("Very high value. Try again between 1 - 9")
    }
    else if(repeat < 1) {
        alert("Very low value. Try again between 1 - 9")
    }
    else {
        while(repeat > 0) {
            const randomNum = Math.floor(Math.random() * (maxDice - minDice+1)) + minDice
            dices.push(randomNum)
            displayDices.innerHTML += `<img class='dice' src='dice_images/dice0${randomNum}.png'>`

            repeat--
        }

        resultArray.textContent = dices
    }
}