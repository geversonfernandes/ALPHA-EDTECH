//QUESTÃO 01
const btn = document.getElementById("calculate");

btn.addEventListener("click", function(e){
    e.preventDefault();

    const weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if(height.includes(",")){
        height = height.replace("," , ".");
    }
    
    let imc = parseFloat(weight) / (parseFloat(height)*parseFloat(height));
    const result = document.getElementById("result");

    if (isNaN(height) || isNaN(weight)){
        result.innerHTML = "Insira apenas números."
    } else if(imc < 18.5){
        result.innerHTML = "Seu IMC é "+ (imc.toFixed(2)) + ": Abaixo do peso";
    } else if(imc >= 18.5 && imc < 25){
        result.innerHTML = "Seu IMC é "+ (imc.toFixed(2)) + ": Peso normal";
    } else if(imc >= 25 && imc < 30){
        result.innerHTML = "Seu IMC é "+ (imc.toFixed(2)) + ": Sobrepeso";
    } else{
        result.innerHTML = "Seu IMC é "+ (imc.toFixed(2)) + ": Obesidade";
    }
})

// QUESTÃO 02
const btn2 = document.getElementById("generate");

btn2.addEventListener("click", function(e){
    e.preventDefault();

    const minValue = parseFloat(document.getElementById("value-min").value);
    const maxValue = parseFloat(document.getElementById("value-max").value);
    let resultRandom = document.getElementById("random");

    if(isNaN(minValue) || isNaN(maxValue)){
        resultRandom.innerHTML = "Insira apenas números.";
    } else if(minValue >  maxValue){
        resultRandom.innerHTML = "O valor mínimo está maior que o valor máximo."
    } else if(Number.isInteger(minValue) && Number.isInteger(maxValue)){
        resultRandom.innerHTML = parseInt((Math.random() * (maxValue - minValue + 1) + minValue));
    } else{
        resultRandom.innerHTML = "Insira apenas números inteiros.";
    }
});

// QUESTÃO 03
const btn3 = document.getElementById("minor-major");

btn3.addEventListener("click", function(e){
    e.preventDefault();

    const valueNotInteger = document.getElementById("numberNotInteger").value;
    const values = document.getElementById("values");

    if(isNaN(valueNotInteger)){
        values.innerHTML = "Insira apenas números.";
    } else {
        values.innerHTML = "O menor inteiro é: " + Math.floor(valueNotInteger) + " e o maior inteiro é: " + Math.ceil(valueNotInteger) + ".";
    }
})

//QUESTÃO 04
const btn4 = document.getElementById("ibge");
btn4.addEventListener("click", function(e){
    e.preventDefault();

    const randomIbge = Math.random() * (11);
    const ibgeResult = document.getElementById("random-ibge");
    console.log(randomIbge.toFixed(2));

    if(randomIbge <= 0.86){
        ibgeResult.innerHTML = "VÉA";
    } else if(randomIbge > 0.86 && randomIbge <= 5.17 ){
        ibgeResult.innerHTML = "NOVINHA";
    } else if(randomIbge > 5.17 && randomIbge <= 5.99){
        ibgeResult.innerHTML = "VÉI";
    } else{
        ibgeResult.innerHTML = "NOVIM";
    }
})

