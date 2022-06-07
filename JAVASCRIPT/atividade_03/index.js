const btn = document.getElementById("calculate");

btn.addEventListener("click", function(e){

    e.preventDefault();

    const x = document.getElementById("operations").value;
    console.log(x);

    const valueOne = parseFloat(document.getElementById("number1").value);
    const valueTwo = parseFloat(document.getElementById("number2").value);

    if(x == "soma"){
        document.getElementById("paragraph").innerHTML = "O resultado é: "+(valueOne + valueTwo);
    } else if(x == "subtracao"){
        document.getElementById("paragraph").innerHTML = "O resultado é: "+(valueOne - valueTwo);
    } else if(x == "multiplicacao"){
        document.getElementById("paragraph").innerHTML = "O resultado é: "+(valueOne * valueTwo);
    }    else{
        document.getElementById("paragraph").innerHTML = "O resultado é: "+(valueOne / valueTwo);
        }
})