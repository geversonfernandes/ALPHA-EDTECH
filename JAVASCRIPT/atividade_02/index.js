const btnVerify = document.getElementById("verify");

btnVerify.addEventListener("click", function(e){

    e.preventDefault();

    const valueOne = parseInt(document.getElementById("value1").value);
    const valueTwo = parseInt(document.getElementById("value2").value);

    if(valueOne > valueTwo){
        document.getElementById("result").innerHTML = "O primeiro valor é o maior";
    } else if (valueTwo > valueOne) {
        document.getElementById("result").innerHTML = "O segundo valor é o maior";
    } else {
         document.getElementById("result").innerHTML = "Os valores são iguais.";
    }
});

const btnCompare = document.getElementById("compare");

btnCompare.addEventListener("click", function(e){

    e.preventDefault();

    const stringOne = document.getElementById("first-string").value.length;
    const stringTwo = document.getElementById("second-string").value.length;

    if(stringOne > stringTwo){
        document.getElementById("result-length").innerHTML = "A primeira string é maior.";
    } else if(stringOne < stringTwo){
        document.getElementById("result-length").innerHTML = "A primeira string é <b>menor</b>.";
    } else{
        document.getElementById("result-length").innerHTML = "As strings tem o mesmo tamanho.";
    }
})

const btnCalculate = document.getElementById("calculate");

btnCalculate.addEventListener("click", function(e){

    e.preventDefault();

    const x = document.getElementById("birth-date").value;
    const birthDate = new Date(x); 
    const todaysDate = new Date();
    const ageInMilliseconds = todaysDate - birthDate;
    const ageInDays = Math.round(ageInMilliseconds/(1000*60*60*24));

    const menDaysToDie = Math.round(73.1 * 365);
    const womenDaysToDie = Math.round(80.1 * 365);
    const genre = document.getElementById("genre").value;

    if(genre == "masculino"){
        document.getElementById("death-day").innerHTML = "Faltam "+(menDaysToDie - ageInDays)+ " dias para sua morte. :'(";
    }
    else if(genre == "feminino"){
        document.getElementById("death-day").innerHTML = "Faltam "+(womenDaysToDie - ageInDays)+ " dias para sua morte. :'(";
    }
    else{
        document.getElementById("death-day").innerHTML = "O gênero informado está incorreto. Digite masculino ou feminino";
    }
})