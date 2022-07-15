const selectCep = document.getElementById("cep");
const btn = document.querySelector("#search");
const btn2 = document.querySelector("#show__map");
const td1 = document.querySelector("#td1");
const td2 = document.querySelector("#td2");
const td3 = document.querySelector("#td3");
const td4 = document.querySelector("#td4");
const td5 = document.querySelector("#td5");
const td6 = document.querySelector("#td6");
const iframe = document.querySelector("#maps");
const selectBody = document.getElementsByTagName("body");
const layer = document.querySelector("#layer");
let firstPart;
let cep = "";
let cepJson;

function activeButton(){
    document.querySelector("#search").disabled = false;
};

function captureCharCode(){
    let numbers = /[^0-9]/;
    selectCep.value = selectCep.value.replace(numbers,"")
};

function limitCaracter(){
    cep = selectCep.value;
    if(cep.length === 5){
        selectCep.value = cep;
        firstPart = cep;
    };
    if(cep.length >= 6){
        let secondPart = "-" + cep.substring(5,8);
        selectCep.value = firstPart + secondPart;
    };
    if(cep.length > 7){
        activeButton();
    };
};

function apiCep(){
    cepJson = cep.replace("-","");
    fetch(`https://cep.awesomeapi.com.br/json/${cepJson}`)
    .then((response) => response.json())
    .then((data) => loadData(data))
    .catch((e) => {
      alert(e.message);
    });
    layer.style.display = "flex";
    layer.style.cursor = "wait";
};

function loadData(data){
    if(data.address !== undefined){
        td1.innerHTML = data.address;
        td2.innerHTML = data.district;
        td3.innerHTML = data.city;
        td4.innerHTML = data.state;
        td5.innerHTML = data.lat;
        td6.innerHTML = data.lng;
        btn2.style.display = "block";
        layer.style.display = "none";
        layer.style.cursor = "default";
    } else{
        alert("Cep Inválido");
        layer.style.cursor = "default";
        layer.style.display = "none";
    };
};

function changeSrcIframe(){
    iframe.setAttribute("src",`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d61882.430871705015!2d${td6.textContent}!3d${td5.textContent}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1657297348876!5m2!1spt-BR!2sbr`);
};

selectCep.addEventListener("input", captureCharCode);
selectCep.addEventListener("input", limitCaracter);
btn.addEventListener("click", apiCep);
btn2.addEventListener("click", changeSrcIframe);