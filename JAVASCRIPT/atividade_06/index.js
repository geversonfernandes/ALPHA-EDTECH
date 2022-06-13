const btn = document.querySelector("#start");
btn.addEventListener("click", bomba)

function bomba(){
    document.querySelector("#bomb-on").style.display = "flex";
    document.querySelector("#bomb-off").style.display = "none";
    timeExplosion = setTimeout(bombExplosion, 10000);
    const explosion = document.querySelector("#explosion");
    explosion.innerHTML = " 10 segundos";
};

function bombExplosion(){
    document.querySelector("#bomb-on").style.display = "none";
    document.querySelector("#bomb-off").style.display = "none";
    document.querySelector("#bomb-explosion").style.display = "flex";
    const music = new Audio('audio/piw.mp3');
    music.play();
}

const click = document.querySelector("#bomb-link");
click.addEventListener("click", desarm);

function desarm(){
    const desarmBomb = document.querySelector("#explosion");
    desarmBomb.innerHTML = "Bomba desarmada";
    clearTimeout(timeExplosion);
    document.querySelector("#bomb-on").style.display = "none";
    document.querySelector("#bomb-off").style.display = "flex";
}