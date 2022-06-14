const btn = document.getElementById("start");
btn.addEventListener("click", alarmControl);

//variaveis
const selectMinutes = document.getElementById("minutes");
const selectSeconds = document.getElementById("seconds");
const alertMsg = document.getElementById("alert");
let minutes;
let seconds;
let countClick = 0;
let timeInSeconds;
let timeDecremented;
let cron;
const music = new Audio('audio/alarm.mp3');

//função para parar desarmar o alarme
function alarmControl() {
    if (countClick == 0) {
        countClick++;
        return count();
    } else {
        clearInterval(cron);
        music.pause();
    }
};

//função para executar o setInterval e chamar a função decremet
function count() {
    minutes = parseInt(selectMinutes.value);
    seconds = parseInt(selectSeconds.value);
    cron = setInterval(decrement, 1000);
    timeInSeconds = (minutes * 60 + (seconds));
};

//função para decrementar e exibir o tempo na tela
function decrement() {
    //selecionando os paragrafos e exibindo em tela
    let currentMinute = document.getElementById("paragraph-minutes");
    let currentSecond = document.getElementById("paragraph-seconds");
    currentMinute.innerHTML = minutes;
    currentSecond.innerHTML = seconds;

    //interromper tempo e tocar som
    if (minutes == 0 && seconds == 0) {
        clearInterval(cron);
        music.play();
    }
    // condicional para decrementar o tempo
    switch (seconds) {
        case -1:
            minutes--;
            break;
        case 0:
            seconds = 60;
            minutes--;
            break;
        default:
            break;
    }
    seconds--;
    //condicional para alerta de tempo
    timeDecremented = (minutes * 60 + (seconds));
    if (timeDecremented < timeInSeconds * 0.05) {
        alertMsg.innerHTML = "Alerta! O tempo está acabando.";
    } else {
        timeDecremented--;
    }
};