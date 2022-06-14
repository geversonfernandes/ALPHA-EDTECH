const selectElement = document.getElementById("selector");
const selectImg = document.getElementById("car-images");
const selectText = document.getElementById("car-data");
let valueOption;

selectElement.addEventListener("change", changeContent);

function changeContent(){
    valueOption = selectElement.value;
    if(valueOption == 1){
        selectImg.setAttribute("src", "images/onix.png");
        selectText.innerHTML = "Nome: Onix <br>Fabricante: Chevrolet<br> Velocidade: 0-167km";
    } else if(valueOption == 2){
        selectImg.setAttribute("src", "images/chevy.png");
        selectText.innerHTML = "Nome: Bel Air <br>Fabricante: Chevrolet<br> Velocidade: 0-193km";
    } else if(valueOption == 3){
        selectImg.setAttribute("src", "images/lamborghini.png");
        selectText.innerHTML = "Nome: Lamborghini <br>Fabricante: Volkswagen<br> Velocidade: 0-350km";
    }
};