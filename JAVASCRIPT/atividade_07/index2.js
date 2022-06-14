const selectCep = document.getElementById("cep");
selectCep.addEventListener("input", captureCharCode);
selectCep.addEventListener("keyup", limitCaracter);

let cep = "";
let firstPart;

function captureCharCode(){
    let numbers = /[^0-9]/;
    selectCep.value = selectCep.value.replace(numbers,"")
}


function limitCaracter(){
    cep = selectCep.value;
    if(cep.length === 5){
        // cep += "-";
        selectCep.value = cep;
        firstPart = cep;
    }

    if(cep.length >= 6){
        console.log(cep);
        let secondPart = "-" + cep.substring(5,8);
        console.log(secondPart);
        selectCep.value = firstPart + secondPart;
    }
};