const btn = document.querySelector("#start");
btn.addEventListener("click", bomba);

let timeExplosion;
let counter;
let timeLeft = 0;
const musica = new Audio('audio/tick.wav');

function bomba(){
    btn.disabled = true;
    document.querySelector("#bomb-explosion").style.display = "none";
    document.querySelector("#bomb-on").style.display = "flex";
    document.querySelector("#bomb-off").style.display = "none";
    const explosion = document.querySelector("#explosion");
    timeLeft = 60;
    explosion.innerHTML = timeLeft;
    counter = setInterval (verifyCounter, 1000);
};

function verifyCounter(){
    timeLeft --;
    switch (timeLeft) {
        case 0:
            bombExplosion();
            break;
        default:
            break;
    }
    explosion.innerHTML = timeLeft;
    musica.play();
};

function bombExplosion(){
    document.querySelector("#bomb-on").style.display = "none";
    document.querySelector("#bomb-off").style.display = "none";
    document.querySelector("#bomb-explosion").style.display = "flex";
    const music = new Audio('audio/piw.mp3');
    music.play();
    clearInterval(counter);
    btn.disabled = false;
};

const click = document.querySelector("#bomb-link");
click.addEventListener("click", desarm);

function desarm(){
    const desarmBomb = document.querySelector("#explosion");
    desarmBomb.innerHTML = "Bomba desarmada";
    clearInterval(counter);
    document.querySelector("#bomb-on").style.display = "none";
    document.querySelector("#bomb-off").style.display = "flex";
    btn.disabled = false;
};