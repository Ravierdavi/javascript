const pontSec = document.getElementById("s");
const pontMin = document.getElementById("m");
const pontHour = document.getElementById("h");
const startButton = document.getElementById("start");
const currentButton = document.getElementById("current");
const customButton = document.getElementById("custom");
const inputTime = document.getElementById("time");
let verify = false;
let interval;

// Event Listeners para os botões
startButton.addEventListener("click", startClock);
currentButton.addEventListener("click", startCurrentTime);
customButton.addEventListener("click", startCustomTime);

// Função para limpar o intervalo e reiniciar o relógio
function clear() {
    clearInterval(interval);
    pontSec.style.rotate = "0deg";
    pontMin.style.rotate = "0deg";
    pontHour.style.rotate = "0deg";
}

// Função para iniciar o relógio padrão
function startClock() {
    clear();
    let cs = 0, cm = 0, ch = 0;

    function updateClock() {
        if (cm === 354) {
            ch += 30;
            cm = 0;
        } else if (cs === 354) {
            cm += 6;
            cs = 0;
        } else {
            cs += 6;
        }

        pontSec.style.rotate = `${cs}deg`;
        pontMin.style.rotate = `${cm}deg`;
        pontHour.style.rotate = `${ch}deg`;
    }

    updateClock();
    interval = setInterval(updateClock, 1000);
}

// Função para iniciar o relógio com base no horário atual
function startCurrentTime() {
    clear();

    function updateClock() {
        const data = new Date();
        const h = data.getHours();
        const m = data.getMinutes();
        const s = data.getSeconds();

        pontSec.style.rotate = `${s * 6}deg`;
        pontMin.style.rotate = `${m * 6}deg`;
        pontHour.style.rotate = `${(h % 12) * 30}deg`;
    }

    updateClock();
    interval = setInterval(updateClock, 1000);
}

// Função para iniciar o relógio com base em um horário personalizado
function startCustomTime() {
    clear();
    verify = !verify;
    inputTime.style.display = verify ? "block" : "none";

    let h = Number(inputTime.value.substring(0, 2));
    let m = Number(inputTime.value.substring(3, 5));
    let s = Number(inputTime.value.substring(6, 8));

    function updateClock() {
        pontSec.style.rotate = `${s * 6}deg`;
        pontMin.style.rotate = `${m * 6}deg`;
        pontHour.style.rotate = `${(h % 12) * 30}deg`;

        if (m === 59) {
            h += 1;
            m = 0;
        } else if (s === 59) {
            m += 1;
            s = 0;
        } else {
            s += 1;
        }
    }

    updateClock();
    interval = setInterval(updateClock, 1000);
}